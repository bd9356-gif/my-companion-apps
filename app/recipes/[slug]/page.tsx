// Recipe pages served live from Supabase (MyRecipe Companion's own record).
// The address (web_slug) is fixed the first time a recipe is published and never
// changes, so edits in the app show up here at the same URL.
// Hand-built folders under /recipes still win over this route until they're converted.

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import RecipePage from '../RecipePage'
import { getPublishedRecipe, COLLECTIONS } from '@/lib/publishing'

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
  // Unpublished or unknown: send visitors to the collection instead of a dead end.
  if (!recipe) redirect('/recipes')

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
