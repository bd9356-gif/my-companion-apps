import type { Metadata } from 'next'
import Link from 'next/link'
import StoryVideo from '../components/StoryVideo'

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

const linkButton: React.CSSProperties = {
  display: 'inline-block', marginTop: 20, fontFamily: sans, fontSize: 15, fontWeight: 700,
  color: '#C8401A', textDecoration: 'none', border: '2px solid #C8401A', borderRadius: 12, padding: '12px 22px',
}

function Story({ heading, src, poster, label, linkHref, linkText, first = false }: {
  heading: string; src: string; poster: string; label: string; linkHref: string; linkText: string; first?: boolean
}) {
  return (
    <section style={{ padding: first ? '14px 0 0' : '48px 0 0', textAlign: 'center' }}>
      <h2 style={{ fontFamily: serif, fontSize: first ? 'clamp(21px, 5vw, 30px)' : 'clamp(24px, 5vw, 32px)', fontWeight: 700, color: '#2C1810', margin: first ? '0 0 12px' : '0 0 24px', lineHeight: 1.25 }}>
        {heading}
      </h2>
      {/* The first reel is sized to the screen height so it and its button both fit on
          an iPhone's first screen — including inside Facebook's browser, whose toolbars
          take part of the screen (svh = the visible height with those bars showing). */}
      <StoryVideo src={src} poster={poster} label={label} width={720} height={960}
        maxWidth={first ? 'min(520px, max(200px, calc((100svh - 330px) * 0.75)))' : 520} />
      <Link href={linkHref} style={{ ...linkButton, marginTop: first ? 14 : 20 }}>{linkText} →</Link>
    </section>
  )
}

export default function MeetChefJenPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: serif }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyCompanionApps</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 72px' }}>

        {/* Welcome — compact, so Chef Jen's first reel and its button fit on an iPhone's first screen */}
        <div style={{ textAlign: 'center', padding: '18px 0 0' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 44px)', fontWeight: 700, color: '#2C1810', margin: '0 0 4px', lineHeight: 1.15 }}>
            Welcome to Chef Jen’s Kitchen!
          </h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 21px)', color: '#C8401A', margin: 0, fontStyle: 'italic' }}>
            Have a conversation. Make something wonderful.
          </p>
        </div>

        {/* Section A — Chef Jen's first reel */}
        <Story
          first
          heading="Had Something Delicious? Let’s Make It!"
          src="/videos/web-recipe.mp4"
          poster="/videos/web-recipe-poster.jpg"
          label="Chef Jen helps recreate General Tso’s Jumbo Shrimp after a restaurant dinner."
          linkHref="/recipes"
          linkText="Explore Chef Jen’s Recipe Collection"
        />

        {/* About Chef Jen — moved below the first reel */}
        <div style={{ textAlign: 'center', padding: '44px 0 0' }}>
          <p style={{ fontFamily: sans, fontSize: 17, color: '#5C4A3A', lineHeight: 1.7, margin: '0 auto 16px', maxWidth: 560 }}>
            Wondering what to make for dinner? Remember something delicious you had at a restaurant? Or just trying to figure out why your chicken always comes out dry?
          </p>
          <p style={{ fontFamily: sans, fontSize: 17, color: '#5C4A3A', lineHeight: 1.7, margin: '0 auto', maxWidth: 560 }}>
            Meet Chef Jen, your personal AI cooking companion. Ask a question, share an idea, or tell her what’s happening in your kitchen. She’s here to help.
          </p>
        </div>

        {/* Section B */}
        <Story
          heading="Why Does My Chicken Always Come Out Dry?"
          src="/videos/web-tips.mp4"
          poster="/videos/web-tips-poster.jpg"
          label="Chef Jen answers why chicken comes out dry and how to keep it juicy."
          linkHref="/tips"
          linkText="Explore Chef Jen’s Cooking Tips"
        />

        {/* Closing */}
        <section style={{ margin: '64px 0 0', textAlign: 'center', backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 20, padding: '36px 24px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 700, color: '#2C1810', margin: '0 0 14px', lineHeight: 1.3 }}>
            Your Kitchen. Your Questions. Chef Jen.
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', lineHeight: 1.7, margin: '0 auto 8px', maxWidth: 520 }}>
            Whether you’re planning dinner, recreating a favorite dish, or learning something new, Chef Jen is ready to help.
          </p>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', lineHeight: 1.7, margin: '0 0 18px' }}>
            Just start a conversation.
          </p>
          <Link href="/myrecipe" style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#C8401A', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Learn about MyRecipe Companion
          </Link>
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
