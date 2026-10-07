import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedTips } from '@/lib/publishing'

// Live: the tips list is exactly the tips published in /admin (Supabase).
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Chef Jen Cooking Tips — MyRecipe Companion',
  description: 'Practical cooking tips and kitchen wisdom from Chef Jen, your personal AI cooking companion. Learn techniques that actually make a difference.',
  openGraph: {
    title: 'Chef Jen Cooking Tips',
    description: 'Practical cooking tips and kitchen wisdom from Chef Jen.',
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

export default async function TipsPage() {
  const live = await getPublishedTips()
  const allTips = live.map((t) => ({ slug: t.slug, title: t.title, preview: t.preview, category: 'Chef Jen Tip' }))

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 700, color: '#2C1810' }}>MyCompanionApps</span>
        </Link>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>
          Get the App
        </a>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '64px 24px 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
          <span style={{ fontSize: 16 }}>👩‍🍳</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>From Chef Jen</span>
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2C1810', margin: '0 0 16px', lineHeight: 1.2 }}>
          Chef Jen's Cooking Tips
        </h1>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 18, color: '#78716C', maxWidth: 560, margin: '0 auto 12px', lineHeight: 1.6 }}>
          Practical kitchen wisdom from your personal AI cooking companion. The techniques that actually make a difference.
        </p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#A89990', maxWidth: 480, margin: '0 auto' }}>
          Want Chef Jen to answer your cooking questions? <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ color: '#C8401A', textDecoration: 'none', fontWeight: 600 }}>Download MyRecipe Companion →</a>
        </p>
      </div>

      {/* Tips Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
        {allTips.map((tip) => (
          <Link key={tip.slug} href={`/tips/${tip.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: '24px', height: '100%', boxSizing: 'border-box', borderTop: '3px solid #C8401A' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#FEF3E8', color: '#C8401A', fontSize: 11, fontFamily: 'system-ui, sans-serif', fontWeight: 700, padding: '3px 10px', borderRadius: 100, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {tip.category}
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2C1810', margin: '0 0 10px', lineHeight: 1.3 }}>
                {tip.title}
              </h2>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', margin: '0 0 16px', lineHeight: 1.6 }}>
                {tip.preview}
              </p>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>
                Read the tip →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ backgroundColor: '#FEF3E8', borderTop: '1px solid #F5D9C0', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2C1810', marginBottom: 12 }}>
          Ask Chef Jen anything.
        </h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#78716C', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
          Get personalized cooking advice, create recipes, save your favorites, and learn at your own pace — all with Chef Jen.
        </p>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-block', backgroundColor: '#C8401A', color: 'white', padding: '14px 32px', borderRadius: 14, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}>
          Try MyRecipe Companion Free →
        </a>
      </div>

      {/* Footer */}
      <div style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid #F0EBE3' }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#A89990', margin: 0 }}>
          © 2026 MyCompanionApps &nbsp;·&nbsp;
          <Link href="/privacy" style={{ color: '#A89990', textDecoration: 'none' }}>Privacy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms" style={{ color: '#A89990', textDecoration: 'none' }}>Terms</Link>
        </p>
      </div>
    </div>
  )
}
