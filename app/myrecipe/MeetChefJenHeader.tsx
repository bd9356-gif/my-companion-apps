'use client'

// "Meet Chef Jen ▶" in gold script under the MyRecipe Companion name in the /myrecipe header (Nov 2026).
// Opens the Meet Chef Jen video (002-meet-chef.mp4) in a pop-up player right on this page —
// it does not go to /meet-chef-jen. The video starts only when the visitor presses Play.
// Closing (✕, the dark backdrop or Esc) stops the video and leaves the visitor exactly where
// they were on the page.
// GA4 (existing conventions): meet_chef_jen_click (source_type myrecipe_header) for the tap,
// demo_video_play / demo_video_complete with video = meet_chef_jen_header — kept separate from
// the Meet Chef Jen page's video (meet_chef_jen) so the two can be compared.

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { trackEvent } from '@/lib/community'

const VIDEO = { src: '/videos/meet-chef-jen.mp4', poster: '/videos/meet-chef-jen-poster.jpg', width: 720, height: 1278, name: 'meet_chef_jen_header' }

export default function MeetChefJenHeader() {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sent = useRef({ play: false, end: false })

  const close = () => {
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    // Stop the page scrolling behind the player; the scroll position is kept as it was.
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      {/* Gold script (Dancing Script, served from /fonts — no outside font service). */}
      <style>{`@font-face { font-family: 'Dancing Script'; font-style: normal; font-weight: 700; font-display: swap; src: url('/fonts/dancing-script-700.woff2') format('woff2'); }`}</style>
      <button
        type="button"
        onClick={() => {
          trackEvent('meet_chef_jen_click', { source_type: 'myrecipe_header', cta_location: 'header', transport_type: 'beacon' })
          setOpen(true)
        }}
        style={{ display: 'block', padding: 0, margin: 0, border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontSize: 19, fontWeight: 700, lineHeight: 1.1, color: '#B07A12', whiteSpace: 'nowrap', textAlign: 'left' }}
      >
        Meet Chef Jen <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, verticalAlign: '2px' }}>▶</span>
      </button>

      {/* Drawn at the end of the page (a portal): inside the sticky header the pop-up would be
          trapped in the header's box, because of its blur effect. */}
      {open && createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Meet Chef Jen video"
        onClick={close}
        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(20,12,8,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
      >
        <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', lineHeight: 0 }}>
          <video
            ref={videoRef}
            src={VIDEO.src}
            poster={VIDEO.poster}
            width={VIDEO.width}
            height={VIDEO.height}
            controls
            playsInline
            preload="metadata"
            onPlay={() => { if (!sent.current.play) { sent.current.play = true; trackEvent('demo_video_play', { video: VIDEO.name, transport_type: 'beacon' }) } }}
            onEnded={() => { if (!sent.current.end) { sent.current.end = true; trackEvent('demo_video_complete', { video: VIDEO.name, transport_type: 'beacon' }) } }}
            // The video's own shape and black framing, never cropped.
            style={{
              display: 'block', width: 'auto', height: 'auto', objectFit: 'contain',
              maxWidth: 'calc(100vw - 32px)', maxHeight: 'calc(100svh - 96px)',
              aspectRatio: `${VIDEO.width} / ${VIDEO.height}`,
              borderRadius: 14, background: '#000', boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            }}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close the video"
            style={{ position: 'absolute', top: -14, right: -14, width: 40, height: 40, borderRadius: 999, border: 'none', background: '#FFFFFF', color: '#2C1810', fontSize: 20, fontWeight: 700, lineHeight: 1, cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
          >
            ✕
          </button>
        </div>
      </div>,
      document.body)}
    </>
  )
}
