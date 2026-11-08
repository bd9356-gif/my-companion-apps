import type { ReactNode } from 'react'
import Link from 'next/link'
import TrackedLink from '../recipes/TrackedLink'
import TryItFreeButton, { APP_STORE_URL } from '../components/TryItFreeButton'
import DemoVideo from './DemoVideo'

// Shared layout for the Chef Jen demonstration pages:
//   /show-me-how   — Watch Chef Jen Create a Recipe!
//   /cooking-tips  — Cooking Questions? Let's Talk!
// Headline + orange subheading, a compact video player, a closing message, and two
// next steps (Try It Free → App Store, Learn More → /myrecipe).

export { APP_STORE_URL }

const serif = 'Georgia, serif'
const sans = 'system-ui, -apple-system, sans-serif'

export type DemoPageProps = {
  /** Quiet header link back (e.g. to the MyRecipe homepage). */
  back: { href: string; label: string }
  title: ReactNode
  subtitle: ReactNode
  /** `inline`: plays in the page (no full screen); compact player, about 230px wide. */
  video: { src: string; poster: string; width: number; height: number; name: string; inline?: boolean }
  closingTitle: ReactNode
  closingText: ReactNode
  tryLabel: string
  learnLabel: string
  /** GA source_type for the two buttons. */
  source: string
}

export default function DemoPage({ back, title, subtitle, video, closingTitle, closingText, tryLabel, learnLabel, source }: DemoPageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: serif }}>

      {/* Header — same quiet header as Meet Chef Jen */}
      <div style={{ borderBottom: '1px solid #F0EBE3', padding: '9px 20px' }}>
        <Link href={back.href} style={{ textDecoration: 'none', fontFamily: sans, fontSize: 14, fontWeight: 600, color: '#A89990' }}>{back.label}</Link>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px calc(96px + env(safe-area-inset-bottom))', textAlign: 'center' }}>
        <div style={{ padding: '12px 0 10px' }}>
          <h1 style={{ fontSize: 'clamp(26px, 6.5vw, 44px)', fontWeight: 700, color: '#2C1810', margin: '0 0 4px', lineHeight: 1.15 }}>
            {title}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 21px)', color: '#C8401A', margin: 0, fontStyle: 'italic' }}>
            {subtitle}
          </p>
        </div>

        {/* Player kept compact (under half the screen height) so the closing message and
            Try It Free show close behind it on an iPhone (incl. Facebook's browser — svh).
            Tapping play on an iPhone opens the full-screen player, which is the best way to
            watch a tall phone video; desktops play it in the page. */}
        <div style={{ width: video.inline
          ? `min(100%, 230px, calc(60svh * ${(video.width / video.height).toFixed(4)}))`
          : `min(100%, 180px, calc(34svh * ${(video.width / video.height).toFixed(4)}))`, margin: '0 auto' }}>
          <DemoVideo {...video} />
        </div>

        {/* Closing message */}
        <div style={{ padding: '14px 0 0' }}>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 30px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.2 }}>
            {closingTitle}
          </h2>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#5C4A3A', margin: 0, lineHeight: 1.4 }}>
            {closingText}
          </p>
        </div>

        {/* Next steps. Side by side on wider screens; on phones the two groups stack so
            each label sits clearly over its own button. Try It Free (filled) leads. */}
        <style>{`
          .demo-next { margin: 14px auto 0; max-width: 480px; display: flex; gap: 16px; align-items: stretch; }
          .demo-next > div { flex: 1; display: flex; flex-direction: column; }
          .demo-next p { flex: 1; display: flex; align-items: flex-end; justify-content: center; }
          @media (max-width: 480px) {
            .demo-next { flex-direction: column; gap: 14px; max-width: 340px; }
            .demo-next p { flex: none; }
          }
        `}</style>
        <div className="demo-next">
          <div>
            <p style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: '#2C1810', margin: '0 0 6px', lineHeight: 1.3 }}>{tryLabel}</p>
            <TryItFreeButton source={source} />
          </div>
          <div>
            <p style={{ fontFamily: sans, fontSize: 13, color: '#78716C', margin: '0 0 6px', lineHeight: 1.3 }}>{learnLabel}</p>
            <TrackedLink
              href="/myrecipe"
              event="learn_more_click"
              params={{ source_type: source }}
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
