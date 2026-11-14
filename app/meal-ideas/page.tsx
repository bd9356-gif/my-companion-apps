import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "From Meal Ideas to Shopping Made Simple" — the My Meal Ideas + Shopping List demonstration.
// Opened from homepage card #6 (Ever Want to Save Time and Money?). Same layout as the other
// demonstration pages (shared DemoPage), with the same full-screen player as Cooking School.

export const metadata: Metadata = {
  title: 'From Meal Ideas to Shopping Made Simple — MyRecipe Companion',
  description: 'Plan your meals, change your mind, and build a grocery list that remembers what you need.',
  openGraph: {
    title: 'From Meal Ideas to Shopping Made Simple',
    description: 'Plan your meals, change your mind, and build a grocery list that remembers what you need.',
    images: ['/videos/chef-jen-meal-shop-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = {
  src: '/videos/chef-jen-meal-shop.mp4',
  poster: '/videos/chef-jen-meal-shop-poster.jpg',
  width: 720, height: 1450, name: 'chef_jen_meal_shop',
}

export default function MealIdeasPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title={<>From Meal Ideas to Shopping Made&nbsp;Simple</>}
      subtitle="Five Meals. Five Days. Your Order."
      video={VIDEO}
      closingText="Plan your meals, change your mind, and build a grocery list that remembers what you need."
      tryLabel="Ready to Plan Your Week?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="meal_ideas"
    />
  )
}
