'use client'

// Chef Jen story strip — a ~10s silent looping movie dropped into the recipe grid.
// The movie is the whole message: no buttons, captions or overlays on top of it.

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '@/lib/community'

const SRC = '/videos/chef-jen-stop-hunting.mp4'
const POSTER = '/videos/chef-jen-stop-hunting-poster.jpg'
const DESCRIPTION = 'Chef Jen helps answer the everyday question of what to make for dinner using ingredients already in your kitchen.'

export default function ChefJenStoryStrip() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const viewed = useRef(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Start fetching the video only when the strip is near the viewport, so the
  // first recipes never wait on it.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setLoad(true); return }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setLoad(true); io.disconnect() }
    }, { rootMargin: '600px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // GA4: once per page view, when a meaningful part of the strip is on screen.
  useEffect(() => {
    const el = wrapRef.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      if (!viewed.current && entries.some((e) => e.isIntersecting && e.intersectionRatio >= 0.5)) {
        viewed.current = true
        trackEvent('chef_jen_story_view', { source_page: window.location.pathname, source_type: 'recipe_collection' })
        io.disconnect()
      }
    }, { threshold: [0.5] })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Once near the viewport, give the video its src and explicitly load() it
  // (Safari ignores a <source> added later when preload is "none"), then play
  // only while visible. If autoplay is blocked the poster simply stays.
  useEffect(() => {
    const v = videoRef.current
    const el = wrapRef.current
    if (!v || !el || !load || reduceMotion) return
    v.muted = true
    v.defaultMuted = true
    v.src = SRC
    v.load()
    const tryPlay = () => { v.play().catch(() => {}) }
    if (!('IntersectionObserver' in window)) { tryPlay(); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) tryPlay(); else v.pause() })
    }, { threshold: 0.25 })
    io.observe(el)
    v.addEventListener('canplay', () => { if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom > 0) tryPlay() }, { once: true })
    return () => io.disconnect()
  }, [load, reduceMotion])

  return (
    <div
      ref={wrapRef}
      style={{ gridColumn: '1 / -1', backgroundColor: '#2C1810', borderRadius: 20, padding: 'clamp(16px, 4vw, 32px)', display: 'flex', justifyContent: 'center' }}
    >
      <video
        ref={videoRef}
        aria-label={DESCRIPTION}
        poster={POSTER}
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        disablePictureInPicture
        style={{ width: '100%', maxWidth: 520, aspectRatio: '3 / 4', height: 'auto', display: 'block', borderRadius: 12, backgroundColor: '#2C1810' }}
      />
    </div>
  )
}
