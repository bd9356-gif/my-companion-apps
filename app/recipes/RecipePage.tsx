import Link from 'next/link'
import TrackedLink from './TrackedLink'
import RecipeTips from './RecipeTips'

// Public recipe page — "pickup counter" layout.
// 1. Deliver the recipe (title, photo, description, quick facts, ingredients, instructions)
//    with no sales block in the way.
// 2. Cards: Meet Chef Jen → Facebook group → Recipe Import Tip (RecipeTips)
// 3. Continue shopping → /recipes            (GA4: recipe_collection_click)
// The header keeps the small "Get the App" button.

const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'

export interface RecipeData {
  slug?: string
  title: string
  description: string
  photo: string
  category: string
  shareUrl: string
  ingredients: string[]
  instructions: string[]
  prepMinutes?: number | null
  cookMinutes?: number | null
  totalMinutes?: number | null
  servings?: number | null
}

const sans = 'system-ui, -apple-system, sans-serif'

function minutes(m: number) {
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60), r = m % 60
  return r ? `${h} hr ${r} min` : `${h} hr`
}

export default function RecipePage({ recipe }: { recipe: RecipeData }) {
  const slug = recipe.slug || ''
  const facts = [
    recipe.prepMinutes ? { label: 'Prep', value: minutes(recipe.prepMinutes) } : null,
    recipe.cookMinutes ? { label: 'Cook', value: minutes(recipe.cookMinutes) } : null,
    recipe.totalMinutes && recipe.totalMinutes !== (recipe.prepMinutes || 0) + (recipe.cookMinutes || 0)
      ? { label: 'Total', value: minutes(recipe.totalMinutes) } : null,
    recipe.servings ? { label: 'Serves', value: String(recipe.servings) } : null,
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/recipes" style={{ textDecoration: 'none', fontFamily: sans, fontSize: 13, color: '#78716C', fontWeight: 500 }}>
          ← All Recipes
        </Link>
        <a href={APP_STORE_URL} style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 16px', borderRadius: 10, textDecoration: 'none', fontFamily: sans, fontSize: 13, fontWeight: 700 }}>
          Get the App
        </a>
      </div>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 64px' }}>

        {/* ── SECTION 1: the recipe ─────────────────────────────── */}
        <article>
          <div style={{ margin: '24px 0 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '4px 12px', marginBottom: 12 }}>
              <span style={{ fontSize: 13 }}>👩‍🍳</span>
              <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: '#C8401A' }}>Created by Chef Jen</span>
            </div>
            <h1 style={{ fontSize: 'clamp(26px, 6vw, 40px)', fontWeight: 700, color: '#2C1810', margin: 0, lineHeight: 1.2 }}>
              {recipe.title}
            </h1>
          </div>

          <div style={{ margin: '18px 0 0', borderRadius: 16, overflow: 'hidden', aspectRatio: '4 / 3', maxHeight: 420, backgroundColor: '#F5F0EA' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={recipe.photo} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {recipe.description && (
            <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', margin: '18px 0 0', lineHeight: 1.6 }}>
              {recipe.description}
            </p>
          )}

          {facts.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '16px 0 0' }}>
              {facts.map((f) => (
                <div key={f.label} style={{ fontFamily: sans, fontSize: 13, color: '#3C2415', backgroundColor: '#FAF6F0', border: '1px solid #F0EBE3', borderRadius: 10, padding: '6px 12px' }}>
                  <span style={{ color: '#A89990', marginRight: 6 }}>{f.label}</span><strong>{f.value}</strong>
                </div>
              ))}
            </div>
          )}

          {/* Ingredients */}
          <section style={{ margin: '32px 0 0' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#2C1810', margin: '0 0 12px', paddingBottom: 10, borderBottom: '2px solid #F5D9C0' }}>
              Ingredients
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px solid #F5F0EA' }}>
                  <span style={{ color: '#C8401A', fontWeight: 700, flexShrink: 0 }}>•</span>
                  <span style={{ fontFamily: sans, fontSize: 16, color: '#3C2415', lineHeight: 1.5 }}>{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section style={{ margin: '32px 0 0' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#2C1810', margin: '0 0 12px', paddingBottom: 10, borderBottom: '2px solid #F5D9C0' }}>
              Instructions
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {recipe.instructions.map((step, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 0', borderBottom: '1px solid #F5F0EA' }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, backgroundColor: '#C8401A', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: sans, fontSize: 13, fontWeight: 700 }}>{i + 1}</span>
                  <span style={{ fontFamily: sans, fontSize: 16, color: '#3C2415', lineHeight: 1.6, paddingTop: 3 }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        {/* Tips: import into a recipe app, join the Facebook group */}
        <RecipeTips slug={slug} />

        {/* ── SECTION 2: continue shopping ──────────────────────── */}
        <section style={{ margin: '48px 0 0', textAlign: 'center', padding: '28px 20px', border: '1px solid #F0EBE3', borderRadius: 16, backgroundColor: 'white' }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#2C1810', margin: '0 0 14px', lineHeight: 1.3 }}>
            Want to see what else Chef Jen is cooking?
          </p>
          <TrackedLink
            href="/recipes"
            event="recipe_collection_click"
            params={{ source_recipe_slug: slug }}
            style={{ display: 'inline-block', fontFamily: sans, fontSize: 15, fontWeight: 700, color: '#C8401A', textDecoration: 'none', border: '2px solid #C8401A', borderRadius: 12, padding: '12px 22px' }}
          >
            Explore Chef Jen’s Recipe Collection →
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
