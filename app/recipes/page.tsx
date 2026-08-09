import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chef Jen Recipes — MyRecipe Companion',
  description: 'Beautiful recipes created by Chef Jen, your AI cooking companion. From classic seafood to indulgent desserts — discover what Chef Jen can create for you.',
  openGraph: {
    title: 'Chef Jen Recipes',
    description: 'Beautiful recipes created by Chef Jen, your AI cooking companion.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786142165339-oxhd0b3576m.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const recipes = [
  {
    slug: 'crab-imperial',
    title: 'Crab Imperial',
    description: 'A classic Maryland dish of lump crab meat baked in a creamy, savory sauce topped with crispy breadcrumbs.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786142165339-oxhd0b3576m.jpg',
    category: 'Seafood',
  },
  {
    slug: 'garlic-grilled-shrimp',
    title: 'Garlic Grilled Shrimp',
    description: 'Succulent shrimp infused with garlic and smoky spices, quickly grilled to perfection for a restaurant-quality dish.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1782225884651-nxf7oemu1kn.jpg',
    category: 'Seafood',
  },
  {
    slug: 'one-pan-italian-chicken',
    title: 'One-Pan Italian Chicken with Roasted Vegetables',
    description: 'Tender chicken thighs and roasted vegetables finished with fresh tomatoes and basil. A perfect weeknight dinner.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1780071050898-dykhmla8tx.jpg',
    category: 'Chicken',
  },
  {
    slug: 'italian-cream-cake',
    title: 'Italian Cream Cake',
    description: 'A rich, decadent layer cake with cream cheese frosting, coconut, and pecans that\'s pure indulgence.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301424971-7h0y4vp4uaw.jpg',
    category: 'Dessert',
  },
]

export default function RecipesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 700, color: '#2C1810' }}>MyCompanionApps</span>
        </Link>
        <Link href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>
          Get the App
        </Link>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '64px 24px 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
          <span style={{ fontSize: 16 }}>👩‍🍳</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>Created by Chef Jen</span>
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2C1810', margin: '0 0 16px', lineHeight: 1.2 }}>
          Chef Jen's Recipe Collection
        </h1>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 18, color: '#78716C', maxWidth: 560, margin: '0 auto 12px', lineHeight: 1.6 }}>
          Every recipe here was created by Chef Jen — your personal AI cooking companion. Tap any recipe to see the full details.
        </p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#A89990', maxWidth: 480, margin: '0 auto' }}>
          Want Chef Jen to create a recipe just for you? <Link href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ color: '#C8401A', textDecoration: 'none', fontWeight: 600 }}>Download MyRecipe Companion →</Link>
        </p>
      </div>

      {/* Recipe Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
        {recipes.map((recipe) => (
          <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img src={recipe.photo} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '16px 18px 20px' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#FEF3E8', color: '#C8401A', fontSize: 11, fontFamily: 'system-ui, sans-serif', fontWeight: 700, padding: '3px 10px', borderRadius: 100, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {recipe.category}
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2C1810', margin: '0 0 8px', lineHeight: 1.3 }}>
                  {recipe.title}
                </h2>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', margin: 0, lineHeight: 1.5 }}>
                  {recipe.description}
                </p>
                <div style={{ marginTop: 14, fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>
                  View Recipe →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ backgroundColor: '#FEF3E8', borderTop: '1px solid #F5D9C0', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2C1810', marginBottom: 12 }}>
          Want Chef Jen to cook for you?
        </h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#78716C', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
          Ask Chef Jen to create any recipe you can imagine — personalized, detailed, and saved directly to your Recipe Vault.
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
