import Link from 'next/link'

export interface TipData {
  title: string
  intro: string
  sections: { heading: string; content: string }[]
  bottomLine: string
}

export default function TipPage({ tip }: { tip: TipData }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/tips" style={{ textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', fontWeight: 500 }}>
          ← All Tips
        </Link>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>
          Get the App
        </a>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Chef Jen badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '5px 14px', marginBottom: 20 }}>
          <span style={{ fontSize: 14 }}>👩‍🍳</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, fontWeight: 600, color: '#C8401A' }}>Chef Jen Tip</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#2C1810', margin: '0 0 20px', lineHeight: 1.2 }}>
          {tip.title}
        </h1>

        {/* Intro */}
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 17, color: '#5C4A3A', lineHeight: 1.8, margin: '0 0 36px', borderLeft: '3px solid #C8401A', paddingLeft: 16 }}>
          {tip.intro}
        </p>

        {/* Sections */}
        {tip.sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#2C1810', margin: '0 0 10px', paddingBottom: 8, borderBottom: '2px solid #F5D9C0' }}>
              {section.heading}
            </h2>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#3C2415', lineHeight: 1.8, margin: 0 }}>
              {section.content}
            </p>
          </div>
        ))}

        {/* Bottom line */}
        <div style={{ backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 14, padding: '20px 24px', marginBottom: 48 }}>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#2C1810', lineHeight: 1.7, margin: 0 }}>
            <strong>Chef Jen's Bottom Line:</strong> {tip.bottomLine}
          </p>
        </div>

        {/* Chef Jen CTA */}
        <div style={{ backgroundColor: '#2C1810', borderRadius: 20, padding: '36px 28px', textAlign: 'center' }}>
          <span style={{ fontSize: 36 }}>👩‍🍳</span>
          <h2 style={{ color: 'white', fontSize: 22, fontWeight: 700, margin: '12px 0 8px' }}>
            Want Chef Jen in your kitchen?
          </h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#C9B8A8', margin: '0 0 24px', lineHeight: 1.6 }}>
            Ask Chef Jen anything about cooking, get personalized recipes, and save your favorite tips — all in MyRecipe Companion.
          </p>
          <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-block', backgroundColor: '#C8401A', color: 'white', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 15, fontWeight: 700 }}>
            Try MyRecipe Companion Free →
          </a>
        </div>

        {/* Back link */}
        <div style={{ margin: '36px 0 0', textAlign: 'center' }}>
          <Link href="/tips" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', textDecoration: 'none' }}>
            ← Back to all Chef Jen tips
          </Link>
        </div>
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
