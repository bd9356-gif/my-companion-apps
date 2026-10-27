// TEMPORARY — Facebook square preview test (Oct 2026). Remove after testing.
// Same title/description as the real recipe page; only the preview image differs
// (the 1200x1200 square Design B card). Not linked anywhere, not indexed.
// Facebook's crawler doesn't run JavaScript, so it reads these tags; people who
// open the link are sent straight on to the real recipe page by RedirectToRecipe.

import type { Metadata } from 'next'
import { getPublishedRecipe } from '@/lib/publishing'
import RedirectToRecipe from './RedirectToRecipe'

export const dynamic = 'force-dynamic'

const SLUG = 'creamy-chicken-and-root-vegetable-stew'
const RECIPE_PATH = `/recipes/${SLUG}`

export async function generateMetadata(): Promise<Metadata> {
  const recipe = await getPublishedRecipe(SLUG)
  const title = recipe?.title || 'Creamy Chicken and Root Vegetable Stew'
  return {
    title: `${title} — Chef Jen | MyRecipe Companion`,
    description: recipe?.description,
    robots: { index: false, follow: false },
    openGraph: {
      title: `${title} — Created by Chef Jen`,
      description: recipe?.description,
      images: [{ url: '/fb-square-test/stew-square.jpg', width: 1200, height: 1200, type: 'image/jpeg' }],
      type: 'article',
      siteName: 'MyRecipe Companion',
    },
  }
}

export default function Page() {
  return (
    <main style={{ maxWidth: 520, margin: '0 auto', padding: '48px 20px', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>
      <RedirectToRecipe href={RECIPE_PATH} />
      <p style={{ fontSize: 16, color: '#5C4A3A', margin: '0 0 16px' }}>Opening the recipe…</p>
      <a href={RECIPE_PATH} style={{ color: '#C8401A', fontWeight: 700, fontSize: 17 }}>
        Creamy Chicken and Root Vegetable Stew →
      </a>
    </main>
  )
}
