'use client'

// The homepage opening (Nov 2026): one static picture — More Than Recipes. Experience the
// Future of Home Cooking. With Chef Jen. Your AI Cooking Companion. (02-main-opening.png,
// the taller remake, with larger lettering so it reads on an iPhone). The same picture on
// every screen: full width of the page, its own shape (never cropped or stretched). The
// artwork carries its own rounded orange border; the white outside it is made clear so it
// sits on the page like the cards. WebP in three sizes; the browser picks the one it needs.
// Desktop (1000px and up): a little narrower (840px, centered) so the picture and both rows
// of cards fit on a laptop's first screen; phones and iPad portrait use the full width.
//
// Tapping the picture (or its gold "Meet Chef Jen ▶" badge) opens the Meet Chef Jen video in
// the header's pop-up player, on this page. GA4: meet_chef_jen_click, cta_location opening_picture.

import { trackEvent } from '@/lib/community'

const W = 1838
const H = 856

export default function OpeningImage() {
  const open = () => {
    trackEvent('meet_chef_jen_click', { source_type: 'myrecipe_header', cta_location: 'opening_picture', transport_type: 'beacon' })
    window.dispatchEvent(new Event('meet-chef-jen:open'))
  }

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Meet Chef Jen — play the video"
      className="mr-opening"
      style={{ position: 'relative', display: 'block', width: '100%', padding: 0, margin: '0 0 12px', border: 'none', background: 'transparent', cursor: 'pointer', lineHeight: 0 }}
    >
      <style>{`@media (min-width: 1000px) { .mr-opening { max-width: 840px; margin-left: auto !important; margin-right: auto !important; } }`}</style>
      <picture>
        <source
          type="image/webp"
          srcSet="/myrecipe/opening2-800.webp 800w, /myrecipe/opening2-1200.webp 1200w, /myrecipe/opening2-1838.webp 1838w"
          sizes="(min-width: 1000px) 840px, calc(100vw - 32px)"
        />
        <img
          src="/myrecipe/opening2.png"
          alt="More Than Recipes. Experience the Future of Home Cooking. With Chef Jen — Your AI Cooking Companion."
          width={W}
          height={H}
          fetchPriority="high"
          style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: `${W} / ${H}`, filter: 'drop-shadow(0 3px 8px rgba(44,24,16,0.14))' }}
        />
      </picture>
      {/* Gold "Meet Chef Jen ▶" badge, lower right, so it reads as tap-to-play */}
      <span
        aria-hidden="true"
        style={{ position: 'absolute', right: '4.5%', bottom: '9%', display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 6px 5px 12px', borderRadius: 999, backgroundColor: 'rgba(176,122,18,0.92)', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', lineHeight: 1 }}
      >
        <span style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", fontWeight: 700, fontSize: 17, color: '#FFFFFF' }}>Meet Chef Jen</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 999, backgroundColor: '#FFFFFF' }}>
          <svg width="11" height="11" viewBox="0 0 10 10"><path d="M2.5 1.5v7l6-3.5z" fill="#B07A12" /></svg>
        </span>
      </span>
    </button>
  )
}
