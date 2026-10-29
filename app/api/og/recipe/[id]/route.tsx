// Facebook link-preview image for a recipe: the "photo first" recipe card (1200x630),
// generated automatically from the recipe's own data — photo, title, time /
// difficulty / servings, up to 6 key ingredients, and the
// "TAP THE PICTURE FOR THE FULL RECIPE" band.
// Used as og:image by the website recipe pages and by the recipe app's share pages
// (recipe.mycompanionapps.com/share/<id>, the "Share Full Recipe" link).
//
// Served as a compressed JPEG and cached at the CDN; the pages add ?v=<content hash>
// so an edited recipe gets a new image. If the card can't be made (photo won't load,
// any error), this redirects to the recipe's original photo instead.

import { NextResponse } from 'next/server'
import sharp from 'sharp'
import { serviceClient, recipePhotoUrl } from '@/lib/publishing'
import { renderRecipeCard, keyIngredients, factsOf } from '@/lib/recipeCard/card'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const CARD_CACHE = 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400'
const FALLBACK_CACHE = 'public, max-age=300, s-maxage=300'
const COLUMNS = 'id, title, photo_url, ingredients, servings, prep_time_minutes, cook_time_minutes, total_time_minutes, difficulty'

type Row = {
  id: string; title: string | null; photo_url: string | null; ingredients: unknown; servings?: unknown
  prep_time_minutes?: unknown; cook_time_minutes?: unknown; total_time_minutes?: unknown; difficulty?: string | null
}

function num(v: unknown): number | null {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? parseFloat(v) : NaN
  return Number.isFinite(n) && n > 0 ? n : null
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!UUID.test(id)) return new NextResponse('Not found', { status: 404 })

  const sb = serviceClient()
  if (!sb) return new NextResponse('Not configured', { status: 503 })
  const query = (cols: string) => sb.from('personal_recipes').select(cols).eq('id', id).is('deleted_at', null).maybeSingle()
  let { data, error } = await query(COLUMNS)
  // If the quick-facts columns ever fail, still make the card without them.
  if (error) ({ data, error } = await query('id, title, photo_url, ingredients, servings'))
  const r = data as unknown as Row | null
  if (!r) return new NextResponse('Not found', { status: 404 })

  const origin = new URL(req.url).origin
  const photo = new URL(recipePhotoUrl(r.photo_url), origin).toString()

  try {
    const png = await renderRecipeCard({
      title: (r.title || 'Untitled Recipe').trim(),
      photo,
      facts: factsOf({
        total: num(r.total_time_minutes), prep: num(r.prep_time_minutes), cook: num(r.cook_time_minutes),
        difficulty: r.difficulty, servings: num(r.servings),
      }),
      key: keyIngredients(r.ingredients),
    })
    const jpeg = await sharp(Buffer.from(png)).jpeg({ quality: 84, mozjpeg: true }).toBuffer()
    return new NextResponse(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': CARD_CACHE } })
  } catch (e) {
    console.warn(`[og recipe card] ${id}: render failed — using the photo`, e)
    const res = NextResponse.redirect(photo, 302)
    res.headers.set('Cache-Control', FALLBACK_CACHE)
    return res
  }
}
