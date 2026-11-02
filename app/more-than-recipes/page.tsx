import type { Metadata } from 'next'
import Link from 'next/link'
import Presentation from './Presentation'
import Booths from './Booths'

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
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href="/myrecipe" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyRecipe Companion</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '14px 16px 48px' }}>
        <Presentation />

        {/* Booths — "Explore More →" on the last slide scrolls here */}
        <section id="booths" aria-label="Explore what Chef Jen can help with" style={{ paddingTop: 22, scrollMarginTop: 12 }}>
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
