'use client'

// The Chef Jen demonstration video player. Never autoplays.
// Default: tapping play opens the full-screen player — also inside Facebook's in-app
// browser, which would otherwise play it small inside the page.
// `inline`: plays right in the page (no full screen), with the normal controls.
// GA4: demo_video_play the first time it starts, demo_video_complete at the end.

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '@/lib/community'

// When the video finishes, leave the full-screen player (iPhone or desktop) so the
// visitor lands back on the page with the closing message and buttons.
// iPhones can ignore an exit request made the instant the video ends, so it is
// asked again just after, and also triggered a moment before the very end.
type IOSVideo = HTMLVideoElement & { webkitDisplayingFullscreen?: boolean; webkitExitFullscreen?: () => void; webkitEnterFullscreen?: () => void }
function exitFullScreen(v: IOSVideo) {
  try {
    if (v.webkitExitFullscreen && v.webkitDisplayingFullscreen !== false) v.webkitExitFullscreen()
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
  } catch {}
}
function backToPage(v: IOSVideo) {
  exitFullScreen(v)
  setTimeout(() => exitFullScreen(v), 150)
  setTimeout(() => exitFullScreen(v), 600)
}

function enterFullScreen(v: IOSVideo) {
  try {
    if (v.webkitEnterFullscreen && !v.webkitDisplayingFullscreen) { v.webkitEnterFullscreen(); return }
    if (!document.fullscreenElement && v.requestFullscreen && window.matchMedia('(max-width: 820px)').matches) v.requestFullscreen().catch(() => {})
  } catch {}
}

export default function DemoVideo({ src, poster, width, height, name, inline = false }: { src: string; poster: string; width: number; height: number; name: string; inline?: boolean }) {
  const sent = useRef({ play: false, end: false })
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  useEffect(() => { trackEvent('demo_page_view', { page_path: window.location.pathname }) }, [])

  // Our own big play button: the tap itself opens full screen, which Facebook's browser allows.
  const start = () => {
    const v = ref.current as IOSVideo | null
    if (!v) return
    setStarted(true)
    v.play().catch(() => {})
    if (!inline) enterFullScreen(v)
  }

  return (
    <div style={{ position: 'relative' }}>
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      controls={started}
      playsInline={inline}
      preload="metadata"
      onPlay={(e) => {
        // Started from the player's own controls (e.g. after the first play): go full screen too.
        const v = e.currentTarget as IOSVideo
        if (!inline && v.webkitDisplayingFullscreen === false) enterFullScreen(v)
        if (!sent.current.play) { sent.current.play = true; trackEvent('demo_video_play', { video: name, transport_type: 'beacon' }) }
      }}
      onEnded={(e) => {
        if (!sent.current.end) { sent.current.end = true; trackEvent('demo_video_complete', { video: name, transport_type: 'beacon' }) }
        if (!inline) backToPage(e.currentTarget)
      }}
      onTimeUpdate={(e) => {
        if (inline) return
        const v = e.currentTarget
        if (v.duration && v.currentTime >= v.duration - 0.25 && !v.dataset.leaving) {
          v.dataset.leaving = '1'
          backToPage(v)
        }
      }}
      onSeeking={(e) => { if (e.currentTarget.currentTime < e.currentTarget.duration - 1) delete e.currentTarget.dataset.leaving }}
      // inline: the box is exactly the video's shape, so 'cover' never crops the video; it only
      // lets an opening image of a slightly different shape fill the box (edges trimmed).
      style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, objectFit: inline ? 'cover' : undefined, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)' }}
    />
    {!started && (
      <button
        type="button"
        onClick={start}
        aria-label={inline ? 'Play the video' : 'Play the video full screen'}
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', borderRadius: 16 }}
      >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 999, backgroundColor: 'rgba(22,163,74,0.95)', boxShadow: '0 4px 14px rgba(0,0,0,0.3)' }}>
          <svg width="26" height="26" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#FFFFFF" /></svg>
        </span>
      </button>
    )}
    </div>
  )
}
