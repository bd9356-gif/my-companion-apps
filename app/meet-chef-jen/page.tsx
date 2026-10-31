import type { Metadata } from 'next'
import Link from 'next/link'
import StoryVideo from '../components/StoryVideo'
import TrackedLink from '../recipes/TrackedLink'

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
        <Link href="/" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyCompanionApps</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 72px' }}>

        {/* Welcome — compact, so the reel and both choices fit on an iPhone's first screen */}
        <div style={{ textAlign: 'center', padding: '16px 0 0' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 44px)', fontWeight: 700, color: '#2C1810', margin: 0, lineHeight: 1.15 }}>
            Welcome to Chef Jen’s&nbsp;Kitchen!
          </h1>
          <h2 style={{ fontSize: 'clamp(21px, 5vw, 30px)', fontWeight: 700, color: '#2C1810', margin: '8px 0 2px', lineHeight: 1.2 }}>
            What Should I Make Tonight?
          </h2>
          <p style={{ fontSize: 'clamp(16px, 4vw, 21px)', color: '#C8401A', margin: 0, fontStyle: 'italic' }}>
            Have a conversation. Let’s create the recipe!
          </p>
        </div>

        {/* Chef Jen's first reel, then the two choices */}
        <section style={{ padding: '12px 0 0', textAlign: 'center' }}>
          {/* Sized to the screen height so the reel and the choices fit on an iPhone's first
              screen — including Facebook's browser (svh = visible height with its bars). */}
          <StoryVideo
            src="/videos/web-recipe.mp4"
            poster="/videos/web-recipe-poster.jpg"
            label="Chef Jen helps recreate General Tso’s Jumbo Shrimp after a restaurant dinner."
            width={720}
            height={960}
            maxWidth="min(520px, max(200px, calc((100svh - 340px) * 0.75)))"
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 14 }}>
            {SHOW_ME_HOW_URL && (
              <TrackedLink href={SHOW_ME_HOW_URL} event="show_me_how_click" params={{ source_type: 'meet_chef_jen' }} style={choiceButton}>
                Show Me How →
              </TrackedLink>
            )}
            <TrackedLink href="/recipes" event="recipe_collection_click" params={{ source_type: 'meet_chef_jen' }} style={choiceButton}>
              Show Me More Recipes →
            </TrackedLink>
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
