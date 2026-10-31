'use client'

// The Shrimp Scampi demonstration video. Never autoplays. On iPhones, play opens the
// full-screen player (no playsInline on purpose — a tall phone video reads best there).
// GA4: demo_video_play the first time it starts, demo_video_complete at the end.

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/community'

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
      onEnded={() => { if (!sent.current.end) { sent.current.end = true; trackEvent('demo_video_complete', { video: 'shrimp_scampi', transport_type: 'beacon' }) } }}
      style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${width} / ${height}`, borderRadius: 16, backgroundColor: '#F5F0EA', boxShadow: '0 4px 24px rgba(44,24,16,0.12)' }}
    />
  )
}
