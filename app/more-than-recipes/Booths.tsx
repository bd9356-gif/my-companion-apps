'use client'

// The six showroom booth covers: 2 across on phones, 3 across from 700px up.
// A booth with an href is a link; one without is shown but not clickable yet.

import Link from 'next/link'
import { trackEvent } from '@/lib/community'
import { BOOTHS } from './config'

export default function Booths() {
  return (
    <>
      <style>{`
        .mtr-booths { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (min-width: 700px) { .mtr-booths { grid-template-columns: repeat(3, 1fr); gap: 16px; } }
      `}</style>
      <div className="mtr-booths">
        {BOOTHS.map((b, n) => {
          const img = (
            <picture>
              <source type="image/webp" srcSet={`/more-than-recipes/${b.img}.webp`} />
              <img
                src={`/more-than-recipes/${b.img}.png`}
                alt={b.alt}
                width={600}
                height={400}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 3px 8px rgba(44,24,16,0.14))' }}
              />
            </picture>
          )
          return b.href ? (
            <Link
              key={b.id}
              href={b.href}
              aria-label={b.alt}
              onClick={() => trackEvent('more_than_recipes_booth_click', { booth: b.id, position: String(n + 1), transport_type: 'beacon' })}
              style={{ display: 'block', lineHeight: 0, borderRadius: 14 }}
            >
              {img}
            </Link>
          ) : (
            <div key={b.id} style={{ lineHeight: 0 }}>{img}</div>
          )
        })}
      </div>
    </>
  )
}
