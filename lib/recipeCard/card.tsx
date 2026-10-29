// Facebook recipe preview card ("photo first", 1200x630) — approved Oct 2026.
// Big food photo, title, time · difficulty · servings, up to 6 key ingredients by
// name ("Full ingredient list inside →"), and a full-width
// "TAP THE PICTURE FOR THE FULL RECIPE" band as the strongest call to action.
// Rendered with next/og (Satori: flexbox only, inline styles).

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { lineCount } from './layout'
import { serifWidth, interWidth } from './fontMetrics'

const W = 1200
const H = 630
const BAND_H = 92
const PHOTO_W = 650
const PANEL_PAD_L = 40
const PANEL_PAD_R = 44
const PANEL_W = W - PHOTO_W - PANEL_PAD_L - PANEL_PAD_R // 466
const TITLE_W = PANEL_W - 10

const C = { cream: '#FBF4E6', ink: '#2C1810', body: '#3C2415', muted: '#78716C', orange: '#C8401A', orangeDark: '#A8320F', peach: '#F5D9C0', red: '#B91C1C', rule: 'rgba(185,28,28,0.06)' }

// ── Key ingredients ─────────────────────────────────────────────
const UNITS = /^(cups?|c\.|tablespoons?|tbsps?|tbs|tbsp\.|teaspoons?|tsps?|tsp\.|pounds?|lbs?\.?|ounces?|oz\.?|grams?|g|kg|ml|liters?|litres?|cloves?|cans?|packages?|pkgs?|sticks?|pinch(es)?|dash(es)?|large|medium|small|whole|bunch(es)?|heads?|slices?|pieces?|sprigs?|handfuls?|jars?|bottles?|quarts?|pints?|each|of)\b\.?\s*/i
const QTY = /^[\d½¼¾⅓⅔⅛⅜⅝⅞⅕\s/.\-–]+(to\s+[\d½¼¾⅓⅔⅛\s/.]+)?/i
const STAPLE = /^((kosher |sea |table )?salt( and (freshly )?(ground )?(black )?pepper)?|(freshly )?(ground )?(black |white )?pepper|(\w+ )?water|ice( cubes)?|(cooking|nonstick) spray)$/i

function cleanName(text: string): string {
  let s = text.trim().replace(QTY, '').replace(/^\([^)]*\)\s*/, '')
  for (let i = 0; i < 4; i++) {
    const next = s.replace(UNITS, '').replace(/^\([^)]*\)\s*/, '').replace(QTY, '')
    if (next === s) break
    s = next
  }
  s = s.split(/,|\(| – | - /)[0].replace(/\s+/g, ' ').trim()
  s = s.replace(/^((fresh|freshly|frozen|toasted|chopped|minced|grated|shredded|finely|thinly|cooked|uncooked|raw|unsalted|boneless|skinless|extra[- ]virgin|ripe|large|small|medium)\s+)+/i, '')
  return s ? s[0].toUpperCase() + s.slice(1) : ''
}

// Pantry basics come after the main ingredients (used only to fill up to 6).
const PANTRY = /\b(oil|flour|sugar|baking (soda|powder)|yeast|cornstarch|vinegar|extract|broth|stock|spray)\b|^(dried|ground) (?!beef|turkey|pork|chicken|lamb|sausage|veal)/i

/** Up to `max` main ingredients, by name only, in recipe order (skips salt, pepper, water…). */
export function keyIngredients(raw: unknown, max = 6): string[] {
  const all = allNames(raw)
  const main = all.filter((n) => !PANTRY.test(n))
  return [...main, ...all.filter((n) => PANTRY.test(n))].slice(0, max)
}

function allNames(raw: unknown): string[] {
  const list: unknown[] = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split('\n') : []
  const out: string[] = []
  for (const ing of list) {
    let name = ''
    if (typeof ing === 'string') name = cleanName(ing)
    else if (ing && typeof ing === 'object') {
      const o = ing as Record<string, unknown>
      name = cleanName(String(o.name ?? '')) || cleanName(String(o.measure ?? o.amount ?? ''))
    }
    if (!name || STAPLE.test(name)) continue
    if (out.some((n) => n.toLowerCase() === name.toLowerCase())) continue
    out.push(name)
  }
  return out
}

// ── Facts line ──────────────────────────────────────────────────
function minutes(m: number) {
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60), r = m % 60
  return r ? `${h} hr ${r} min` : `${h} hr`
}

export function factsOf(r: { total?: number | null; prep?: number | null; cook?: number | null; difficulty?: string | null; servings?: number | null }): string[] {
  const out: string[] = []
  const total = r.total || ((r.prep || 0) + (r.cook || 0)) || null
  if (total) out.push(minutes(total))
  const d = (r.difficulty || '').trim()
  if (d) out.push(d[0].toUpperCase() + d.slice(1).toLowerCase())
  if (r.servings) out.push(`Serves ${r.servings}`)
  return out
}

function fitTitle(title: string): { size: number; lines: number } {
  for (let size = 46; size >= 30; size -= 2) {
    const lines = lineCount(title, (TITLE_W * 0.96) / size, serifWidth)
    if (lines <= 3) return { size, lines }
  }
  return { size: 30, lines: 3 }
}

// ── Fonts ───────────────────────────────────────────────────────
let fontCache: ReturnType<typeof loadFonts> | null = null
function fonts() {
  if (!fontCache) { fontCache = loadFonts(); fontCache.catch(() => { fontCache = null }) }
  return fontCache
}

async function loadFonts() {
  const dir = join(process.cwd(), 'assets/og-fonts')
  const f = (n: string) => readFile(join(dir, n))
  const [m, sb, xb, serif, serifI, hand] = await Promise.all([
    f('Inter-Medium.ttf'), f('Inter-SemiBold.ttf'), f('Inter-ExtraBold.ttf'),
    f('SourceSerif4-Bold.ttf'), f('SourceSerif4-SemiBoldItalic.ttf'), f('Caveat-Bold.ttf'),
  ])
  return [
    { name: 'Inter', data: m, weight: 500 as const, style: 'normal' as const },
    { name: 'Inter', data: sb, weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: xb, weight: 800 as const, style: 'normal' as const },
    { name: 'Serif', data: serif, weight: 700 as const, style: 'normal' as const },
    { name: 'Serif', data: serifI, weight: 600 as const, style: 'italic' as const },
    { name: 'Hand', data: hand, weight: 700 as const, style: 'normal' as const },
  ]
}

const Arrow = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ marginLeft: 8 }}>
    <path d="M4 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const KEY_SIZES = [25, 24, 23, 22]
const KEY_COL_W = PANEL_W / 2
const BULLET_W = 22
const keyFits = (s: string, size: number) => interWidth(s) * size <= (KEY_COL_W - BULLET_W - 4) * 0.98

/** Largest size (25 → 22) at which every key ingredient name fits on one line. */
function keySize(names: string[]): number {
  return KEY_SIZES.find((size) => names.every((n) => keyFits(n, size))) ?? KEY_SIZES[KEY_SIZES.length - 1]
}

/** Last resort for a very long name: drop trailing words so it stays on one line. */
function oneLine(name: string, size: number): string {
  if (keyFits(name, size)) return name
  const words = name.split(' ')
  while (words.length > 1) {
    words.pop()
    const s = words.join(' ').replace(/[,;:]$/, '') + '…'
    if (keyFits(s, size)) return s
  }
  return words[0]
}

export interface CardData { title: string; photo: string; facts: string[]; key: string[] }

/** Renders the card and returns PNG bytes. Throws if anything fails. */
export async function renderRecipeCard(d: CardData): Promise<ArrayBuffer> {
  const t = fitTitle(d.title)
  const rows: string[][] = []
  const kSize = keySize(d.key)
  // Long names may wrap to a second line when the title leaves room (1–2 lines);
  // with a 3-line title they're kept to one line so the card never overflows.
  const key = t.lines <= 2 ? d.key : d.key.map((n) => oneLine(n, kSize))
  for (let i = 0; i < key.length; i += 2) rows.push(key.slice(i, i + 2))

  const el = (
    <div style={{ width: W, height: H, display: 'flex', flexDirection: 'column', backgroundColor: C.cream }}>
      <div style={{ display: 'flex', height: H - BAND_H }}>
        {/* Photo — as large as practical, full bleed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.photo} alt="" width={PHOTO_W} height={H - BAND_H} style={{ width: PHOTO_W, height: H - BAND_H, objectFit: 'cover' }} />

        {/* Recipe panel */}
        <div style={{
          width: W - PHOTO_W, display: 'flex', flexDirection: 'column',
          padding: `30px ${PANEL_PAD_R}px 22px ${PANEL_PAD_L}px`,
          backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 33px, ${C.rule} 33px, ${C.rule} 34px)`,
          borderTop: `8px solid ${C.red}`,
        }}>
          <div style={{ display: 'flex', fontFamily: 'Hand', fontWeight: 700, fontSize: 32, color: C.orange }}>From Chef Jen’s kitchen</div>
          <div style={{ display: 'flex', width: TITLE_W, marginTop: 6, fontFamily: 'Serif', fontWeight: 700, fontSize: t.size, lineHeight: 1.08, color: C.ink }}>{d.title}</div>

          {d.facts.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 14, fontFamily: 'Inter', fontWeight: 600, fontSize: 24, color: C.body }}>
              {d.facts.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && <span style={{ color: C.orange, margin: '0 12px', fontWeight: 800 }}>·</span>}
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', height: 2, backgroundColor: C.peach, marginTop: 18, marginBottom: 14 }} />
          {rows.length > 0 && <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 600, fontSize: 17, letterSpacing: 2, color: C.orange }}>YOU’LL NEED</div>}
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
            {rows.map((row, ri) => (
              <div key={ri} style={{ display: 'flex', marginTop: ri ? 6 : 0 }}>
                {row.map((n, ci) => (
                  <div key={ci} style={{ display: 'flex', width: KEY_COL_W, fontFamily: 'Inter', fontWeight: 500, fontSize: kSize, lineHeight: 1.25, color: C.body }}>
                    <span style={{ color: C.orange, width: BULLET_W, fontWeight: 600 }}>•</span>
                    <span style={{ display: 'flex', width: KEY_COL_W - BULLET_W - 6 }}>{n}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', fontFamily: 'Serif', fontStyle: 'italic', fontWeight: 600, fontSize: 21, color: C.muted }}>
            Full ingredient list inside<Arrow size={22} color={C.muted} />
          </div>
        </div>
      </div>

      {/* Strongest call to action — full width */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: BAND_H, backgroundColor: C.orange, borderTop: `4px solid ${C.orangeDark}` }}>
        <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'Inter', fontWeight: 800, fontSize: 38, letterSpacing: 1, color: '#FFFFFF' }}>
          TAP THE PICTURE FOR THE FULL RECIPE<Arrow size={38} color="#FFFFFF" />
        </div>
      </div>
    </div>
  )
  const res = new ImageResponse(el, { width: W, height: H, fonts: await fonts() })
  return res.arrayBuffer()
}
