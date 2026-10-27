// Facebook link-preview image for a recipe: the Design B recipe card (1200x630),
// generated automatically from the recipe's own data (photo, title, every ingredient).
// Used as og:image by the website recipe pages and by the recipe app's share pages
// (recipe.mycompanionapps.com/share/<id>, the "Share Full Recipe" link).
//
// Cached at the CDN; the pages add ?v=<content hash> so an edited recipe gets a new image.
// If the card can't be made (photo won't load, list too long to fit, any error),
// this redirects to the recipe's original photo instead — never a partial list.

import { NextResponse } from 'next/server'
import { serviceClient, recipePhotoUrl } from '@/lib/publishing'
import { displayIngredients, fitCard } from '@/lib/recipeCard/layout'
import { renderRecipeCard } from '@/lib/recipeCard/card'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const CARD_CACHE = 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400'
const FALLBACK_CACHE = 'public, max-age=300, s-maxage=300'

function servingsOf(v: unknown): number | null {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? parseFloat(v) : NaN
  return Number.isFinite(n) && n > 0 ? n : null
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!UUID.test(id)) return new NextResponse('Not found', { status: 404 })

  const sb = serviceClient()
  if (!sb) return new NextResponse('Not configured', { status: 503 })
  const { data: r } = await sb
    .from('personal_recipes')
    .select('id, title, photo_url, ingredients, servings')
    .eq('id', id)
    .is('deleted_at', null)
    .maybeSingle()
  if (!r) return new NextResponse('Not found', { status: 404 })

  const origin = new URL(req.url).origin
  const photo = new URL(recipePhotoUrl(r.photo_url), origin).toString()
  const fallback = () => {
    const res = NextResponse.redirect(photo, 302)
    res.headers.set('Cache-Control', FALLBACK_CACHE)
    return res
  }

  const title = (r.title || 'Untitled Recipe').trim()
  const ingredients = displayIngredients(r.ingredients)
  const layout = fitCard(title, ingredients)
  if (!layout) {
    console.warn(`[og recipe card] ${id}: ${ingredients.length} ingredients don't fit the card — using the photo`)
    return fallback()
  }

  try {
    const png = await renderRecipeCard({ title, photo, servings: servingsOf(r.servings), ingredients }, layout)
    return new NextResponse(png, { headers: { 'Content-Type': 'image/png', 'Cache-Control': CARD_CACHE } })
  } catch (e) {
    console.warn(`[og recipe card] ${id}: render failed — using the photo`, e)
    return fallback()
  }
}
