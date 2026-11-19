// Tall recipe picture (1080x1350, 4:5) for Facebook photo posts and Pinterest — approved Nov 2026.
// Chef Jen AI logo fixed in the upper left (same size and place on every recipe, on a soft
// cream glow), the food photo in the center, and the recipe title in a cream panel at the
// bottom. Nothing else — no ingredients, buttons or extra text. Generated automatically from
// each recipe's title and photo.

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { lineCount } from './layout'
import { serifWidth } from './fontMetrics'
import { chefJenLogo, LOGO_RATIO } from './brand'

const C = { cream: '#FBF4E6', ink: '#2C1810', orange: '#C8401A' }

const W = 1080
const H = 1350
const PAD_X = 60
const PAD_Y = 40

// The logo never changes size or position, whatever the title or photo.
const LOGO_W = 480
const LOGO_H = Math.round(LOGO_W / LOGO_RATIO) // 297
const LOGO_X = 34
const LOGO_Y = 26
const GLOW = 'radial-gradient(ellipse 100% 100% at 0% 0%, rgba(251,244,230,0.96) 0%, rgba(251,244,230,0.9) 45%, rgba(251,244,230,0.55) 68%, rgba(251,244,230,0) 100%)'

let fontCache: Promise<{ name: string; data: Buffer; weight: 700; style: 'normal' }[]> | null = null
function fonts() {
  if (!fontCache) {
    const dir = join(process.cwd(), 'assets/og-fonts')
    fontCache = readFile(join(dir, 'SourceSerif4-Bold.ttf')).then((serif) => [
      { name: 'Serif', data: serif, weight: 700, style: 'normal' },
    ])
    fontCache.catch(() => { fontCache = null })
  }
  return fontCache
}

function fitTitle(title: string, width: number, from: number, to: number, maxLines: number) {
  for (let size = from; size >= to; size -= 2) {
    const lines = lineCount(title, (width * 0.95) / size, serifWidth)
    if (lines <= maxLines) return { size, lines }
  }
  return { size: to, lines: lineCount(title, (width * 0.95) / to, serifWidth) }
}

export interface TallCardData { title: string; photo: string }

/** Renders the tall picture and returns PNG bytes. Throws if anything fails. */
export async function renderTallCard(d: TallCardData): Promise<ArrayBuffer> {
  const [logo, fontList] = await Promise.all([chefJenLogo(), fonts()])
  const textW = W - PAD_X * 2
  // Largest size (86px down to 50px) that fits in 3 lines; if a very long title still needs
  // a 4th line, the panel grows to fit it — the title is never cut off.
  const t = fitTitle(d.title, textW, 86, 50, 3)
  const lines = t.lines
  const panelH = Math.round(lines * t.size * 1.08 + PAD_Y * 2 + 6)
  const photoH = H - panelH

  const el = (
    <div style={{ width: W, height: H, display: 'flex', flexDirection: 'column', backgroundColor: C.cream }}>
      {/* Food photo with the logo fixed in the upper left */}
      <div style={{ display: 'flex', position: 'relative', width: W, height: photoH }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.photo} alt="" width={W} height={photoH} style={{ position: 'absolute', left: 0, top: 0, width: W, height: photoH, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: 760, height: 470, backgroundImage: GLOW }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" width={LOGO_W} height={LOGO_H} style={{ position: 'absolute', left: LOGO_X, top: LOGO_Y, width: LOGO_W, height: LOGO_H }} />
      </div>

      {/* Recipe title in a cream panel */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', height: panelH,
        padding: `${PAD_Y}px ${PAD_X}px`, backgroundColor: C.cream, borderTop: `6px solid ${C.orange}`,
      }}>
        <div style={{ display: 'flex', width: textW, textAlign: 'center', justifyContent: 'center', fontFamily: 'Serif', fontWeight: 700, fontSize: t.size, lineHeight: 1.08, color: C.ink }}>{d.title}</div>
      </div>
    </div>
  )
  return new ImageResponse(el, { width: W, height: H, fonts: fontList }).arrayBuffer()
}
