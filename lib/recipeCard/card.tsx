// Facebook recipe preview card ("photo first", 1200x630) — Chef Jen AI branding approved Nov 2026 (B2).
// Big food photo; on the right a large Chef Jen AI logo, the title, time · difficulty ·
// servings and "Full ingredient list inside →"; and a full-width
// "TAP THE PICTURE FOR THE FULL RECIPE" band as the strongest call to action.
// The short ingredient list was dropped for the logo — it was too small to read in the feed.
// Rendered with next/og (Satori: flexbox only, inline styles).

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { lineCount } from './layout'
import { serifWidth } from './fontMetrics'
import { chefJenLogo, LOGO_RATIO } from './brand'

const W = 1200
const H = 630
const BAND_H = 92
const PHOTO_W = 650
const PANEL_PAD_L = 40
const PANEL_PAD_R = 44
const PANEL_W = W - PHOTO_W - PANEL_PAD_L - PANEL_PAD_R // 466
const TITLE_W = PANEL_W - 10

const C = { cream: '#FBF4E6', ink: '#2C1810', body: '#3C2415', muted: '#78716C', orange: '#C8401A', orangeDark: '#A8320F', red: '#B91C1C', rule: 'rgba(185,28,28,0.06)' }

// Large Chef Jen AI logo, centered at the top of the recipe panel.
const LOGO_W = 370
const LOGO_H = Math.round(LOGO_W / LOGO_RATIO) // 229

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
  // "Boneless, skinless chicken breasts" → "chicken breasts" (descriptors first, then cut at a comma)
  s = s.replace(/^((fresh|freshly|frozen|toasted|chopped|minced|grated|shredded|finely|thinly|cooked|uncooked|raw|unsalted|boneless|skinless|extra[- ]virgin|ripe|large|small|medium)\b,?\s+)+/i, '')
  s = s.split(/,|\(| – | - /)[0].replace(/\s+/g, ' ').trim()
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
  const [m, sb, xb, serif, serifI] = await Promise.all([
    f('Inter-Medium.ttf'), f('Inter-SemiBold.ttf'), f('Inter-ExtraBold.ttf'),
    f('SourceSerif4-Bold.ttf'), f('SourceSerif4-SemiBoldItalic.ttf'),
  ])
  return [
    { name: 'Inter', data: m, weight: 500 as const, style: 'normal' as const },
    { name: 'Inter', data: sb, weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: xb, weight: 800 as const, style: 'normal' as const },
    { name: 'Serif', data: serif, weight: 700 as const, style: 'normal' as const },
    { name: 'Serif', data: serifI, weight: 600 as const, style: 'italic' as const },
  ]
}

const Arrow = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ marginLeft: 8 }}>
    <path d="M4 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// `key` (main ingredients) is no longer drawn on the card; kept so callers don't change.
export interface CardData { title: string; photo: string; facts: string[]; key?: string[] }

/** Renders the card and returns PNG bytes. Throws if anything fails. */
export async function renderRecipeCard(d: CardData): Promise<ArrayBuffer> {
  const t = fitTitle(d.title)
  const [logo, fontList] = await Promise.all([chefJenLogo(), fonts()])

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={LOGO_W} height={LOGO_H} style={{ width: LOGO_W, height: LOGO_H, marginTop: -18, alignSelf: 'center' }} />
          <div style={{ display: 'flex', width: TITLE_W, marginTop: 4, fontFamily: 'Serif', fontWeight: 700, fontSize: t.size, lineHeight: 1.08, color: C.ink }}>{d.title}</div>

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
  const res = new ImageResponse(el, { width: W, height: H, fonts: fontList })
  return res.arrayBuffer()
}
