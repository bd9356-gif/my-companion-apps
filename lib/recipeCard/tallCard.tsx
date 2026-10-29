// Tall recipe picture (1080x1350, 4:5) for Facebook photo posts and Pinterest.
// The food photo fills the card; the title sits on a soft cream fade at the top with
// "From Chef Jen's Kitchen" in orange handwriting. Nothing else — no ingredients,
// buttons or extra text. Generated automatically from each recipe's title and photo.

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { lineCount } from './layout'
import { serifWidth } from './fontMetrics'

const C = { cream: '#FBF4E6', ink: '#2C1810', orange: '#C8401A' }
/**
 * Soft cream fade over the top of the photo (solid cream behind the title, easing to
 * clear). Built from thin bands so it renders the same everywhere.
 */
function Fade({ width, solid, fade }: { width: number; solid: number; fade: number }) {
  const N = 40
  const bands = Array.from({ length: N }, (_, i) => {
    const p = i / (N - 1)
    const a = 0.94 * Math.pow(1 - p, 1.6)
    const top = Math.round(solid + (fade * i) / N)
    const next = Math.round(solid + (fade * (i + 1)) / N)
    return <div key={i} style={{ position: 'absolute', left: 0, top, width, height: next - top, backgroundColor: `rgba(251,244,230,${a.toFixed(3)})` }} />
  })
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width, height: solid + fade, display: 'flex' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width, height: solid, backgroundColor: 'rgba(251,244,230,0.94)' }} />
      {bands}
    </div>
  )
}

let fontCache: Promise<{ name: string; data: Buffer; weight: 700; style: 'normal' }[]> | null = null
function fonts() {
  if (!fontCache) {
    const dir = join(process.cwd(), 'assets/og-fonts')
    const f = (n: string) => readFile(join(dir, n))
    fontCache = Promise.all([f('SourceSerif4-Bold.ttf'), f('Caveat-Bold.ttf')]).then(([serif, hand]) => [
      { name: 'Serif', data: serif, weight: 700, style: 'normal' },
      { name: 'Hand', data: hand, weight: 700, style: 'normal' },
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

/** "From Chef Jen's Kitchen" in handwriting on a cream strip, with an orange swash under it. */
function Label({ size }: { size: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        display: 'flex', fontFamily: 'Hand', fontWeight: 700, fontSize: size, lineHeight: 1, color: C.orange,
        backgroundColor: 'rgba(251,244,230,0.92)', padding: `${size * 0.12}px ${size * 0.55}px ${size * 0.2}px`,
        borderRadius: size * 0.18, transform: 'rotate(-1.5deg)',
      }}>
        From Chef Jen’s Kitchen
      </div>
      <svg width={size * 6} height={size * 0.4} viewBox="0 0 300 20" style={{ marginTop: -size * 0.12 }}>
        <path d="M20 14 C 90 4, 210 4, 285 10" stroke={C.orange} strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export interface TallCardData { title: string; photo: string }

/** Renders the tall picture and returns PNG bytes. Throws if anything fails. */
export async function renderTallCard(d: TallCardData): Promise<ArrayBuffer> {
  const W = 1080, H = 1350
  const t = fitTitle(d.title, W - 110, 104, 64, 2)
  const fadeH = 230 + t.lines * t.size * 1.04
  const el = (
    <div style={{ width: W, height: H, display: 'flex', position: 'relative', backgroundColor: C.cream }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={d.photo} alt="" width={W} height={H} style={{ position: 'absolute', left: 0, top: 0, width: W, height: H, objectFit: 'cover' }} />
      <Fade width={W} solid={Math.round(fadeH - 40)} fade={240} />
      <div style={{ position: 'absolute', left: 0, top: 44, width: W, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 55px' }}>
        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', fontFamily: 'Serif', fontWeight: 700, fontSize: t.size, lineHeight: 1.04, color: C.ink }}>{d.title}</div>
        <div style={{ display: 'flex', marginTop: 14 }}><Label size={66} /></div>
      </div>
    </div>
  )
  return new ImageResponse(el, { width: W, height: H, fonts: await fonts() }).arrayBuffer()
}
