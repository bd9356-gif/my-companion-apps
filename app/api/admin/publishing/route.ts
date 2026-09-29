// Admin publishing API — the only place that can change published / web_slug / web_collection.
// Every request must carry the admin's Supabase session token; the token is verified
// server-side and the email must be ADMIN_EMAIL. Rows are always scoped to that user's id.

import { NextRequest, NextResponse } from 'next/server'
import type { SupabaseClient } from '@supabase/supabase-js'
import { serviceClient, ADMIN_EMAIL, COLLECTIONS, STATIC_TIP_SLUGS, LEGACY_RECIPE_SLUGS, slugify } from '@/lib/publishing'

export const dynamic = 'force-dynamic'

type Admin = { sb: SupabaseClient; userId: string }

async function requireAdmin(req: NextRequest): Promise<Admin | NextResponse> {
  const sb = serviceClient()
  if (!sb) return NextResponse.json({ error: 'Server missing SUPABASE_SERVICE_ROLE_KEY' }, { status: 500 })
  const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '')
  if (!token) return NextResponse.json({ error: 'Not signed in' }, { status: 401 })
  const { data, error } = await sb.auth.getUser(token)
  const user = data?.user
  if (error || !user || (user.email || '').toLowerCase() !== ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Not authorized' }, { status: 403 })
  }
  return { sb, userId: user.id }
}

export async function GET(req: NextRequest) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const { sb, userId } = auth

  const [recipes, tips] = await Promise.all([
    sb.from('personal_recipes')
      .select('id, title, photo_url, created_at, published, web_slug, web_collection')
      .eq('user_id', userId)
      .is('deleted_at', null)
      .order('created_at', { ascending: false }),
    sb.from('notes')
      .select('id, title, created_at, published, web_slug')
      .eq('user_id', userId)
      .order('created_at', { ascending: false }),
  ])
  if (recipes.error || tips.error) {
    return NextResponse.json({ error: recipes.error?.message || tips.error?.message }, { status: 500 })
  }
  return NextResponse.json({ recipes: recipes.data, tips: tips.data })
}

async function uniqueSlug(sb: SupabaseClient, table: string, title: string, reserved: string[]): Promise<string> {
  const base = slugify(title)
  const { data } = await sb.from(table).select('web_slug').like('web_slug', `${base}%`)
  const taken = new Set<string>([...reserved, ...((data || []) as { web_slug: string }[]).map((r) => r.web_slug)])
  if (!taken.has(base)) return base
  for (let n = 2; ; n++) if (!taken.has(`${base}-${n}`)) return `${base}-${n}`
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin(req)
  if (auth instanceof NextResponse) return auth
  const { sb, userId } = auth

  const body = await req.json().catch(() => null) as
    { kind?: string; id?: string; published?: boolean; web_collection?: string | null } | null
  if (!body?.id || (body.kind !== 'recipe' && body.kind !== 'tip')) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
  const table = body.kind === 'recipe' ? 'personal_recipes' : 'notes'
  const cols = body.kind === 'recipe'
    ? 'id, title, photo_url, created_at, published, web_slug, web_collection'
    : 'id, title, created_at, published, web_slug'

  const { data: row, error } = await sb.from(table).select(cols).eq('id', body.id).eq('user_id', userId).maybeSingle()
  if (error || !row) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  const current = row as unknown as { title: string | null; published: boolean; web_slug: string | null; web_collection?: string | null }

  const update: Record<string, unknown> = {}

  if (body.kind === 'recipe' && 'web_collection' in body) {
    const c = body.web_collection || null
    if (c && !COLLECTIONS.some((x) => x.key === c)) return NextResponse.json({ error: 'Unknown collection' }, { status: 400 })
    update.web_collection = c
  }
  if (typeof body.published === 'boolean') update.published = body.published

  const willBePublished = (update.published ?? current.published) as boolean
  const collectionAfter = ('web_collection' in update ? update.web_collection : current.web_collection) as string | null
  if (body.kind === 'recipe' && willBePublished && !collectionAfter) {
    return NextResponse.json({ error: 'Pick a collection before publishing' }, { status: 400 })
  }

  // First publish assigns the permanent address. It never changes after this.
  if (willBePublished && !current.web_slug) {
    update.web_slug = await uniqueSlug(sb, table, current.title || 'untitled', body.kind === 'tip' ? STATIC_TIP_SLUGS : LEGACY_RECIPE_SLUGS)
  }

  if (Object.keys(update).length === 0) return NextResponse.json({ item: row })

  const { data: saved, error: saveError } = await sb.from(table).update(update)
    .eq('id', body.id).eq('user_id', userId).select(cols).single()
  if (saveError) return NextResponse.json({ error: saveError.message }, { status: 500 })
  return NextResponse.json({ item: saved })
}
