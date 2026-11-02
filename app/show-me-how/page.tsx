import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '../recipes/TrackedLink'
import DemoVideo from './DemoVideo'

// "Watch Chef Jen Create a Recipe!" — destination for "Show Me How →" on /meet-chef-jen.
// Linked from "Show Me How →" on the Meet Chef Jen page.

export const metadata: Metadata = {
  title: 'Watch Chef Jen Create a Recipe — MyRecipe Companion',
  description: 'Have a conversation. Watch the magic happen. See Chef Jen turn a simple request into a finished recipe.',
  openGraph: {
    title: 'Watch Chef Jen Create a Recipe!',
    description: 'Have a conversation. Watch the magic happen.',
    images: ['/videos/chef-jen-creates-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'
const VIDEO = { src: '/videos/chef-jen-creates.mp4', poster: '/videos/chef-jen-creates-poster.jpg', width: 720, height: 1280, name: 'chef_jen_creates' }

const serif = 'Georgia, serif'
const sans = 'system-ui, -apple-system, sans-serif'

export default function ShowMeHowPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: serif }}>

      {/* Header — same quiet header as Meet Chef Jen */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>MyCompanionApps</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px calc(96px + env(safe-area-inset-bottom))', textAlign: 'center' }}>
        <div style={{ padding: '12px 0 10px' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 44px)', fontWeight: 700, color: '#2C1810', margin: '0 0 4px', lineHeight: 1.15 }}>
            Watch Chef Jen Create a&nbsp;Recipe!
          </h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 21px)', color: '#C8401A', margin: 0, fontStyle: 'italic' }}>
            One simple request. Watch Chef Jen bring it to life.
          </p>
        </div>

        {/* Player kept compact (under half the screen height) so the closing message and
            Try It Free show close behind it on an iPhone (incl. Facebook's browser — svh).
            Tapping play on an iPhone opens the full-screen player, which is the best way to
            watch a tall phone video; desktops play it in the page. */}
        <div style={{ width: `min(100%, 180px, calc(34svh * ${(VIDEO.width / VIDEO.height).toFixed(4)}))`, margin: '0 auto' }}>
          <DemoVideo {...VIDEO} />
        </div>

        {/* Closing message */}
        <div style={{ padding: '14px 0 0' }}>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 30px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.2 }}>
            Now Imagine What Chef Jen Could Create With&nbsp;You!
          </h2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C4A3A', margin: 0, lineHeight: 1.4 }}>
            Your next great recipe could start with one simple idea.
          </p>
        </div>

        {/* Next steps — side by side so both fit above Safari/Facebook's bottom bars.
            Try It Free (filled) leads; Learn More is outlined. */}
        <div style={{ margin: '14px auto 0', maxWidth: 480, display: 'flex', gap: 10, alignItems: 'stretch' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.3, flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>Ready to Create Your Own?</p>
            <TrackedLink
              href={APP_STORE_URL}
              external
              event="app_store_click"
              params={{ source_type: 'show_me_how', button_text: 'Try It Free' }}
              style={{ display: 'block', backgroundColor: '#C8401A', color: '#FFFFFF', padding: '13px 8px', borderRadius: 14, textDecoration: 'none', fontFamily: sans, fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)', border: '2px solid #C8401A' }}
            >
              Try It Free →
            </TrackedLink>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontFamily: sans, fontSize: 13, color: '#78716C', margin: '0 0 6px', lineHeight: 1.3, flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>Want to Know What Else MyRecipe Companion Can Do?</p>
            <TrackedLink
              href="/myrecipe"
              event="learn_more_click"
              params={{ source_type: 'show_me_how' }}
              style={{ display: 'block', color: '#C8401A', backgroundColor: '#FFFFFF', padding: '13px 8px', borderRadius: 14, textDecoration: 'none', fontFamily: sans, fontSize: 16, fontWeight: 700, border: '2px solid #C8401A' }}
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
