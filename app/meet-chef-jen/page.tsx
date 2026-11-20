import type { Metadata } from 'next'
import Link from 'next/link'
import TrackedLink from '../recipes/TrackedLink'
import DemoVideo from '../show-me-how/DemoVideo'

// Meet Chef Jen (Nov 2026): the Chef Jen AI logo, a short welcome, the Meet Chef Jen video
// (full screen on phones), then the visitor's two choices and Explore More Than Recipes.
// Simple. Helpful. Human. — an introduction, not a feature tour.

const TITLE = 'Meet Chef Jen — Your AI Cooking Companion | MyRecipe Companion'
const DESCRIPTION = 'Meet Chef Jen, your personal AI cooking companion. Ask questions, share cooking ideas, and discover how a simple conversation can help in your kitchen.'
const OG_IMAGE = { url: '/meet-chef-jen-og.jpg', width: 1200, height: 630, alt: 'Meet Chef Jen — Your AI Cooking Companion' }

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: 'Meet Chef Jen — Your AI Cooking Companion',
    description: DESCRIPTION,
    images: [OG_IMAGE],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
  twitter: { card: 'summary_large_image', title: 'Meet Chef Jen — Your AI Cooking Companion', description: DESCRIPTION, images: [OG_IMAGE.url] },
}

// 002-meet-chef.mp4 (unchanged; the opening image is the "Hi, I'm Chef Jen!" frame).
// GA4: demo_page_view, demo_video_play and demo_video_complete with video = meet_chef_jen.
const VIDEO = { src: '/videos/meet-chef-jen.mp4', poster: '/videos/meet-chef-jen-poster.jpg', width: 720, height: 1278, name: 'meet_chef_jen' }

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

        {/* Welcome: logo, heading and one short line — the video tells the story */}
        <div style={{ textAlign: 'center', padding: '10px 0 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/chef-jen-ai-logo.webp"
            alt="Chef Jen — Your AI Cooking Companion"
            width={600}
            height={371}
            style={{ display: 'block', width: 'min(200px, 38vw)', height: 'auto', margin: '0 auto 6px' }}
          />
          <h1 style={{ fontSize: 'clamp(28px, 7vw, 44px)', fontWeight: 700, color: '#2C1810', margin: 0, lineHeight: 1.15 }}>
            Meet Chef Jen
          </h1>
          <p style={{ fontFamily: sans, fontSize: 'clamp(16px, 4.2vw, 19px)', color: '#5C4A3A', maxWidth: 460, margin: '6px auto 0', lineHeight: 1.45 }}>
            Your personal cooking companion. Someone you can talk to about anything&nbsp;cooking.
          </p>
        </div>

        {/* The video, then the two choices. Tapping Play on a phone or small tablet opens the
            full-screen player (same as the other Chef Jen videos), and it returns to the page when
            the video ends; desktops play it in the page. Never plays automatically. */}
        <section style={{ padding: '16px 0 0', textAlign: 'center' }}>
          {/* Large but sized to the screen height; never cropped (the box is the video's own shape). */}
          <div style={{ width: `min(100%, 320px, max(230px, calc((100svh - 300px) * ${(VIDEO.width / VIDEO.height).toFixed(4)})))`, margin: '0 auto' }}>
            <DemoVideo {...VIDEO} />
          </div>
          {/* The two next-step choices, set apart from the video */}
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
