'use client'

// A short, silent, looping story video (same behaviour as the Chef Jen story strip on
// /recipes): fetched only when near the viewport, plays muted while visible, pauses
// off-screen, shows the poster until it can play. With reduced motion it never
// autoplays — the poster shows, with player controls so the visitor can choose to play.

import { useEffect, useRef } from 'react'

type Props = {
  src: string
  poster: string
  label: string
  width: number
  height: number
  maxWidth?: number
}

export default function StoryVideo({ src, poster, label, width, height, maxWidth = 520 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    const el = wrapRef.current
    if (!v || !el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasIO = 'IntersectionObserver' in window
    let playIO: IntersectionObserver | null = null

    // Give the video its src once near the viewport (Safari ignores a late <source>
    // with preload="none"), then play only while visible.
    const start = () => {
      v.muted = true
      v.defaultMuted = true
      v.src = src
      v.load()
      if (reduceMotion) { v.controls = true; return }
      const tryPlay = () => { v.play().catch(() => {}) }
      if (!hasIO) { tryPlay(); return }
      playIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) tryPlay(); else v.pause() })
      }, { threshold: 0.25 })
      playIO.observe(el)
    }

    if (!hasIO) { start(); return }
    // Start fetching only when the video is near the viewport.
    const nearIO = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { nearIO.disconnect(); start() }
    }, { rootMargin: '600px 0px' })
    nearIO.observe(el)
    return () => { nearIO.disconnect(); playIO?.disconnect() }
  }, [src])

  return (
    <div ref={wrapRef} style={{ width: '100%', maxWidth, margin: '0 auto' }}>
      {/* aspect-ratio reserves the space up front, so nothing shifts when the video loads */}
      <video
        ref={videoRef}
        aria-label={label}
        poster={poster}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="none"
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)' }}
      />
    </div>
  )
}
