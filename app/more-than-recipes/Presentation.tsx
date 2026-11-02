'use client'

// The four-slide introduction. Plays by itself (SLIDE_SECONDS each) and stops on slide 4.
// Previous / Next / Replay, swiping and the dots all work; touching any of them stops the
// automatic advance (Replay starts it again from slide 1). With reduced motion it never
// advances on its own and slides switch without fading.
// Slide 4's "Explore More →" scrolls down to the booths.

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '@/lib/community'
import { SLIDES, SLIDE_SECONDS, EXPLORE_MORE_HOTSPOT } from './config'

const ctrl: React.CSSProperties = {
  width: 40, height: 40, borderRadius: 999, border: '1.5px solid #E5D5C5', backgroundColor: '#FFFFFF',
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, color: '#C8401A',
}

export default function Presentation() {
  const [i, setI] = useState(0)
  const [auto, setAuto] = useState(true)
  const [reduced, setReduced] = useState(false)
  const touch = useRef<number | null>(null)
  const seen = useRef(new Set<number>())

  useEffect(() => {
    const r = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once on mount (no window on the server)
    if (r) { setReduced(true); setAuto(false) }
    trackEvent('more_than_recipes_start', {})
  }, [])

  // Record each slide the first time it is shown (Replay records them again).
  useEffect(() => {
    if (seen.current.has(i)) return
    seen.current.add(i)
    trackEvent('more_than_recipes_slide_view', { slide: String(i + 1) })
  }, [i])

  // Automatic advance; stops on the last slide.
  useEffect(() => {
    if (!auto || i >= SLIDES.length - 1) return
    const t = setTimeout(() => setI((n) => Math.min(n + 1, SLIDES.length - 1)), SLIDE_SECONDS * 1000)
    return () => clearTimeout(t)
  }, [auto, i])

  const go = (n: number) => { setAuto(false); setI(Math.max(0, Math.min(SLIDES.length - 1, n))) }
  const replay = () => {
    seen.current.clear()
    setI(0)
    setAuto(!reduced)
    trackEvent('more_than_recipes_replay', {})
  }
  const exploreMore = () => {
    trackEvent('more_than_recipes_explore_more', {})
    document.getElementById('booths')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }

  const last = SLIDES.length - 1
  return (
    <div>
      <div
        role="region"
        aria-roledescription="presentation"
        aria-label="More Than Recipes — a short introduction"
        onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touch.current === null) return
          const dx = e.changedTouches[0].clientX - touch.current
          touch.current = null
          if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1)
        }}
        style={{ position: 'relative', width: '100%', aspectRatio: '3 / 2', borderRadius: 16, overflow: 'hidden', backgroundColor: '#F5F0EA', boxShadow: '0 4px 20px rgba(44,24,16,0.12)', touchAction: 'pan-y' }}
      >
        {SLIDES.map((s, n) => (
          <picture key={s.img}>
            <source type="image/webp" srcSet={`/more-than-recipes/${s.img}-768.webp 768w, /more-than-recipes/${s.img}.webp 1536w`} sizes="(max-width: 760px) 100vw, 720px" />
            <img
              src={`/more-than-recipes/${s.img}.jpg`}
              alt={s.alt}
              width={1536}
              height={1024}
              loading={n === 0 ? 'eager' : 'lazy'}
              aria-hidden={n !== i}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', opacity: n === i ? 1 : 0, transition: reduced ? 'none' : 'opacity 700ms ease' }}
            />
          </picture>
        ))}
        {i === last && (
          <button
            type="button"
            onClick={exploreMore}
            aria-label="Explore More — see the six things Chef Jen can help with"
            style={{ position: 'absolute', left: `${EXPLORE_MORE_HOTSPOT.left}%`, top: `${EXPLORE_MORE_HOTSPOT.top}%`, width: `${EXPLORE_MORE_HOTSPOT.width}%`, height: `${EXPLORE_MORE_HOTSPOT.height}%`, background: 'transparent', border: 'none', borderRadius: 999, cursor: 'pointer', padding: 0 }}
          />
        )}
      </div>

      {/* Quiet controls under the picture */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 10 }}>
        <button type="button" aria-label="Previous slide" onClick={() => go(i - 1)} disabled={i === 0} style={{ ...ctrl, opacity: i === 0 ? 0.35 : 1 }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ display: 'flex', gap: 2 }}>
          {SLIDES.map((s, n) => (
            <button key={s.img} type="button" aria-label={`Slide ${n + 1} of ${SLIDES.length}`} aria-current={n === i} onClick={() => go(n)}
              style={{ width: 22, height: 22, border: 'none', background: 'transparent', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ width: n === i ? 18 : 8, height: 8, borderRadius: 999, backgroundColor: n === i ? '#C8401A' : '#E5D5C5', transition: reduced ? 'none' : 'width 200ms ease' }} />
            </button>
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => go(i + 1)} disabled={i === last} style={{ ...ctrl, opacity: i === last ? 0.35 : 1 }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" aria-label="Replay from the beginning" onClick={replay} style={ctrl}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  )
}
