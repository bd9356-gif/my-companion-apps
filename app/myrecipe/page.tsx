'use client'

import { useState } from 'react'
import type React from 'react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'
const DEMO_URL = 'https://pin.it/wfzginTwe'

function trackAppStore(buttonText: string) {
  try {
    const w = window as any
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'app_store_click', {
        send_to: 'G-YWGNHS7MP7',
        button_text: buttonText,
        page_path: window.location.pathname,
      })
    }
  } catch(e) {}
}

function trackDemoRoom(buttonText: string) {
  try {
    const w = window as any
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'demo_room_click', {
        send_to: 'G-YWGNHS7MP7',
        button_text: buttonText,
        page_path: window.location.pathname,
        destination_url: DEMO_URL,
      })
    }
  } catch(e) {}
}

function trackWhatItDoes(buttonText: string) {
  try {
    const w = window as any
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'what_it_does_click', {
        send_to: 'G-YWGNHS7MP7',
        button_text: buttonText,
        page_path: window.location.pathname,
      })
    }
  } catch(e) {}
}


// Opening section: the two equal choices under the benefit sparks.
function trackChoice(eventName: string) {
  try {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    if (typeof gtag === 'function') {
      gtag('event', eventName, {
        send_to: 'G-YWGNHS7MP7',
        source_type: 'myrecipe_home',
        page_path: window.location.pathname,
      })
    }
  } catch {}
}

const SPARKS = [
  'Tired of hunting through Pinterest, Facebook, and websites for that one recipe?',
  'Ever wonder what you could make with what’s already in your kitchen or create your own signature recipe?',
  'Wish you had someone to bounce cooking ideas off?',
  'Want to adjust a dish to match your family’s tastes or health needs?',
  'Wish you could stretch one chicken into several meals?',
  'Still have Mom’s handwritten recipes? Wish you could preserve the recipes and memories behind them?',
]

const CHOICE_STYLE: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 4, backgroundColor: 'white', border: '1.5px solid #C8401A', borderRadius: 16, padding: '18px 20px', textDecoration: 'none', boxShadow: '0 4px 14px rgba(200,64,26,0.12)' }
const CHOICE_TITLE: React.CSSProperties = { fontFamily: 'Georgia, serif', fontSize: 21, fontWeight: 700, color: '#C8401A' }
const CHOICE_SUB: React.CSSProperties = { fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#5C4A3A' }

const SCREENSHOTS = [
  { file: '0001-hub-iphone.png', label: 'My Kitchen' },
  { file: '0002-vault-iphone.png', label: 'Recipe Vault' },
  { file: '0003-import-iphone.png', label: 'Bring In' },
  { file: '0004-box-iphone.png', label: 'Recipe Box' },
  { file: '0005-school-iphone.png', label: 'AI Cooking School' },
  { file: '0006-helpers-iphone.png', label: 'Chef Helpers' },
  { file: '0007-shopping-iphone.png', label: 'Shopping List' },
  { file: '0008-ideas-iphone.png', label: 'Meal Ideas' },
  { file: '0009-share-iphone.png', label: 'Social Share' },
]

const FEATURES = [
  { icon: '🗄️', title: 'Recipe Vault', desc: 'Your entire collection. Search, filter, tag, and sort every recipe you love — all in one place.' },
  { icon: '📖', title: 'Recipe Box', desc: 'Where recipes become memories. Save your family treasures forever.' },
  { icon: '⬇️', title: 'Bring In Recipes', desc: 'Import from any website by URL, share from Safari, or paste text.' },
  { icon: '🍽️', title: 'Meal Ideas', desc: "Stop wondering what's for dinner. AI suggestions based on what you have." },
  { icon: '🛒', title: 'Shopping List', desc: 'Never forget an ingredient. Build your list from any recipe in one tap.' },
  { icon: '📤', title: 'Social Share', desc: 'Share your recipes with friends and family. Your recipes. Their table.' },
  { icon: '✨', title: 'Chef Helpers', desc: 'Polish a recipe, resize servings, adjust ingredients, and generate a stunning AI photo for any dish. Your cookbook, beautifully illustrated.' },
  { icon: '🎓', title: 'AI Cooking School', desc: 'Learn. Practice. Master. Chef Jennifer teaches you at your own pace.' },
]

export default function MyRecipePage() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)
  const next = () => setActive(i => (i + 1) % SCREENSHOTS.length)

  return (
    <div style={{ backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif', color: '#2C1810', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ backgroundColor: 'rgba(255,253,249,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E8E0D4', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/recipe-icon.png" alt="" style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 15, color: '#2C1810', whiteSpace: 'nowrap' }}>
            My<span style={{ color: '#C8401A' }}>Recipe</span> Companion
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="#features" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }} onClick={() => trackWhatItDoes('What It Does Nav')}>What It Does</a>
            <a href="https://pin.it/wfzginTwe" target="_blank" rel="noopener noreferrer" onClick={() => trackDemoRoom('Demo Room Nav')} style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>Demo Room</a>
            <a href="/recipes" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Chef Jen Recipes</a>
            <a href="/tips" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Chef Jen Tips</a>
            <a href="/meet-chef-jen" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Meet Chef Jen</a>
          </div>
          <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" onClick={() => trackAppStore('Try It Free Nav')} style={{ fontSize: 13, color: '#FFFDF9', backgroundColor: '#C8401A', padding: '8px 16px', borderRadius: 20, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Try It Free</a>
        </div>
      </nav>
      <style>{`@media (max-width: 768px) { .nav-links { display: none !important; } } @media (min-width: 769px) { .mobile-nav { display: none !important; } }`}</style>
      <div className="mobile-nav" style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #E8E0D4', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, overflowX: 'auto' }}>
        <a href="#features" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }} onClick={() => trackWhatItDoes('What It Does Nav')}>What It Does</a>
        <a href="https://pin.it/wfzginTwe" target="_blank" rel="noopener noreferrer" onClick={() => trackDemoRoom('Demo Room Nav')} style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>Demo Room</a>
        <a href="/recipes" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Chef Jen Recipes</a>
            <a href="/tips" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Chef Jen Tips</a>
        <a href="/meet-chef-jen" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Meet Chef Jen</a>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ fontSize: 13, color: '#C8401A', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>Try It Free</a>
      </div>

      {/* Phones only: tighter opening so the six sparks read as quick, consecutive lines */}
      <style>{`
        @media (max-width: 640px) {
          .mr-hero { padding: 32px 20px 48px !important; gap: 40px !important; }
          .mr-h1 { font-size: min(31px, calc((100vw - 40px) / 10.2)) !important; display: inline-block; white-space: nowrap; }
          .mr-h1-first { margin-right: 0.25em; }
          .mr-h1-last { margin-bottom: 8px !important; }
          .mr-tagline { margin-bottom: 18px !important; }
          .mr-sparks { gap: 6px !important; margin-bottom: 22px !important; }
          .mr-spark { padding: 8px 12px !important; gap: 8px !important; }
          .mr-spark-text { font-size: 14px !important; line-height: 1.4 !important; }
        }
      `}</style>
      {/* HERO */}
      <section className="mr-hero" style={{ background: 'linear-gradient(135deg, #F2E8D9 0%, #F8F0E6 40%, #FDF6EE 100%)', padding: '72px 32px 64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 64, flexWrap: 'wrap', minHeight: '80vh' }}>
        {/* Left copy */}
        <div style={{ maxWidth: 640, flex: '1 1 320px' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.06, color: '#2C1810', marginBottom: 6 }} className="mr-h1 mr-h1-first">MyRecipe</h1>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.06, color: '#2C1810', marginBottom: 16 }} className="mr-h1 mr-h1-last">Companion</h1>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', color: '#C8401A', marginBottom: 28, lineHeight: 1.3 }} className="mr-tagline">More Than Recipes.</p>

          {/* Benefit sparks — two columns on wide screens, one on phones */}
          <ul className="mr-sparks" style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 10 }}>
            {SPARKS.map((q) => (
              <li key={q} className="mr-spark" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, backgroundColor: 'rgba(255,253,249,0.75)', border: '1px solid #F0E0CC', borderLeft: '3px solid #C8401A', borderRadius: 12, padding: '12px 14px' }}>
                <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>💡</span>
                <span className="mr-spark-text" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, lineHeight: 1.45, color: '#3C2415' }}>{q}</span>
              </li>
            ))}
          </ul>

          {/* Two equal choices */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            <a href="/meet-chef-jen" onClick={() => trackChoice('meet_chef_jen_click')} style={CHOICE_STYLE}>
              <span style={CHOICE_TITLE}>Meet Chef Jen →</span>
              <span style={CHOICE_SUB}>Discover who can help you.</span>
            </a>
            {/* Temporary: points at "What It Does" until the My Kitchen page is built */}
            <a href="#features" onClick={() => trackChoice('explore_kitchen_click')} style={CHOICE_STYLE}>
              <span style={CHOICE_TITLE}>Explore My Kitchen →</span>
              <span style={CHOICE_SUB}>Discover what’s possible.</span>
            </a>
          </div>
        </div>

        {/* Right — hero phone */}
        <div style={{ flex: '0 0 auto' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/0001-hub-iphone.png" alt="MyRecipe App" style={{ width: 'clamp(260px, 28vw, 340px)', borderRadius: 32, boxShadow: '0 48px 100px rgba(44,24,16,0.20)', display: 'block' }} />
        </div>
      </section>

      {/* INTERACTIVE GALLERY */}
      <section id="gallery" style={{ backgroundColor: '#2C1810', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>See Every Feature</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, textAlign: 'center', marginBottom: 48, color: '#FFFDF9' }}>Take a Look Inside</h2>

          {/* Main display */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 32 }}>
            {/* Prev */}
            <button onClick={prev} style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,253,249,0.12)', border: 'none', color: '#FFFDF9', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>‹</button>

            {/* Phone */}
            <div style={{ textAlign: 'center' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/${SCREENSHOTS[active].file}`}
                alt={SCREENSHOTS[active].label}
                style={{ width: 'clamp(200px, 22vw, 280px)', borderRadius: 28, boxShadow: '0 32px 80px rgba(0,0,0,0.4)', display: 'block', margin: '0 auto' }}
              />
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#D4A574', marginTop: 16, fontWeight: 600, letterSpacing: '0.05em' }}>
                {SCREENSHOTS[active].label}
              </p>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#5C4A3A', marginTop: 4 }}>
                {active + 1} of {SCREENSHOTS.length}
              </p>
            </div>

            {/* Next */}
            <button onClick={next} style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,253,249,0.12)', border: 'none', color: '#FFFDF9', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>›</button>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {SCREENSHOTS.map((s, i) => (
              <button
                key={s.file}
                onClick={() => setActive(i)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  opacity: i === active ? 1 : 0.5,
                  transform: i === active ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${s.file}`}
                  alt={s.label}
                  style={{
                    width: 72,
                    borderRadius: 12,
                    display: 'block',
                    outline: i === active ? '2px solid #C8401A' : '2px solid transparent',
                    outlineOffset: 2,
                  }}
                />
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 10, color: i === active ? '#D4A574' : '#5C4A3A', fontWeight: 600, whiteSpace: 'nowrap' }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT — Recipe Vault */}
      <section style={{ backgroundColor: '#FFFDF9', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/0002-vault-iphone.png" alt="Recipe Vault" style={{ width: 'clamp(220px, 22vw, 280px)', borderRadius: 28, boxShadow: '0 24px 64px rgba(44,24,16,0.14)', flexShrink: 0 }} />
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12 }}>Recipe Vault</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, color: '#2C1810' }}>Your Recipe Collection Engine.</h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.75, color: '#5C4A3A', marginBottom: 24 }}>Import recipes from any website, paste text, or share from Safari. Every recipe beautifully organised — searchable, sortable, always with you.</p>
            {['Import from any website by URL', 'Share from Safari in one tap', 'Search, filter & tag your collection', 'Unlimited recipes with Premium'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#2C1810', marginBottom: 10 }}>
                <span style={{ color: '#C8401A' }}>♡</span> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT — Recipe Box */}
      <section style={{ backgroundColor: '#F5EDE0', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12 }}>Recipe Box</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, color: '#2C1810' }}>Where Recipes Become Memories.</h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.75, color: '#5C4A3A', marginBottom: 24 }}>Save the recipes that matter most — Nannie's Easter Bread, Mom's Baked Clams, your own creations. Recipe Box is the family cookbook you'll treasure forever.</p>
            {["Save your most treasured recipes", 'Add photos and memories', 'Your family cookbook, built over time', 'Yours to keep, always'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#2C1810', marginBottom: 10 }}>
                <span style={{ color: '#C8401A' }}>♡</span> {f}
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/0004-box-iphone.png" alt="Recipe Box" style={{ width: 'clamp(220px, 22vw, 280px)', borderRadius: 28, boxShadow: '0 24px 64px rgba(44,24,16,0.14)', flexShrink: 0 }} />
        </div>
      </section>

      {/* FEATURE HIGHLIGHT — AI Cooking School */}
      <section id="school" style={{ background: 'linear-gradient(135deg, #2C1810 0%, #4A2518 100%)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/0005-school-iphone.png" alt="AI Cooking School" style={{ width: 'clamp(220px, 22vw, 280px)', borderRadius: 28, boxShadow: '0 24px 64px rgba(0,0,0,0.3)', flexShrink: 0 }} />
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#D4A574', textTransform: 'uppercase', marginBottom: 12 }}>AI Cooking School</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, color: '#FFFDF9' }}>Learn. Practice. Master.</h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.75, color: '#D4C4B0', marginBottom: 24 }}>Chef Jennifer is your personal AI cooking teacher and sous chef. Ask anything, learn techniques, practice skills — and let Chef Jen create original recipes just for you, tailored to your taste and what's in your kitchen.</p>
            {['Ask Chef Jen anything about cooking', 'Practice with guided AI coaching', 'Watch curated cooking videos', 'Save lessons to your Notebook'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#F5EDE0', marginBottom: 10 }}>
                <span style={{ color: '#D4A574' }}>♡</span> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" style={{ backgroundColor: '#FFFDF9', padding: '72px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Everything You Need</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, textAlign: 'center', marginBottom: 48, color: '#2C1810' }}>Your kitchen. Your rules.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ backgroundColor: '#F5EDE0', borderRadius: 16, padding: '24px', border: '1px solid #E8D8C4' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontWeight: 700, color: '#2C1810', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ backgroundColor: '#F5EDE0', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#2C1810', marginBottom: 20, lineHeight: 1.2 }}>
            Try MyRecipe Companion Free.
          </h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 17, color: '#5C4A3A', lineHeight: 1.75, marginBottom: 36 }}>
            Explore the Recipe Vault, save recipes, plan meals, build shopping lists, watch cooking videos, and meet Chef Jen.
          </p>
          <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" onClick={() => trackAppStore('Try It Free CTA')} style={{ display: 'inline-block', backgroundColor: '#C8401A', color: '#FFFDF9', padding: '16px 40px', borderRadius: 16, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 17, fontWeight: 700, boxShadow: '0 4px 20px rgba(200,64,26,0.3)', marginBottom: 16 }}>Try It Free</a>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', margin: 0 }}>
            No credit card required. Optional upgrades are available when you want more.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(160deg, #F5EDE0 0%, #FFFDF9 100%)', padding: '80px 32px', textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/recipe-icon.png" alt="" style={{ width: 68, height: 68, objectFit: 'contain', marginBottom: 20 }} />
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#2C1810', maxWidth: 500, margin: '0 auto 12px' }}>Your kitchen companion awaits.</h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontStyle: 'italic', color: '#78716C', marginBottom: 36 }}>Free to start. Yours to keep.</p>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '14px 28px', borderRadius: 14, textDecoration: 'none' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div style={{ textAlign: 'left' }}><div style={{ fontSize: 9, fontFamily: 'system-ui, sans-serif', opacity: 0.65, letterSpacing: '0.06em' }}>DOWNLOAD ON THE</div><div style={{ fontSize: 17, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div></div>
              </a>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#2C1810', padding: '32px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/recipe-icon.png" alt="" style={{ width: 26, height: 26, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#F5EDE0', fontWeight: 600 }}>MyCompanionApps</span>
          </a>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#5C4A3A', margin: 0 }}>© 2026 MyCompanionApps</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#5C4A3A', textDecoration: 'none' }}>Privacy</a>
            <a href="/terms" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#5C4A3A', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
