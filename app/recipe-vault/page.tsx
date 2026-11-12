import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Recipe Vault" — the Recipe Vault demonstration. Opened from homepage card #4
// (Tired of Losing Recipes?). Same layout as the other demonstration pages (shared DemoPage);
// the video plays in the page.

export const metadata: Metadata = {
  title: 'Recipe Vault — MyRecipe Companion',
  description: 'Your Recipe Collection Engine. Bring your favorite recipes together in one place, ready whenever you need them.',
  openGraph: {
    title: 'Recipe Vault — Your Recipe Collection Engine.',
    description: 'Bring your favorite recipes together in one place, ready whenever you need them.',
    images: ['/videos/chef-jen-recipe-vault-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = {
  src: '/videos/chef-jen-recipe-vault.mp4',
  poster: '/videos/chef-jen-recipe-vault-poster.jpg',
  width: 720, height: 1450, name: 'chef_jen_recipe_vault', inline: true,
}

export default function RecipeVaultPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title="Recipe Vault"
      subtitle="Your Recipe Collection Engine."
      video={VIDEO}
      closingText="Bring your favorite recipes together in one place, ready whenever you need them."
      tryLabel="Ready to Bring Your Recipes Together?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="recipe_vault"
    />
  )
}
