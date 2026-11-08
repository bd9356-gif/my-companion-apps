'use client'

// The homepage Playbill: a short three-slide video (Welcome / My Kitchen / Cooking School)
// that plays silently on its own, loops, and stays in the page (no controls, no full screen).
// Same place and size as the Chef Jen slideshow it replaces (full width on phones, 80% from 600px).
// Reduced motion: it doesn't play; the first slide shows as a still picture.
// When a phone blocks silent autoplay (e.g. iPhone Low Power Mode), Safari would draw
// its own big play symbol on top; that is hidden, the first slide shows as a still,
// and a tap on the picture starts it.

import { useEffect, useRef, useState } from 'react'

export const PLAYBILL = { src: '/videos/playbill.mp4', poster: '/videos/playbill-poster.jpg', width: 1080, height: 720 }

export default function PlaybillVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (reduce.matches) { v.pause(); v.currentTime = 0 }
      else v.play().then(() => setBlocked(false)).catch(() => setBlocked(true))
    }
    apply()
    reduce.addEventListener('change', apply)
    return () => reduce.removeEventListener('change', apply)
  }, [])

  return (
    <div className="mtr-show" style={{ marginBottom: 10 }}>
      <style>{`
        .mtr-show { margin: 0 auto; }
        @media (min-width: 600px) { .mtr-show { max-width: 80%; } }
        .mtr-playbill::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
        .mtr-playbill::-webkit-media-controls { display: none !important; }
      `}</style>
      <video
        ref={ref}
        className="mtr-playbill"
        onClick={blocked ? () => { ref.current?.play().then(() => setBlocked(false)).catch(() => {}) } : undefined}
        src={PLAYBILL.src}
        poster={PLAYBILL.poster}
        width={PLAYBILL.width}
        height={PLAYBILL.height}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        disablePictureInPicture
        aria-label="Welcome to MyRecipe Companion — More Than Recipes. My Kitchen: your everyday cooking life, with your personal chef. Cooking School: learn, practice, master, with your teacher Chef Jen."
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${PLAYBILL.width} / ${PLAYBILL.height}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 20px rgba(44,24,16,0.12)', pointerEvents: blocked ? 'auto' : 'none', cursor: blocked ? 'pointer' : 'default' }}
      />
    </div>
  )
}
