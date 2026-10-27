// Facebook recipe preview card (Design B, landscape 1200x630) — image rendering.
// Rendered with next/og (Satori: flexbox only, inline styles). Layout sizes come
// from layout.ts so the complete ingredient list always fits.

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import {
  CARD_W, CARD_H, TOP_BAR, PAD_TOP, PAD_LEFT, PAD_RIGHT, PAD_BOTTOM, LEFT_W, PHOTO_FRAME, GAP, RIGHT_W,
  TITLE_W, SUB_SIZE, CLOSE_SIZE, ING_LINE, ING_SPACING, BULLET, COL_GAP, type CardLayout,
} from './layout'

const C = { paper: '#FBF4E6', ink: '#2C1810', body: '#3C2415', muted: '#78716C', orange: '#C8401A', peach: '#F5D9C0', red: '#B91C1C', rule: 'rgba(185,28,28,0.06)' }

export interface CardData {
  title: string
  photo: string // absolute URL
  servings: number | null
  ingredients: string[] // display text, all of them
}

let fontCache: Promise<{ name: string; data: Buffer; weight: 500 | 600 | 700; style: 'normal' | 'italic' }[]> | null = null
function fonts() {
  if (!fontCache) {
    const dir = join(process.cwd(), 'assets/og-fonts')
    const load = (f: string) => readFile(join(dir, f))
    fontCache = Promise.all([
      load('Inter-Medium.ttf'), load('Inter-SemiBold.ttf'), load('SourceSerif4-Bold.ttf'),
      load('SourceSerif4-SemiBoldItalic.ttf'), load('Caveat-Bold.ttf'),
    ]).then(([interM, interSB, serifB, serifI, caveat]) => [
      { name: 'Inter', data: interM, weight: 500, style: 'normal' },
      { name: 'Inter', data: interSB, weight: 600, style: 'normal' },
      { name: 'Serif', data: serifB, weight: 700, style: 'normal' },
      { name: 'Serif', data: serifI, weight: 600, style: 'italic' },
      { name: 'Hand', data: caveat, weight: 700, style: 'normal' },
    ])
    fontCache.catch(() => { fontCache = null })
  }
  return fontCache
}

/** Renders the card and returns PNG bytes. Throws if anything fails. */
export async function renderRecipeCard(d: CardData, layout: CardLayout): Promise<ArrayBuffer> {
  const ing = layout.ingredients
  const s = ing.size
  const photoInner = PHOTO_FRAME - 24

  const el = (
    <div style={{
      width: CARD_W, height: CARD_H, display: 'flex', position: 'relative',
      backgroundColor: C.paper,
      backgroundImage: `repeating-linear-gradient(180deg, transparent 0px, transparent 33px, ${C.rule} 33px, ${C.rule} 34px)`,
      padding: `${TOP_BAR + PAD_TOP}px ${PAD_RIGHT}px ${PAD_BOTTOM}px ${PAD_LEFT}px`,
    }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: CARD_W, height: TOP_BAR, backgroundColor: C.red }} />

      {/* Photo column */}
      <div style={{ width: LEFT_W, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: PHOTO_FRAME, height: PHOTO_FRAME, display: 'flex', padding: 12, backgroundColor: '#FFFFFF',
          borderRadius: 6, boxShadow: '0 6px 20px rgba(44,24,16,0.18)', transform: 'rotate(-2deg)',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={d.photo} alt="" width={photoInner} height={photoInner}
            style={{ width: photoInner, height: photoInner, objectFit: 'cover', borderRadius: 3 }} />
        </div>
        <div style={{ display: 'flex', marginTop: 26, fontFamily: 'Hand', fontWeight: 700, fontSize: 36, color: C.orange }}>
          From Chef Jen’s kitchen
        </div>
        <div style={{ display: 'flex', marginTop: 6, fontFamily: 'Inter', fontWeight: 500, fontSize: 15, color: C.muted }}>
          {d.servings ? `MyRecipe Companion · Serves ${d.servings}` : 'MyRecipe Companion'}
        </div>
      </div>

      {/* Recipe column */}
      <div style={{ width: RIGHT_W, marginLeft: GAP, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', width: TITLE_W, fontFamily: 'Serif', fontWeight: 700, fontSize: layout.title.size, lineHeight: 1.1, color: C.ink }}>
          {d.title}
        </div>
        <div style={{ display: 'flex', marginTop: 10, marginBottom: 12, fontFamily: 'Inter', fontWeight: 600, fontSize: SUB_SIZE, letterSpacing: 2.2, color: C.orange }}>
          INGREDIENTS<span style={{ color: C.muted, marginLeft: 6 }}>{`· ${d.ingredients.length} ${d.ingredients.length === 1 ? 'ITEM' : 'ITEMS'}`}</span>
        </div>

        <div style={{ height: layout.ingredientBoxH, display: 'flex', fontFamily: 'Inter', fontWeight: 500, fontSize: s, lineHeight: ING_LINE, color: C.body }}>
          {ing.columns.map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', width: (RIGHT_W - COL_GAP * (ing.columns.length - 1)) / ing.columns.length, marginLeft: ci ? COL_GAP : 0 }}>
              {col.map((t, i) => (
                <div key={i} style={{ display: 'flex', marginTop: i ? ING_SPACING * s : 0 }}>
                  <div style={{ display: 'flex', width: BULLET * s, flexShrink: 0, color: C.orange, fontWeight: 600 }}>•</div>
                  <div style={{ display: 'flex', flex: 1 }}>{t}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto', fontFamily: 'Serif', fontStyle: 'italic', fontWeight: 600, fontSize: CLOSE_SIZE, color: C.orange }}>
          Ready to cook? Tap for the complete recipe.
        </div>
      </div>
    </div>
  )

  const res = new ImageResponse(el, { width: CARD_W, height: CARD_H, fonts: await fonts() })
  // Rendering happens while the body is read — read it here so any failure throws
  // now (and the caller can fall back to the photo) instead of sending a broken image.
  return res.arrayBuffer()
}
