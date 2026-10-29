// Facebook recipe preview card — shared helpers (text measuring, cache version).

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

// ── Cache-busting version for the image URL ───────────────────────

// Bump when the card's design changes, so every recipe gets a fresh image URL
// (the CDN and Facebook cache cards by URL). Keep in step with the recipe app's
// share page (jen-ai-companion app/share/[id]/page.js).
export const CARD_DESIGN = 'c2'

/** Short hash of what the card shows, so an edited recipe gets a fresh image URL. */
export function cardVersion(...parts: unknown[]): string {
  const s = JSON.stringify([CARD_DESIGN, ...parts])
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) }
  return (h >>> 0).toString(36)
}
