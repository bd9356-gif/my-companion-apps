// Recipe pages served live from Supabase (MyRecipe Companion's own record).
// The address (web_slug) is fixed the first time a recipe is published and never
// changes, so edits in the app show up here at the same URL.
// Every recipe page on the site now comes from here — no hand-typed copies remain.

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import RecipePage from '../RecipePage'
import { getPublishedRecipe, unpublishedRecipeDestination, COLLECTIONS } from '@/lib/publishing'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const recipe = await getPublishedRecipe(slug)
  if (!recipe) return { title: 'Chef Jen Recipes — MyRecipe Companion' }
  return {
    title: `${recipe.title} — Chef Jen | MyRecipe Companion`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.title} — Created by Chef Jen`,
      description: recipe.description,
      images: [recipe.photo],
      type: 'article',
      siteName: 'MyRecipe Companion',
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const recipe = await getPublishedRecipe(slug)
  // Switched off: send visitors to the recipe's share page in the app.
  // Unknown or deleted: send them to the collection.
  if (!recipe) redirect(await unpublishedRecipeDestination(slug))

  const category = COLLECTIONS.find((c) => c.key === recipe.collection)?.title || 'Chef Jen Recipes'
  return <RecipePage recipe={{
    title: recipe.title,
    description: recipe.description,
    photo: recipe.photo,
    category,
    shareUrl: '',
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  }} />
}
