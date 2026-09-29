// Website publishing — reads MyRecipe Companion content straight from Supabase.
// One source of truth: the app's own personal_recipes + notes rows.
// Server-only: uses the service role key (Vercel env SUPABASE_SERVICE_ROLE_KEY),
// which must never be exposed to the browser.

import { createClient, SupabaseClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://epgtahifcphwjifxmxst.supabase.co'
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_yMgB7J2Z2N6YhD_8llRXKQ_GjiY4qJf'
export const ADMIN_EMAIL = 'bd9356@gmail.com'

export const COLLECTIONS = [
  { key: 'everyday-favorites', title: 'Everyday Favorites', subtitle: 'Easy, satisfying recipes made for real life.' },
  { key: 'crowd-pleaser-classics', title: 'Crowd-Pleaser Classics', subtitle: 'Familiar favorites worth making again and again.' },
] as const
export type CollectionKey = (typeof COLLECTIONS)[number]['key']

// Every address the site has ever used for a recipe — never handed to a new recipe.
export const LEGACY_RECIPE_SLUGS = [
  'crispy-chicken-tacos', 'sheet-pan-chicken-veggies', 'spaghetti-stuffed-peppers', 'cheeseburger-casserole',
  'creamy-garlic-pasta', 'banana-split-smoothie', 'florida-yellow-snapper', 'shrimp-scampi-classic',
  'linguine-puttanesca-classic', 'italian-sausage-gnocchi', 'italian-cream-cake', 'lemon-pecorino-chicken',
  'chicken-spiedini', 'crab-imperial', 'garlic-grilled-shrimp', 'homemade-chicken-stock', 'linguine-puttanesca',
  'one-pan-italian-chicken', 'orange-creamsicle-smoothie', 'shrimp-scampi', 'tuscan-chicken-pasta',
]

// Tip addresses still served by hand-built pages; new tips must not take them.
export const STATIC_TIP_SLUGS = [
  'best-wine-for-cooking', 'cast-iron-vs-stainless-steel', 'restaurant-level-sauces',
  'how-to-use-instant-pot', 'how-to-rescue-dry-chicken', 'fix-over-salted-dish',
]

const FALLBACK_PHOTO = '/og-image.png'

export function serviceClient(): SupabaseClient | null {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) return null
  return createClient(SUPABASE_URL, key, { auth: { persistSession: false, autoRefreshToken: false } })
}

// ── Recipes ────────────────────────────────────────────────────────────

export interface PublicRecipe {
  slug: string
  collection: CollectionKey | null
  title: string
  description: string
  photo: string
  ingredients: string[]
  instructions: string[]
}

type RecipeRow = {
  id: string
  title: string | null
  description: string | null
  photo_url: string | null
  ingredients: unknown
  instructions: unknown
  web_slug: string
  web_collection: CollectionKey | null
  created_at: string | null
}

function photoOf(url: string | null): string {
  if (!url || url === '/chef-jen-update.png') return FALLBACK_PHOTO
  return url
}

function ingredientsOf(raw: unknown): string[] {
  const list: unknown[] = Array.isArray(raw)
    ? raw
    : typeof raw === 'string' ? raw.split('\n') : []
  return list
    .map((ing) => {
      if (typeof ing === 'string') return ing.trim()
      if (ing && typeof ing === 'object') {
        const o = ing as Record<string, unknown>
        return `${o.measure || o.amount || ''} ${o.name || ''}`.trim()
      }
      return ''
    })
    .filter(Boolean)
}

function instructionsOf(raw: unknown): string[] {
  const list: unknown[] = Array.isArray(raw)
    ? raw
    : typeof raw === 'string' ? raw.split('\n') : []
  return list
    .map((s) => (typeof s === 'string' ? s : '').trim())
    // RecipePage numbers the steps itself — drop any "1." / "Step 1:" the app stored.
    .map((s) => s.replace(/^(step\s*)?\d+\s*[.):-]\s*/i, ''))
    .filter(Boolean)
}

function toPublicRecipe(r: RecipeRow): PublicRecipe {
  return {
    slug: r.web_slug,
    collection: r.web_collection,
    title: r.title || 'Untitled Recipe',
    description: r.description || '',
    photo: photoOf(r.photo_url),
    ingredients: ingredientsOf(r.ingredients),
    instructions: instructionsOf(r.instructions),
  }
}

const RECIPE_COLUMNS = 'id, title, description, photo_url, ingredients, instructions, web_slug, web_collection, created_at'

export async function getPublishedRecipes(): Promise<PublicRecipe[]> {
  const sb = serviceClient()
  if (!sb) return []
  const { data, error } = await sb
    .from('personal_recipes')
    .select(RECIPE_COLUMNS)
    .eq('published', true)
    .is('deleted_at', null)
    .not('web_slug', 'is', null)
    .order('created_at', { ascending: true })
  if (error) { console.error('getPublishedRecipes', error.message); return [] }
  return (data as RecipeRow[]).map(toPublicRecipe)
}

export async function getPublishedRecipe(slug: string): Promise<PublicRecipe | null> {
  const sb = serviceClient()
  if (!sb) return null
  const { data, error } = await sb
    .from('personal_recipes')
    .select(RECIPE_COLUMNS)
    .eq('web_slug', slug)
    .eq('published', true)
    .is('deleted_at', null)
    .maybeSingle()
  if (error) { console.error('getPublishedRecipe', error.message); return null }
  return data ? toPublicRecipe(data as RecipeRow) : null
}

// ── Tips ───────────────────────────────────────────────────────────────

export interface PublicTip {
  slug: string
  title: string
  intro: string
  sections: { heading: string; content: string }[]
  bottomLine: string
  preview: string
}

type NoteRow = { id: string; title: string | null; content: string | null; web_slug: string }

function clean(line: string): string {
  return line.replace(/\*\*/g, '').replace(/^#+\s*/, '').replace(/^[-•*]\s+/, '• ').trim()
}

// Chef Jen answers use "**Heading**" lines (same rule the app's LearnView uses).
export function parseTip(title: string, content: string): Omit<PublicTip, 'slug'> {
  const lines = content.split('\n').map((l) => l.trim()).filter(Boolean)
  const introLines: string[] = []
  const sections: { heading: string; content: string }[] = []
  for (const line of lines) {
    const isHeader = (line.startsWith('**') && line.endsWith('**') && line.length > 4) || /^#{1,4}\s/.test(line)
    if (isHeader) {
      sections.push({ heading: clean(line).replace(/:$/, ''), content: '' })
    } else if (sections.length === 0) {
      introLines.push(clean(line))
    } else {
      const s = sections[sections.length - 1]
      s.content = s.content ? `${s.content}\n${clean(line)}` : clean(line)
    }
  }
  let bottomLine = ''
  const last = sections[sections.length - 1]
  if (last && /bottom line/i.test(last.heading)) {
    bottomLine = last.content
    sections.pop()
  }
  const intro = introLines.join('\n')
  const previewSource = intro || sections[0]?.content || ''
  const preview = previewSource.length > 160 ? previewSource.slice(0, 157).trimEnd() + '…' : previewSource
  return { title, intro, sections: sections.filter((s) => s.heading || s.content), bottomLine, preview }
}

function toPublicTip(n: NoteRow): PublicTip {
  return { slug: n.web_slug, ...parseTip(n.title || 'Chef Jen Tip', n.content || '') }
}

export async function getPublishedTips(): Promise<PublicTip[]> {
  const sb = serviceClient()
  if (!sb) return []
  const { data, error } = await sb
    .from('notes')
    .select('id, title, content, web_slug')
    .eq('published', true)
    .not('web_slug', 'is', null)
    .order('created_at', { ascending: true })
  if (error) { console.error('getPublishedTips', error.message); return [] }
  return (data as NoteRow[]).map(toPublicTip)
}

export async function getPublishedTip(slug: string): Promise<PublicTip | null> {
  const sb = serviceClient()
  if (!sb) return null
  const { data, error } = await sb
    .from('notes')
    .select('id, title, content, web_slug')
    .eq('web_slug', slug)
    .eq('published', true)
    .maybeSingle()
  if (error) { console.error('getPublishedTip', error.message); return null }
  return data ? toPublicTip(data as NoteRow) : null
}

// ── Addresses ──────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/['\u2019]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70)
    .replace(/-+$/g, '') || 'item'
}
