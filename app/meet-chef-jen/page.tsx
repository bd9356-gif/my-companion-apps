import type { Metadata } from 'next'
import Link from 'next/link'
import Slideshow from './Slideshow'
import TrackedLink from '../recipes/TrackedLink'
import BackLink from './BackLink'

export const metadata: Metadata = {
  title: 'Meet Chef Jen — MyRecipe Companion',
  description: 'Meet Chef Jen, your personal AI cooking companion. Have a conversation. Make something wonderful.',
  openGraph: {
    title: 'Meet Chef Jen',
    description: 'Have a conversation. Make something wonderful.',
    images: ['/videos/web-recipe-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const serif = 'Georgia, serif'
const sans = 'system-ui, -apple-system, sans-serif'

// "Show Me How →" opens Chef Jen's recipe-creation demonstration (null hides the button).
const SHOW_ME_HOW_URL: string | null = '/show-me-how'

const choiceButton: React.CSSProperties = {
  flex: '1 1 150px', maxWidth: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: sans, fontSize: 15, fontWeight: 700,
  color: '#C8401A', backgroundColor: '#FFFFFF', textDecoration: 'none', border: '2px solid #C8401A', borderRadius: 12, padding: '12px 10px',
}

export default function MeetChefJenPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: serif }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href="/myrecipe" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyRecipe Companion</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 72px' }}>

        {/* Welcome — compact, so the reel and both choices fit on an iPhone's first screen */}
        <div style={{ textAlign: 'center', padding: '16px 0 0' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 42px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.15 }}>
            What Should I Make Tonight? Need&nbsp;a&nbsp;Recipe?
          </h1>
          {/* Supporting message: dark, easy-to-read text right above Chef Jen's picture */}
          <p style={{ fontFamily: sans, fontSize: 'clamp(15px, 3.8vw, 18px)', color: '#3F3A36', margin: '0 auto', maxWidth: 560, lineHeight: 1.45 }}>
            Have a conversation with Chef Jen. Tell her what you have, what you’re craving, or what you feel like cooking. She’ll help you create a recipe that’s right for you.
          </p>
        </div>

        {/* Chef Jen's slideshow (moved by hand), then the two choices */}
        <section style={{ padding: '10px 0 0', textAlign: 'center' }}>
          {/* Sized to the screen height so the slideshow and the choices fit on an iPhone's
              first screen — including Facebook's browser (svh = visible height with its bars). */}
          <Slideshow maxWidth="min(520px, max(190px, calc((100svh - 450px) * 0.75)))" />
          {/* The two next-step choices, set apart from the slideshow and its Play button */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 26 }}>
            {SHOW_ME_HOW_URL && (
              <TrackedLink href={SHOW_ME_HOW_URL} event="show_me_how_click" params={{ source_type: 'meet_chef_jen' }} style={choiceButton}>
                Show Me How →
              </TrackedLink>
            )}
            <TrackedLink href="/recipes" event="recipe_collection_click" params={{ source_type: 'meet_chef_jen' }} style={choiceButton}>
              Show Me More Recipes →
            </TrackedLink>
          </div>

          {/* Invitation to the full MyRecipe Companion homepage (Playbill + six cards) */}
          <TrackedLink
            href="/myrecipe"
            event="myrecipe_homepage_click"
            params={{ source_type: 'meet_chef_jen', cta_location: 'below_choices' }}
            style={{ display: 'inline-block', marginTop: 18, padding: '8px 10px', fontFamily: sans, fontSize: 16, fontWeight: 700, color: '#2C1810', textDecoration: 'underline', textUnderlineOffset: 4 }}
          >
            Explore More Than Recipes →
          </TrackedLink>

          {/* Back: quiet, set apart from the choices above */}
          <div style={{ marginTop: 22, paddingTop: 14, borderTop: '1px solid #F0EBE3', maxWidth: 260, marginLeft: 'auto', marginRight: 'auto' }}>
            <BackLink />
          </div>
        </section>

      </main>

      {/* Footer */}
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
