import Link from 'next/link'

export interface RecipeData {
  title: string
  description: string
  photo: string
  category: string
  shareUrl: string
  ingredients: string[]
  instructions: string[]
}

export default function RecipePage({ recipe }: { recipe: RecipeData }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/recipes" style={{ textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', fontWeight: 500 }}>
          ← All Recipes
        </Link>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>
          Get the App
        </a>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Photo */}
        <div style={{ margin: '32px 0 0', borderRadius: 20, overflow: 'hidden', height: 380 }}>
          <img src={recipe.photo} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Title area */}
        <div style={{ margin: '28px 0 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '5px 14px', marginBottom: 14 }}>
            <span style={{ fontSize: 14 }}>👩‍🍳</span>
            <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, fontWeight: 600, color: '#C8401A' }}>Created by Chef Jen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#2C1810', margin: '0 0 12px', lineHeight: 1.2 }}>
            {recipe.title}
          </h1>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#78716C', margin: 0, lineHeight: 1.6 }}>
            {recipe.description}
          </p>
        </div>

        {/* Import CTA */}
        <div style={{ margin: '28px 0', backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#2C1810', margin: '0 0 2px' }}>Save to your Recipe Vault</p>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 12, color: '#78716C', margin: 0 }}>Open in MyRecipe Companion and import with one tap</p>
          </div>
          <a href={recipe.shareUrl} style={{ backgroundColor: '#C8401A', color: 'white', padding: '10px 20px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
            Import Recipe →
          </a>
        </div>

        {/* Ingredients */}
        <div style={{ margin: '36px 0 0' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#2C1810', margin: '0 0 16px', paddingBottom: 10, borderBottom: '2px solid #F5D9C0' }}>
            Ingredients
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recipe.ingredients.map((ing, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid #F5F0EA' }}>
                <span style={{ color: '#C8401A', fontWeight: 700, flexShrink: 0 }}>•</span>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#3C2415', lineHeight: 1.5 }}>{ing}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div style={{ margin: '36px 0 0' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#2C1810', margin: '0 0 16px', paddingBottom: 10, borderBottom: '2px solid #F5D9C0' }}>
            Instructions
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recipe.instructions.map((step, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 0', borderBottom: '1px solid #F5F0EA' }}>
                <span style={{ flexShrink: 0, width: 28, height: 28, backgroundColor: '#C8401A', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>{i + 1}</span>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#3C2415', lineHeight: 1.6, paddingTop: 4 }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Chef Jen CTA */}
        <div style={{ margin: '48px 0 0', backgroundColor: '#2C1810', borderRadius: 20, padding: '36px 28px', textAlign: 'center' }}>
          <span style={{ fontSize: 36 }}>👩‍🍳</span>
          <h2 style={{ color: 'white', fontSize: 22, fontWeight: 700, margin: '12px 0 8px' }}>
            Want Chef Jen to cook for you?
          </h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#C9B8A8', margin: '0 0 24px', lineHeight: 1.6 }}>
            This recipe was created by Chef Jen — your personal AI cooking companion. Ask her to create any recipe you can imagine, personalized just for you.
          </p>
          <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-block', backgroundColor: '#C8401A', color: 'white', padding: '14px 28px', borderRadius: 12, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 15, fontWeight: 700 }}>
            Try MyRecipe Companion Free →
          </a>
        </div>

        {/* Back link */}
        <div style={{ margin: '36px 0 0', textAlign: 'center' }}>
          <Link href="/recipes" style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', textDecoration: 'none' }}>
            ← Back to all Chef Jen recipes
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
