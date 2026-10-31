'use client'

// The Shrimp Scampi demonstration video. Never autoplays. On iPhones, play opens the
// full-screen player (no playsInline on purpose — a tall phone video reads best there).
// GA4: demo_video_play the first time it starts, demo_video_complete at the end.

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/community'

// When the video finishes, leave the full-screen player (iPhone or desktop) so the
// visitor lands back on the page with the closing message and buttons, and rewind
// so the cover image shows again.
type IOSVideo = HTMLVideoElement & { webkitDisplayingFullscreen?: boolean; webkitExitFullscreen?: () => void }
function backToPage(v: IOSVideo) {
  try {
    if (v.webkitDisplayingFullscreen && v.webkitExitFullscreen) v.webkitExitFullscreen()
    else if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
  } catch {}
  try { v.currentTime = 0; v.load() } catch {}
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
      style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)' }}
    />
  )
}
