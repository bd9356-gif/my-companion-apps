import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '../recipes/TrackedLink'
import DemoVideo from './DemoVideo'

// "Watch Chef Jen Create a Recipe!" — destination for "Show Me How →" on /meet-chef-jen.
// Not linked anywhere and not indexed until it's approved (then: remove `robots`
// below and set SHOW_ME_HOW_URL on the Meet Chef Jen page).

export const metadata: Metadata = {
  title: 'Watch Chef Jen Create a Recipe — MyRecipe Companion',
  description: 'Have a conversation. Watch the magic happen. See Chef Jen turn a simple request into a finished recipe.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Watch Chef Jen Create a Recipe!',
    description: 'Have a conversation. Watch the magic happen.',
    images: ['/videos/chef-jen-shrimp-scampi-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'
const VIDEO = { src: '/videos/chef-jen-shrimp-scampi.mp4', poster: '/videos/chef-jen-shrimp-scampi-poster.jpg', width: 886, height: 1920 }

const serif = 'Georgia, serif'
const sans = 'system-ui, -apple-system, sans-serif'

export default function ShowMeHowPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: serif }}>

      {/* Header — same quiet header as Meet Chef Jen */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyCompanionApps</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 56px', textAlign: 'center' }}>
        <div style={{ padding: '16px 0 12px' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 44px)', fontWeight: 700, color: '#2C1810', margin: '0 0 4px', lineHeight: 1.15 }}>
            Watch Chef Jen Create a&nbsp;Recipe!
          </h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 21px)', color: '#C8401A', margin: 0, fontStyle: 'italic' }}>
            Have a conversation. Watch the magic happen.
          </p>
        </div>

        {/* The player fits on an iPhone's first screen (incl. Facebook's browser — svh).
            Tapping play on an iPhone opens the full-screen player, which is the best way to
            watch a tall phone video; desktops play it in the page. */}
        <div style={{ width: `min(100%, 420px, calc((100svh - 172px) * ${(886 / 1920).toFixed(4)}))`, margin: '0 auto' }}>
          <DemoVideo {...VIDEO} />
        </div>

        {/* Closing message */}
        <div style={{ padding: '28px 0 0' }}>
          <h2 style={{ fontSize: 'clamp(22px, 5.5vw, 32px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.2 }}>
            Now Imagine What Chef Jen Could Create With&nbsp;You!
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', margin: 0, lineHeight: 1.5 }}>
            Your next great recipe could start with a simple conversation.
          </p>
        </div>

        {/* Next steps — Try It Free leads */}
        <div style={{ margin: '24px auto 0', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: '#2C1810', margin: '0 0 8px' }}>Ready to Create Your Own?</p>
            <TrackedLink
              href={APP_STORE_URL}
              external
              event="app_store_click"
              params={{ source_type: 'show_me_how', button_text: 'Try It Free' }}
              style={{ display: 'block', backgroundColor: '#C8401A', color: '#FFFFFF', padding: '15px 20px', borderRadius: 14, textDecoration: 'none', fontFamily: sans, fontSize: 17, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}
            >
              Try It Free →
            </TrackedLink>
          </div>
          <div>
            <p style={{ fontFamily: sans, fontSize: 14, color: '#78716C', margin: '0 0 8px' }}>Want to Know What Else MyRecipe Companion Can Do?</p>
            <TrackedLink
              href="/myrecipe"
              event="learn_more_click"
              params={{ source_type: 'show_me_how' }}
              style={{ display: 'block', color: '#C8401A', backgroundColor: '#FFFFFF', padding: '12px 20px', borderRadius: 12, textDecoration: 'none', fontFamily: sans, fontSize: 15, fontWeight: 700, border: '2px solid #C8401A' }}
            >
              Learn More →
            </TrackedLink>
          </div>
        </div>
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
