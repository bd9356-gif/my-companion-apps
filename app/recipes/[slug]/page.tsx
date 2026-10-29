// Recipe pages served live from Supabase (MyRecipe Companion's own record).
// The address (web_slug) is fixed the first time a recipe is published and never
// changes, so edits in the app show up here at the same URL.
// Every recipe page on the site now comes from here — no hand-typed copies remain.

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import RecipePage from '../RecipePage'
import { getPublishedRecipe, unpublishedRecipeDestination, recipeCardImageUrl, COLLECTIONS } from '@/lib/publishing'
import { cardVersion } from '@/lib/recipeCard/layout'

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
      // Facebook preview: the recipe card (photo, title, facts, key ingredients), generated
      // automatically. Falls back to the photo itself if the card can't be made.
      images: [{
        url: recipeCardImageUrl(recipe.id, cardVersion(recipe.title, recipe.photo, recipe.ingredients, recipe.servings, recipe.prepMinutes, recipe.cookMinutes, recipe.totalMinutes, recipe.difficulty)),
        width: 1200,
        height: 630,
        alt: recipe.title,
      }],
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
    slug: recipe.slug,
    title: recipe.title,
    description: recipe.description,
    photo: recipe.photo,
    category,
    shareUrl: '',
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    prepMinutes: recipe.prepMinutes,
    cookMinutes: recipe.cookMinutes,
    totalMinutes: recipe.totalMinutes,
    servings: recipe.servings,
  }} />
}
