import type { Metadata } from 'next'
import Link from 'next/link'
import Presentation from './Presentation'
import Booths from './Booths'
import { BOOTHS_BANNER } from './config'

// More Than Recipes — four-slide introduction, then the six showroom booths.
// Reached from the homepage's "Discover More Than Recipes" card. Settings: ./config.ts

export const metadata: Metadata = {
  title: 'More Than Recipes — MyRecipe Companion',
  description: 'Imagine having your own chef and cooking teacher right in your kitchen. See what Chef Jen can do.',
  openGraph: {
    title: 'More Than Recipes — MyRecipe Companion',
    description: 'Imagine having your own chef and cooking teacher right in your kitchen.',
    images: ['/more-than-recipes/slide-1.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const sans = 'system-ui, -apple-system, sans-serif'

export default function MoreThanRecipesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>
      {/* Same quiet header as Meet Chef Jen */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '6px 16px' }}>
        <Link href="/myrecipe" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyRecipe Companion</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '6px 16px 40px' }}>
        {/* More Than Recipes banner: introduces the whole presentation. Shown at its
            own size (never stretched), centered, smaller on narrow phones. */}
        <picture>
          <source type="image/webp" srcSet={`/more-than-recipes/${BOOTHS_BANNER.img}.webp`} />
          <img
            src={`/more-than-recipes/${BOOTHS_BANNER.img}.png`}
            alt={BOOTHS_BANNER.alt}
            width={BOOTHS_BANNER.width}
            height={BOOTHS_BANNER.height}
            style={{ display: 'block', width: '100%', maxWidth: BOOTHS_BANNER.width, height: 'auto', margin: '2px auto 8px' }}
          />
        </picture>

        <Presentation />

        {/* Booths — "Explore More →" on the last slide scrolls here */}
        <section id="booths" aria-label="Explore what Chef Jen can help with" style={{ paddingTop: 10, scrollMarginTop: 8 }}>
          <Booths />
        </section>
      </main>

      <div style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid #F0EBE3' }}>
        <p style={{ fontFamily: sans, fontSize: 12, color: '#A89990', margin: 0 }}>
          © 2026 MyCompanionApps &nbsp;·&nbsp;
          <Link href="/privacy" style={{ color: '#A89990', textDecoration: 'none' }}>Privacy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms" style={{ color: '#A89990', textDecoration: 'none' }}>Terms</Link>
        </p>
      </div>
    </div>
  )
}
