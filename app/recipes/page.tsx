import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'
import { getPublishedRecipes } from '@/lib/publishing'
import ChefJenStoryStrip from './ChefJenStoryStrip'
import FacebookGroupCta from '../components/FacebookGroupCta'

// Live: the collection is exactly the recipes published in /admin (Supabase).
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Chef Jen Recipes — MyRecipe Companion',
  description: 'Beautiful recipes created by Chef Jen, your AI cooking companion. Everyday Favorites and Crowd-Pleaser Classics.',
  openGraph: {
    title: 'Chef Jen Recipes',
    description: 'Beautiful recipes created by Chef Jen, your AI cooking companion.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790286408639-gbgudepbf9a.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

type RecipeCardData = { slug: string; title: string; description: string; photo: string }

function RecipeCard({ slug, title, description, photo }: { slug: string; title: string; description: string; photo: string }) {
  return (
    <Link href={`/recipes/${slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
        <div style={{ height: 220, overflow: 'hidden' }}>
          <img src={photo} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '16px 18px 20px' }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2C1810', margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h2>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#78716C', margin: 0, lineHeight: 1.5 }}>{description}</p>
          <div style={{ marginTop: 14, fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>View Recipe →</div>
        </div>
      </div>
    </Link>
  )
}

// `inserts` maps "after the Nth card of this section" -> a full-width element spliced
// into the grid. Positions are counted from the displayed list, not tied to any record.
function CollectionSection({ title, subtitle, recipes, inserts = {} }: { title: string; subtitle: string; recipes: RecipeCardData[]; inserts?: Record<number, ReactNode> }) {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 60px' }}>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#2C1810', margin: '0 0 6px' }}>{title}</h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 15, color: '#78716C', margin: 0 }}>{subtitle}</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
        {recipes.map((recipe, i) => (
          <Fragment key={recipe.slug}>
            <RecipeCard {...recipe} />
            {inserts[i + 1]}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const STORY_AFTER = 6   // story strip appears after the 6th displayed recipe
const GROUP_AFTER = 12  // Facebook CTA appears later, after more cards

export default async function RecipesPage() {
  const live = await getPublishedRecipes()
  const inCollection = (key: string): RecipeCardData[] =>
    live.filter((r) => r.collection === key).map(({ slug, title, description, photo }) => ({ slug, title, description, photo }))

  const sections = [
    { title: 'Everyday Favorites', subtitle: 'Easy, satisfying recipes made for real life.', recipes: inCollection('everyday-favorites') },
    { title: 'Crowd-Pleaser Classics', subtitle: 'Familiar favorites worth making again and again.', recipes: inCollection('crowd-pleaser-classics') },
  ]
  const total = sections.reduce((n, s) => n + s.recipes.length, 0)
  // Facebook CTA goes after more cards; with a short list it lands on the last card,
  // and it is skipped if that would put it right next to the story strip.
  const groupAt = Math.min(GROUP_AFTER, total)
  const showGroup = groupAt > STORY_AFTER

  // Translate global positions into per-section positions.
  let offset = 0
  const sectionInserts = sections.map((s) => {
    const inserts: Record<number, ReactNode> = {}
    const place = (globalPos: number, node: ReactNode) => {
      const local = globalPos - offset
      if (local >= 1 && local <= s.recipes.length) inserts[local] = node
    }
    if (total >= 1) place(Math.min(STORY_AFTER, total), <ChefJenStoryStrip key="story" />)
    if (showGroup) place(groupAt, <FacebookGroupCta key="group" variant="collection" sourceType="recipe_collection" ctaLocation="after_story" fullWidthInGrid />)
    offset += s.recipes.length
    return inserts
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDF9', fontFamily: 'Georgia, serif' }}>
      <div style={{ backgroundColor: '#FFFDF9', borderBottom: '1px solid #F0EBE3', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 700, color: '#2C1810' }}>MyCompanionApps</span>
        </Link>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ backgroundColor: '#C8401A', color: 'white', padding: '8px 18px', borderRadius: 10, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 700 }}>Get the App</a>
      </div>

      <div style={{ textAlign: 'center', padding: '64px 24px 48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
          <span style={{ fontSize: 16 }}>👩‍🍳</span>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, fontWeight: 600, color: '#C8401A' }}>Created by Chef Jen</span>
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#2C1810', margin: '0 0 16px', lineHeight: 1.2 }}>Chef Jen's Recipe Collection</h1>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 18, color: '#78716C', maxWidth: 560, margin: '0 auto 12px', lineHeight: 1.6 }}>Every recipe here was created by Chef Jen — your personal AI cooking companion. Tap any recipe to see the full details.</p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#A89990', maxWidth: 480, margin: '0 auto' }}>
          Want Chef Jen to create a recipe just for you? <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ color: '#C8401A', textDecoration: 'none', fontWeight: 600 }}>Download MyRecipe Companion →</a>
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid #F0EBE3' }} />
      </div>

      {sections[0].recipes.length > 0 && <CollectionSection {...sections[0]} inserts={sectionInserts[0]} />}

      {sections[0].recipes.length > 0 && sections[1].recipes.length > 0 && (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>
          <hr style={{ border: 'none', borderTop: '1px solid #F0EBE3' }} />
        </div>
      )}

      {sections[1].recipes.length > 0 && <CollectionSection {...sections[1]} inserts={sectionInserts[1]} />}

      <div style={{ backgroundColor: '#FEF3E8', borderTop: '1px solid #F5D9C0', padding: '48px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#2C1810', marginBottom: 12 }}>Want Chef Jen to cook for you?</h2>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 16, color: '#78716C', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>Ask Chef Jen to create any recipe you can imagine — personalized, detailed, and saved directly to your Recipe Vault.</p>
        <a href="https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990" style={{ display: 'inline-block', backgroundColor: '#C8401A', color: 'white', padding: '14px 32px', borderRadius: 14, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}>Try MyRecipe Companion Free →</a>
      </div>

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
