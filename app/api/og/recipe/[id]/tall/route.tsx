// Tall recipe picture (1080x1350, 4:5) for Facebook photo posts and Pinterest —
// title, "From Chef Jen's Kitchen" and the food photo. Generated automatically from
// the recipe's own title and photo, for any recipe (website or shared).
// Served as a compressed JPEG and cached at the CDN (pages add ?v=<content hash>).
// If the picture can't be made, this redirects to the recipe's original photo.

import { NextResponse } from 'next/server'
import sharp from 'sharp'
import { serviceClient, recipePhotoUrl } from '@/lib/publishing'
import { renderTallCard } from '@/lib/recipeCard/tallCard'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const CARD_CACHE = 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400'
const FALLBACK_CACHE = 'public, max-age=300, s-maxage=300'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!UUID.test(id)) return new NextResponse('Not found', { status: 404 })

  const sb = serviceClient()
  if (!sb) return new NextResponse('Not configured', { status: 503 })
  const { data: r } = await sb.from('personal_recipes').select('id, title, photo_url').eq('id', id).is('deleted_at', null).maybeSingle()
  if (!r) return new NextResponse('Not found', { status: 404 })

  const photo = new URL(recipePhotoUrl(r.photo_url), new URL(req.url).origin).toString()
  try {
    const png = await renderTallCard({ title: (r.title || 'Untitled Recipe').trim(), photo })
    const jpeg = await sharp(Buffer.from(png)).jpeg({ quality: 85, mozjpeg: true }).toBuffer()
    return new NextResponse(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': CARD_CACHE } })
  } catch (e) {
    console.warn(`[tall recipe card] ${id}: render failed — using the photo`, e)
    const res = NextResponse.redirect(photo, 302)
    res.headers.set('Cache-Control', FALLBACK_CACHE)
    return res
  }
}
