'use client'

import { useState } from 'react'

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
            <a href="#features" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>Features</a>
            <a href="#school" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>AI Cooking School</a>
            <a href="#pricing" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>Pricing</a>
          </div>
          <a href="#gallery" style={{ fontSize: 13, color: '#FFFDF9', backgroundColor: '#C8401A', padding: '8px 16px', borderRadius: 20, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>See the App</a>
        </div>
      </nav>
      <style>{`@media (max-width: 640px) { .nav-links { display: none !important; } }`}</style>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #F2E8D9 0%, #F8F0E6 40%, #FDF6EE 100%)', padding: '72px 32px 64px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 64, flexWrap: 'wrap', minHeight: '80vh' }}>
        {/* Left copy */}
        <div style={{ maxWidth: 460, flex: '1 1 300px' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 16 }}>Now on iPhone & iPad</p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.06, color: '#2C1810', marginBottom: 6 }}>MyRecipe</h1>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 5vw, 62px)', fontWeight: 700, lineHeight: 1.06, color: '#2C1810', marginBottom: 16 }}>Companion</h1>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', color: '#C8401A', marginBottom: 24, lineHeight: 1.3 }}>Your AI Kitchen,<br />All In One Place.</p>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.75, color: '#5C4A3A', marginBottom: 36, maxWidth: 400 }}>
            Save recipes. Learn to cook. Plan meals.<br />
            Shop smarter. Share your creations.<br />
            All powered by Chef Jen, your AI sous chef.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
            <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '12px 22px', borderRadius: 14, textDecoration: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 9, fontFamily: 'system-ui, sans-serif', opacity: 0.65, letterSpacing: '0.06em' }}>DOWNLOAD ON THE</div>
                <div style={{ fontSize: 16, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
              </div>
            </a>
            <a href="#pricing" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#C8401A', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #C8401A', paddingBottom: 2 }}>See pricing →</a>
          </div>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C' }}>✓ Free to start &nbsp;·&nbsp; ✓ No credit card needed &nbsp;·&nbsp; ✓ iPhone</p>
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
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, textAlign: 'center', marginBottom: 48, color: '#FFFDF9' }}>More Than Recipes.</h2>

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
      <section id="pricing" style={{ backgroundColor: '#FFFDF9', padding: '72px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Simple Pricing</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, textAlign: 'center', marginBottom: 8, color: '#2C1810' }}>Start free. Upgrade when you're ready.</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', textAlign: 'center', marginBottom: 52 }}>Cancel anytime · Billed annually · Managed via Apple ID</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, alignItems: 'center' }}>

            {/* FREE */}
            <div style={{ backgroundColor: '#F5EDE0', borderRadius: 20, padding: '32px 28px', border: '1px solid #E8D8C4' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 700, color: '#2C1810', marginBottom: 4 }}>Free</h3>
              <div style={{ marginBottom: 6 }}><span style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: '#2C1810' }}>$0</span><span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C' }}> / forever</span></div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', marginBottom: 28 }}>Always free — no credit card needed</p>
              {['Recipe Vault (10 recipes)', '3 imports/month', 'Meal Ideas', 'Shopping List', 'Chef TV videos', '3 Recipe Box cards', '3 Chef Jen sessions'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2C1810', marginBottom: 10 }}>
                  <span style={{ color: '#C8401A', fontWeight: 700 }}>✓</span> {f}
                </div>
              ))}
            </div>

            {/* PREMIUM */}
            <div style={{ backgroundColor: '#2C1810', borderRadius: 24, padding: '36px 28px', boxShadow: '0 24px 72px rgba(44,24,16,0.28)', transform: 'scale(1.04)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 700, color: '#FFFDF9', marginBottom: 4 }}>Premium</h3>
              <div style={{ marginBottom: 4 }}><span style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: '#FFFDF9' }}>$34.99</span><span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#D4A574' }}> / year</span></div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#D4A574', marginBottom: 28 }}>Just $2.92/mo</p>
              {['Unlimited imports', 'Unlimited Recipe Vault', 'Unlimited Recipe Box + Memories', 'Memory Photos', 'Chef Jen AI — 5/mo', 'Chef Jen Helpers + Photos — 5/mo', 'Learn & Practice', 'Print recipes', 'Social sharing'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#F5EDE0', marginBottom: 10 }}>
                  <span style={{ color: '#C8401A', fontWeight: 700 }}>✓</span> {f}
                </div>
              ))}
            </div>

            {/* PRO */}
            <div style={{ backgroundColor: '#F5EDE0', borderRadius: 20, padding: '32px 28px', border: '2px solid #C8401A', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C8401A', color: '#FFFDF9', fontSize: 11, fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', padding: '4px 16px', borderRadius: 20, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Best Value</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 700, color: '#2C1810', marginBottom: 4 }}>Pro</h3>
              <div style={{ marginBottom: 4 }}><span style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 700, color: '#2C1810' }}>$49.99</span><span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C' }}> / year</span></div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', marginBottom: 28 }}>Just $4.17/mo</p>
              {['Everything in Premium', 'Chef Jen AI — Unlimited', 'Chef Jen Helpers + Photos — Unlimited', 'Priority support'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2C1810', marginBottom: 10 }}>
                  <span style={{ color: '#C8401A', fontWeight: 700 }}>✓</span> {f}
                </div>
              ))}
            </div>
          </div>
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
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 9, fontFamily: 'system-ui, sans-serif', opacity: 0.65, letterSpacing: '0.06em' }}>DOWNLOAD ON THE</div>
            <div style={{ fontSize: 17, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
          </div>
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
