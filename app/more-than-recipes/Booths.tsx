'use client'

// The six showroom cards (the "playbill"): 1 across on phones so the words stay
// readable, 2 across from 600px up. A card with an href is a link; a card with a
// video opens it in a pop-up player; any other card shows but isn't clickable yet.

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/community'
import { BOOTHS, BOOTHS_BANNER, type BoothVideo } from './config'

const coverStyle: React.CSSProperties = {
  display: 'block', width: '100%', height: 'auto', objectFit: 'contain',
  filter: 'drop-shadow(0 3px 8px rgba(44,24,16,0.14))',
}

export default function Booths() {
  // The one video card's player stays mounted (hidden) so the tap itself can start
  // playback — iPhones only allow sound-on playback straight from a tap.
  const videoBooth = BOOTHS.find((b) => b.video)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        .mtr-booths { display: grid; grid-template-columns: 1fr; gap: 10px; }
        @media (min-width: 600px) { .mtr-booths { grid-template-columns: repeat(2, 1fr); gap: 14px; } }
      `}</style>

      {/* Banner: shown at its own size (never stretched), smaller on narrow phones */}
      <picture>
        <source type="image/webp" srcSet={`/more-than-recipes/${BOOTHS_BANNER.img}.webp`} />
        <img
          src={`/more-than-recipes/${BOOTHS_BANNER.img}.png`}
          alt={BOOTHS_BANNER.alt}
          width={BOOTHS_BANNER.width}
          height={BOOTHS_BANNER.height}
          style={{ display: 'block', width: '100%', maxWidth: BOOTHS_BANNER.width, height: 'auto', margin: '0 auto 10px' }}
        />
      </picture>

      <div className="mtr-booths">
        {BOOTHS.map((b, n) => {
          const img = (
            <picture>
              <source type="image/webp" srcSet={`/more-than-recipes/${b.img}.webp`} />
              <img src={`/more-than-recipes/${b.img}.png`} alt={b.alt} width={600} height={280} loading="lazy" style={coverStyle} />
            </picture>
          )
          const click = () => trackEvent('more_than_recipes_booth_click', { booth: b.id, position: String(n + 1), transport_type: 'beacon' })
          if (b.video) {
            return (
              <button
                key={b.id}
                type="button"
                aria-label={`${b.alt} Play the video.`}
                onClick={() => {
                  click()
                  setOpen(true)
                  videoRef.current?.play().catch(() => {}) // if refused, the player's controls are there
                }}
                style={{ display: 'block', width: '100%', lineHeight: 0, padding: 0, border: 'none', background: 'transparent', borderRadius: 14, cursor: 'pointer' }}
              >
                {img}
              </button>
            )
          }
          if (b.href) {
            return (
              <Link key={b.id} href={b.href} aria-label={b.alt} onClick={click} style={{ display: 'block', lineHeight: 0, borderRadius: 14 }}>
                {img}
              </Link>
            )
          }
          return <div key={b.id} style={{ lineHeight: 0 }}>{img}</div>
        })}
      </div>

      {videoBooth?.video && (
        <VideoPopup booth={videoBooth.id} video={videoBooth.video} videoRef={videoRef} open={open} onClose={() => setOpen(false)} />
      )}
    </>
  )
}

// Pop-up player: dark backdrop, the video at its own shape (never cropped), the
// usual controls, and a ✕. Closing (✕, backdrop, Esc) stops the video and returns
// to the page where the visitor was.
function VideoPopup({ booth, video, videoRef, open, onClose }: {
  booth: string; video: BoothVideo; videoRef: React.RefObject<HTMLVideoElement | null>; open: boolean; onClose: () => void
}) {
  const sent = useRef(false)

  const close = () => {
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
    onClose()
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Chef Jen video"
      aria-hidden={!open}
      onClick={close}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(20,12,8,0.82)', display: open ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', lineHeight: 0 }}>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          width={video.width}
          height={video.height}
          controls
          playsInline
          preload="none"
          onPlay={() => { if (!sent.current) { sent.current = true; trackEvent('more_than_recipes_video_play', { booth }) } }}
          onEnded={() => trackEvent('more_than_recipes_video_complete', { booth, transport_type: 'beacon' })}
          style={{
            display: 'block', width: 'auto', height: 'auto',
            maxWidth: 'calc(100vw - 32px)', maxHeight: 'calc(100svh - 96px)',
            aspectRatio: `${video.width} / ${video.height}`,
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
    </div>
  )
}
