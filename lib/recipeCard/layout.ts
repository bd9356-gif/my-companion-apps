// Facebook recipe preview card (Design B, landscape 1200x630) — layout maths.
// Pure functions: no I/O. The card always shows EVERY ingredient; the font size and
// number of columns are chosen so the complete list fits. If it can't fit even at
// the smallest allowed size, fitCard() returns null and the caller falls back to the
// recipe photo (never a shortened list).

import { interWidth, serifWidth } from './fontMetrics'

export const CARD_W = 1200
export const CARD_H = 630

// Fixed regions (px)
export const TOP_BAR = 10
export const PAD_TOP = 34
export const PAD_LEFT = 30
export const PAD_RIGHT = 34
export const PAD_BOTTOM = 24
export const LEFT_W = 360 // photo column
export const PHOTO_FRAME = 336
export const GAP = 32
export const RIGHT_W = CARD_W - PAD_LEFT - LEFT_W - GAP - PAD_RIGHT // 744
// Facebook puts a round ⓘ button over the top-right corner of link images, so the
// title stops short of that corner.
export const TITLE_W = RIGHT_W - 96

export const SUB_SIZE = 19 // "INGREDIENTS · 17 ITEMS" — sized to read on an iPhone
export const SUB_BLOCK = SUB_SIZE + 10 + 12 // label + margins
export const CLOSE_SIZE = 34 // "Ready to cook?" — ~11pt on an iPhone feed
export const CLOSE_BLOCK = Math.ceil(CLOSE_SIZE * 1.2) + 10

export const ING_LINE = 1.28 // line-height (× font size)
export const ING_SPACING = 0.36 // gap between ingredients (× font size)
export const BULLET = 0.8 // bullet column (× font size)
export const COL_GAP = 24
export const ING_MAX = 30
export const ING_MIN = 11
const WRAP_SAFETY = 0.96 // assume a little less usable width than measured

// ── Ingredient wording ─────────────────────────────────────────────

// The bundled fonts have no ⅓-style glyphs, so those display as 1/3 etc.
const FRACTIONS: Record<string, string> = { '⅓': '1/3', '⅔': '2/3', '⅛': '1/8', '⅜': '3/8', '⅝': '5/8', '⅞': '7/8', '⅕': '1/5', '⅖': '2/5', '⅗': '3/5', '⅘': '4/5', '⅙': '1/6', '⅚': '5/6' }
const fixFractions = (s: string) => s.replace(/[⅓⅔⅛⅜⅝⅞⅕⅖⅗⅘⅙⅚]/g, (c) => FRACTIONS[c])
const QUANTITY = /[\d½¼¾⅓⅔⅛⅜⅝⅞⅕⅖⅗⅘⅙⅚]/

/**
 * One ingredient as display text. Display-only: the stored data is never changed.
 * For {measure, name} pairs, prep notes that were stored with the measure move after
 * the name so the line reads naturally:
 *   "5 tablespoons, divided" + "All-purpose flour" → "5 tablespoons All-purpose flour, divided"
 *   "to taste" + "Salt and black pepper"            → "Salt and black pepper, to taste"
 */
export function displayIngredient(ing: unknown): string {
  if (typeof ing === 'string') return fixFractions(ing.trim())
  if (!ing || typeof ing !== 'object') return ''
  const o = ing as Record<string, unknown>
  const name = String(o.name ?? '').trim()
  const measure = String(o.measure ?? o.amount ?? '').trim()
  if (!measure) return fixFractions(name)
  if (!name) return fixFractions(measure)
  const comma = measure.indexOf(',')
  const head = (comma >= 0 ? measure.slice(0, comma) : measure).trim()
  const tail = comma >= 0 ? measure.slice(comma + 1).trim() : ''
  if (!QUANTITY.test(head)) return fixFractions(`${name}, ${measure}`)
  return fixFractions(tail ? `${head} ${name}, ${tail}` : `${head} ${name}`)
}

export function displayIngredients(raw: unknown): string[] {
  const list: unknown[] = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split('\n') : []
  return list.map(displayIngredient).filter(Boolean)
}

// ── Line-wrap estimate ─────────────────────────────────────────────

/** Number of lines `text` wraps to in a box `widthEm` ems wide (word wrap). */
export function lineCount(text: string, widthEm: number, measure: (s: string) => number): number {
  const space = measure(' ')
  let lines = 1
  let used = 0
  for (const word of text.split(/\s+/).filter(Boolean)) {
    const w = measure(word)
    if (used === 0) {
      if (w > widthEm) { lines += Math.ceil(w / widthEm) - 1; used = w % widthEm } else used = w
    } else if (used + space + w <= widthEm) {
      used += space + w
    } else {
      lines += 1
      if (w > widthEm) { lines += Math.ceil(w / widthEm) - 1; used = w % widthEm } else used = w
    }
  }
  return lines
}

// ── Title ──────────────────────────────────────────────────────────

export interface TitleFit { size: number; lines: number }

/** Largest title size (44 → 28) that keeps the title to two lines. */
export function fitTitle(title: string): TitleFit {
  for (let size = 44; size >= 28; size -= 2) {
    const lines = lineCount(title, (TITLE_W * WRAP_SAFETY) / size, serifWidth)
    if (lines <= 2) return { size, lines }
  }
  return { size: 28, lines: Math.min(3, lineCount(title, (TITLE_W * WRAP_SAFETY) / 28, serifWidth)) }
}

// ── Ingredients ────────────────────────────────────────────────────

export interface IngredientFit { size: number; columns: string[][] }

function itemHeights(items: string[], size: number, colW: number): number[] {
  const textEm = ((colW - BULLET * size) * WRAP_SAFETY) / size
  return items.map((t) => lineCount(t, textEm, interWidth) * ING_LINE * size)
}

/** Split items, in order, into at most `cols` columns with the smallest tallest column. */
function partition(heights: number[], cols: number, spacing: number): { cap: number; breaks: number[] } {
  const fits = (cap: number) => {
    const breaks: number[] = []
    let h = 0
    let count = 0
    heights.forEach((ih, i) => {
      const add = count === 0 ? ih : spacing + ih
      if (count > 0 && h + add > cap) { breaks.push(i); h = ih; count = 1 } else { h += add; count += 1 }
    })
    return breaks.length + 1 <= cols ? breaks : null
  }
  let lo = Math.max(...heights)
  let hi = heights.reduce((a, b) => a + b, 0) + spacing * heights.length
  while (hi - lo > 0.5) {
    const mid = (lo + hi) / 2
    if (fits(mid)) hi = mid; else lo = mid
  }
  return { cap: hi, breaks: fits(hi) || [] }
}

/** Largest font (and column count) at which the COMPLETE list fits the box. */
export function fitIngredients(items: string[], boxH: number): IngredientFit | null {
  if (items.length === 0) return { size: ING_MAX, columns: [[]] }
  let best: IngredientFit | null = null
  for (const cols of [1, 2, 3]) {
    if (cols > items.length) break
    const colW = (RIGHT_W - COL_GAP * (cols - 1)) / cols
    for (let size = ING_MAX; size >= ING_MIN; size -= 0.5) {
      if (best && size <= best.size) break
      const { cap, breaks } = partition(itemHeights(items, size, colW), cols, ING_SPACING * size)
      if (cap <= boxH) {
        const columns: string[][] = []
        let start = 0
        for (const b of [...breaks, items.length]) { columns.push(items.slice(start, b)); start = b }
        best = { size, columns }
        break
      }
    }
  }
  return best
}

// ── Whole card ─────────────────────────────────────────────────────

export interface CardLayout {
  title: TitleFit
  ingredients: IngredientFit
  ingredientBoxH: number
}

export function fitCard(title: string, items: string[]): CardLayout | null {
  const t = fitTitle(title)
  const titleH = Math.ceil(t.lines * t.size * 1.1)
  const boxH = CARD_H - TOP_BAR - PAD_TOP - titleH - SUB_BLOCK - CLOSE_BLOCK - PAD_BOTTOM
  const ing = fitIngredients(items, boxH)
  if (!ing) return null
  return { title: t, ingredients: ing, ingredientBoxH: boxH }
}

// ── Cache-busting version for the image URL ───────────────────────

/** Short hash of what the card shows, so an edited recipe gets a fresh image URL. */
// Bump when the card's design changes, so every recipe gets a fresh image URL
// (the CDN and Facebook cache cards by URL). Keep in step with the recipe app's
// share page (jen-ai-companion app/share/[id]/page.js).
export const CARD_DESIGN = 'b3'

export function cardVersion(...parts: unknown[]): string {
  const s = JSON.stringify([CARD_DESIGN, ...parts])
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) }
  return (h >>> 0).toString(36)
}
