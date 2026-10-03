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

  // Play only while visible; if the browser blocks autoplay the poster simply stays.
  useEffect(() => {
    const v = videoRef.current
    const el = wrapRef.current
    if (!v || !el || !load || reduceMotion || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() })
    }, { threshold: 0.25 })
    io.observe(el)
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
        autoPlay={!reduceMotion}
        preload="none"
        controls={false}
        disablePictureInPicture
        style={{ width: '100%', maxWidth: 520, aspectRatio: '3 / 4', height: 'auto', display: 'block', borderRadius: 12, backgroundColor: '#2C1810' }}
      >
        {load && <source src={SRC} type="video/mp4" />}
      </video>
    </div>
  )
}
