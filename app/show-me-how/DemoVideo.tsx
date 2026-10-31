'use client'

// The Shrimp Scampi demonstration video. Never autoplays. On iPhones, play opens the
// full-screen player (no playsInline on purpose — a tall phone video reads best there).
// GA4: demo_video_play the first time it starts, demo_video_complete at the end.

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/community'

// When the video finishes, leave the full-screen player (iPhone or desktop) so the
// visitor lands back on the page with the closing message and buttons.
// iPhones can ignore an exit request made the instant the video ends, so it is
// asked again just after, and also triggered a moment before the very end.
type IOSVideo = HTMLVideoElement & { webkitDisplayingFullscreen?: boolean; webkitExitFullscreen?: () => void }
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

export default function DemoVideo({ src, poster, width, height }: { src: string; poster: string; width: number; height: number }) {
  const sent = useRef({ play: false, end: false })
  useEffect(() => { trackEvent('demo_page_view', { page_path: window.location.pathname }) }, [])
  return (
    <video
      src={src}
      poster={poster}
      width={width}
      height={height}
      controls
      preload="metadata"
      onPlay={() => { if (!sent.current.play) { sent.current.play = true; trackEvent('demo_video_play', { video: 'shrimp_scampi', transport_type: 'beacon' }) } }}
      onEnded={(e) => {
        if (!sent.current.end) { sent.current.end = true; trackEvent('demo_video_complete', { video: 'shrimp_scampi', transport_type: 'beacon' }) }
        backToPage(e.currentTarget)
      }}
      onTimeUpdate={(e) => {
        const v = e.currentTarget
        if (v.duration && v.currentTime >= v.duration - 0.25 && !v.dataset.leaving) {
          v.dataset.leaving = '1'
          backToPage(v)
        }
      }}
      onSeeking={(e) => { if (e.currentTarget.currentTime < e.currentTarget.duration - 1) delete e.currentTarget.dataset.leaving }}
      style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)' }}
    />
  )
}
