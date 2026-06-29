import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MyRecipe Companion — More Than Recipes',
  description: 'Save recipes, learn to cook, and build your family cookbook. Available on iPhone.',
}

export default function MyRecipePage() {
  return (
    <div style={{ backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif', color: '#2C1810' }}>

      {/* NAV */}
      <nav style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #E8E0D4', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/recipe-icon.png" alt="MyRecipe Companion" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 17, color: '#2C1810', letterSpacing: '-0.3px' }}>
            My<span style={{ color: '#C8401A' }}>Recipe</span> Companion
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="#features" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>Features</a>
          <a href="#pricing" style={{ fontSize: 13, color: '#78716C', textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>Pricing</a>
          <a href="#download" style={{ fontSize: 13, color: '#FFFDF9', backgroundColor: '#C8401A', padding: '7px 16px', borderRadius: 20, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontWeight: 600 }}>Get the App</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #F5F0E8 0%, #FFFDF9 60%)', padding: '64px 24px 48px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 16 }}>Now Available on iPhone</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 700, lineHeight: 1.1, color: '#2C1810', maxWidth: 700, margin: '0 auto 16px' }}>
          More Than Recipes.
        </h1>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(18px, 3vw, 24px)', fontStyle: 'italic', color: '#78716C', maxWidth: 520, margin: '0 auto 32px' }}>
          Your personal kitchen companion — save recipes, learn to cook, and build a cookbook your family will treasure.
        </p>

        {/* App Store badge */}
        <a id="download" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '12px 24px', borderRadius: 14, textDecoration: 'none', marginBottom: 56 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, fontFamily: 'system-ui, sans-serif', opacity: 0.7, letterSpacing: '0.05em' }}>DOWNLOAD ON THE</div>
            <div style={{ fontSize: 18, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
          </div>
        </a>

        {/* Staggered screenshots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, maxWidth: 900, margin: '0 auto', flexWrap: 'wrap' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/kitchen-hub.png" alt="KitchenHub" style={{ width: 220, borderRadius: 28, boxShadow: '0 24px 60px rgba(44,24,16,0.18)', transform: 'rotate(-4deg) translateY(12px)' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/recipe-vault.png" alt="Recipe Vault" style={{ width: 240, borderRadius: 28, boxShadow: '0 32px 80px rgba(44,24,16,0.22)', transform: 'rotate(0deg) translateY(-8px)', zIndex: 2, position: 'relative' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/recipe-box.png" alt="Recipe Box" style={{ width: 220, borderRadius: 28, boxShadow: '0 24px 60px rgba(44,24,16,0.18)', transform: 'rotate(4deg) translateY(12px)' }} />
        </div>
      </section>

      {/* FEATURE — Chef Jen */}
      <section id="features" style={{ backgroundColor: '#F5F0E8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/school.png" alt="AI Cooking School" style={{ width: 260, borderRadius: 28, boxShadow: '0 20px 60px rgba(44,24,16,0.15)', flexShrink: 0 }} />
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12 }}>AI Cooking School</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, color: '#2C1810' }}>
              Learn. Practice. Master.
            </h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.7, color: '#5C4A3A', marginBottom: 24 }}>
              Chef Jennifer is your personal AI cooking teacher. Ask anything — she'll teach you techniques, suggest recipes, and help you practice skills at your own pace.
            </p>
            {['Ask Chef Jen anything about cooking', 'Learn techniques step by step', 'Practice with guided AI coaching', 'Watch curated cooking videos'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#2C1810', marginBottom: 10 }}>
                <span style={{ color: '#C8401A', fontSize: 18 }}>♡</span> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE — Bring In */}
      <section style={{ backgroundColor: '#FFFDF9', padding: '72px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap-reverse', justifyContent: 'center' }}>
          <div style={{ maxWidth: 440 }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12 }}>Recipe Import</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16, color: '#2C1810' }}>
              Every recipe. One place.
            </h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, lineHeight: 1.7, color: '#5C4A3A', marginBottom: 24 }}>
              Found a recipe you love? Paste the URL, share from Safari, or paste the text — MyRecipe imports it instantly and saves it to your collection.
            </p>
            {['Import from any website by URL', 'Share from Safari in one tap', 'Paste text or HTML directly', 'Organise with tags and search'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#2C1810', marginBottom: 10 }}>
                <span style={{ color: '#C8401A', fontSize: 18 }}>♡</span> {f}
              </div>
            ))}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bring-in.png" alt="Bring In Recipe" style={{ width: 260, borderRadius: 28, boxShadow: '0 20px 60px rgba(44,24,16,0.15)', flexShrink: 0 }} />
        </div>
      </section>

      {/* RECIPE BOX SPOTLIGHT */}
      <section style={{ background: 'linear-gradient(135deg, #2C1810 0%, #4A2518 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 16 }}>The Family Jewel</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#FFFDF9', maxWidth: 600, margin: '0 auto 16px' }}>
          Recipe Box
        </h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontStyle: 'italic', color: '#D4A574', maxWidth: 520, margin: '0 auto 40px' }}>
          Where recipes become memories.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
          {[
            { label: "Nannie's Easter Bread", sub: 'Family recipes, saved forever' },
            { label: "Mom's Baked Clams", sub: 'Your memories, your way' },
            { label: "Bill's Lemon Shrimp", sub: 'Your own creations' },
          ].map(card => (
            <div key={card.label} style={{ backgroundColor: 'rgba(255,253,249,0.08)', border: '1px solid rgba(255,253,249,0.15)', borderRadius: 16, padding: '20px 24px', minWidth: 180 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>📖</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, color: '#FFFDF9', fontWeight: 600, marginBottom: 4 }}>{card.label}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#D4A574' }}>{card.sub}</div>
            </div>
          ))}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/recipe-box.png" alt="Recipe Box" style={{ width: 240, borderRadius: 28, boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }} />
      </section>

      {/* FEATURE GRID */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Everything You Need</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, textAlign: 'center', marginBottom: 48, color: '#2C1810' }}>Your kitchen. Your rules.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🗄️', title: 'Recipe Vault', desc: 'Your entire recipe collection. Search, filter, tag, and sort in seconds.' },
              { icon: '🍽️', title: 'Meal Ideas', desc: 'Stop wondering what\'s for dinner. AI-powered suggestions based on what you have.' },
              { icon: '🛒', title: 'Shopping List', desc: 'Never forget an ingredient. Build your list from any recipe with one tap.' },
              { icon: '📤', title: 'Social Share', desc: 'Share your recipes with friends and family. Your recipes. Their table.' },
              { icon: '🤝', title: 'Chef Helpers', desc: 'Polish a recipe, resize servings, adjust ingredients — AI does the heavy lifting.' },
              { icon: '📷', title: 'AI Photo', desc: 'Generate a beautiful photo for any recipe. Your cookbook, beautifully illustrated.' },
            ].map(f => (
              <div key={f.title} style={{ backgroundColor: '#FFFDF9', borderRadius: 16, padding: '24px', border: '1px solid #E8E0D4' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontWeight: 700, color: '#2C1810', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ backgroundColor: '#FFFDF9', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: '#C8401A', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>Simple Pricing</p>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, textAlign: 'center', marginBottom: 8, color: '#2C1810' }}>Start free. Upgrade when you're ready.</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', textAlign: 'center', marginBottom: 48 }}>Cancel anytime · Billed annually · Manage in your Apple ID</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, alignItems: 'start' }}>

            {/* FREE */}
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: 20, padding: '32px 24px', border: '1px solid #E8E0D4' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#2C1810', marginBottom: 4 }}>Free</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 700, color: '#2C1810' }}>$0</span>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C' }}>/ forever</span>
              </div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', marginBottom: 24 }}>Always free</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Recipe Vault (10 recipes)', '3 imports/month', 'Meal Ideas', 'Shopping List', 'Chef TV videos', '3 Recipe Box cards', '3 Chef Jen sessions'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2C1810' }}>
                    <span style={{ color: '#C8401A' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* PREMIUM */}
            <div style={{ backgroundColor: '#2C1810', borderRadius: 20, padding: '32px 24px', boxShadow: '0 20px 60px rgba(44,24,16,0.25)', transform: 'scale(1.04)' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#FFFDF9', marginBottom: 4 }}>Premium</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 700, color: '#FFFDF9' }}>$34.99</span>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#D4A574' }}>/ year</span>
              </div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#D4A574', marginBottom: 24 }}>Just $2.92/mo</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Unlimited imports',
                  'Unlimited Recipe Vault',
                  'Unlimited Recipe Box + Memories',
                  'Memory Photos',
                  'Chef Jen AI — 5/mo',
                  'Chef Jen Helpers + Photos — 5/mo',
                  'Learn & Practice',
                  'Print recipes',
                  'Social sharing',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#F5F0E8' }}>
                    <span style={{ color: '#C8401A' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* PRO */}
            <div style={{ backgroundColor: '#F5F0E8', borderRadius: 20, padding: '32px 24px', border: '2px solid #C8401A', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C8401A', color: '#FFFDF9', fontSize: 11, fontWeight: 700, fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', padding: '4px 14px', borderRadius: 20, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Best Value</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#2C1810', marginBottom: 4 }}>Pro</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 700, color: '#2C1810' }}>$49.99</span>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C' }}>/ year</span>
              </div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', marginBottom: 24 }}>Just $4.17/mo</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Everything in Premium',
                  'Chef Jen AI — Unlimited',
                  'Chef Jen Helpers + Photos — Unlimited',
                  'Priority support',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#2C1810' }}>
                    <span style={{ color: '#C8401A' }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(160deg, #F5F0E8 0%, #FFFDF9 100%)', padding: '80px 24px', textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/recipe-icon.png" alt="" style={{ width: 72, height: 72, marginBottom: 24, objectFit: 'contain' }} />
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#2C1810', maxWidth: 500, margin: '0 auto 12px' }}>
          Your kitchen companion awaits.
        </h2>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontStyle: 'italic', color: '#78716C', marginBottom: 32 }}>Free to start. Yours to keep.</p>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '14px 28px', borderRadius: 14, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 10, fontFamily: 'system-ui, sans-serif', opacity: 0.7, letterSpacing: '0.05em' }}>DOWNLOAD ON THE</div>
            <div style={{ fontSize: 18, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
          </div>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#2C1810', padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/recipe-icon.png" alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 14, color: '#F5F0E8', fontWeight: 600 }}>MyCompanionApps</span>
          </a>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', margin: 0 }}>© 2026 MyCompanionApps</p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', textDecoration: 'none' }}>Privacy</a>
            <a href="/terms" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
