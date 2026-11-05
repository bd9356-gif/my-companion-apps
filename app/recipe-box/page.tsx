import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Ever Lose a Family Recipe?" — the Recipe Box demonstration.
// Opened from homepage card #5. Same layout as /cooking-tips and /show-me-how (shared DemoPage).

export const metadata: Metadata = {
  title: 'Ever Lose a Family Recipe? — MyRecipe Companion',
  description: 'Some recipes are more than food. They’re memories worth keeping.',
  openGraph: {
    title: 'Ever Lose a Family Recipe?',
    description: 'Some recipes are more than food. They’re memories worth keeping.',
    images: ['/videos/chef-jen-recipe-box-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = { src: '/videos/chef-jen-recipe-box.mp4', poster: '/videos/chef-jen-recipe-box-poster.jpg', width: 720, height: 1206, name: 'chef_jen_recipe_box' }

export default function RecipeBoxPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title={<>Ever Lose a Family&nbsp;Recipe?</>}
      subtitle={<>Some recipes are more than food. They’re memories worth&nbsp;keeping.</>}
      video={VIDEO}
      closingTitle={<>
        <span style={{ display: 'block' }}>The Recipe Vault Saves What You&nbsp;Cook.</span>
        <span style={{ display: 'block' }}>The Recipe Box Saves Why It&nbsp;Matters.&nbsp;❤️</span>
      </>}
      closingText="Keep your favorite recipes together with the photographs, handwritten cards, and personal stories that make them special."
      tryLabel="Ready to Preserve Your Family Recipes?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="recipe_box"
    />
  )
}
