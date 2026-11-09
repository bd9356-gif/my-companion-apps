'use client'

// Chef Jen's welcome slideshow — the six scenes from the former auto-playing reel
// (web-recipe.mp4), same images and order, shown as stills the visitor moves through
// by hand (swipe, arrows, dots) or with Play ▶, which steps through them with the
// reel's own timing until Pause ⏸. Opens on the first scene and waits for the visitor.
// Same rounded card look as the reel; scenes cross-fade like the reel did.

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '@/lib/community'

const SLIDES = [
  { src: '/meet-chef-jen/slide-1.jpg', alt: 'What should I make tonight? Something quick, leftover pasta, chicken, tacos, shrimp scampi — or something new?' },
  { src: '/meet-chef-jen/slide-2.jpg', alt: 'Chef Jen: Hi, I’m Chef Jen. Let’s make something together!' },
  { src: '/meet-chef-jen/slide-3.jpg', alt: 'I had General Tso’s Jumbo Shrimp at a restaurant. Can you help me make it at home?' },
  { src: '/meet-chef-jen/slide-4.jpg', alt: 'Chef Jen: Absolutely! I’ll show you how to make this at home with simple ingredients.' },
  { src: '/meet-chef-jen/slide-5.jpg', alt: 'Just like the restaurant… now you can make it at home!' },
  { src: '/meet-chef-jen/slide-6.jpg', alt: 'Explore Chef Jen’s Recipe Collection' },
]

// Seconds each scene showed in the original reel (web-recipe.mp4).
const SECONDS = [3.8, 2.7, 3.3, 3.5, 2.5, 2.4]

const arrow: React.CSSProperties = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 34, height: 34, borderRadius: 999,
  border: 'none', backgroundColor: 'rgba(255,253,249,0.8)', boxShadow: '0 2px 8px rgba(44,24,16,0.25)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
}

export default function Slideshow({ maxWidth }: { maxWidth: string }) {
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false) // big Play button on the picture until the first play
  const touch = useRef<number | null>(null)
  const go = (n: number, how: string) => {
    const next = Math.max(0, Math.min(SLIDES.length - 1, n))
    if (next === i) return
    setI(next)
    trackEvent('chef_jen_slide_view', { slide: String(next + 1), how })
  }

  // While playing, move to the next scene after this one's time; loops like the reel did.
  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => setI((n) => (n + 1) % SLIDES.length), SECONDS[i] * 1000)
    return () => clearTimeout(t)
  }, [playing, i])

  const togglePlay = () => {
    setStarted(true)
    setPlaying((p) => !p)
    trackEvent(playing ? 'chef_jen_slideshow_pause' : 'chef_jen_slideshow_play', { slide: String(i + 1) })
  }

  return (
    <div style={{ width: '100%', maxWidth, margin: '0 auto' }}>
      <div
        role="region"
        aria-roledescription="slideshow"
        aria-label="Chef Jen helps recreate a restaurant dish"
        onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touch.current === null) return
          const dx = e.changedTouches[0].clientX - touch.current
          touch.current = null
          if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1, 'swipe')
        }}
        style={{ position: 'relative', width: '100%', aspectRatio: '720 / 960', borderRadius: 16, overflow: 'hidden', backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)', touchAction: 'pan-y' }}
      >
        {SLIDES.map((s, n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={720}
            height={960}
            loading={n === 0 ? 'eager' : 'lazy'}
            aria-hidden={n !== i}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: n === i ? 1 : 0, transition: 'opacity 450ms ease' }}
          />
        ))}
        {i > 0 && (
          <button type="button" aria-label="Previous picture" onClick={() => go(i - 1, 'arrow')} style={{ ...arrow, left: 6 }}>
            <svg width="17" height="17" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" stroke="#C8401A" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}
        {i < SLIDES.length - 1 && (
          <button type="button" aria-label="Next picture" onClick={() => go(i + 1, 'arrow')} style={{ ...arrow, right: 6 }}>
            <svg width="17" height="17" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#C8401A" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        )}
        {/* Big green Play button on Chef Jen's picture: makes it obvious the story plays */}
        {!started && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play the slideshow"
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 72, height: 72, borderRadius: 999, border: '2px solid rgba(255,255,255,0.9)', backgroundColor: '#4CAF50', boxShadow: '0 4px 16px rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z" fill="#FFFFFF" /></svg>
          </button>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, marginTop: 8 }}>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? 'Pause the slideshow' : 'Play the slideshow'}
          style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 8, padding: '9px 18px', minHeight: 40, border: '2px solid #4CAF50', borderRadius: 999, backgroundColor: playing ? '#FFFFFF' : '#4CAF50', color: playing ? '#2E7D32' : '#FFFFFF', fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 16, fontWeight: 700, cursor: 'pointer', lineHeight: 1 }}
        >
          {playing ? (
            <svg width="15" height="15" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor" /></svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24"><path d="M7 4v16l13-8z" fill="currentColor" /></svg>
          )}
          {playing ? 'Pause' : 'Play'}
        </button>
        {SLIDES.map((s, n) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Picture ${n + 1} of ${SLIDES.length}`}
            aria-current={n === i}
            onClick={() => go(n, 'dot')}
            style={{ width: 22, height: 22, border: 'none', background: 'transparent', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <span style={{ width: n === i ? 18 : 8, height: 8, borderRadius: 999, backgroundColor: n === i ? '#C8401A' : '#E5D5C5', transition: 'width 200ms ease' }} />
          </button>
        ))}
      </div>
      {/* Preload the next picture so the next swipe is instant */}
      {i < SLIDES.length - 1 && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={SLIDES[i + 1].src} alt="" aria-hidden width={1} height={1} style={{ display: 'none' }} />
      )}
    </div>
  )
}
