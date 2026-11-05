import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Cooking Questions? Let's Talk!" — the Chef Jen Tips demonstration.
// Opened from homepage card #1 (Need a Little Help in the Kitchen?). Same layout as
// /show-me-how (shared DemoPage).

export const metadata: Metadata = {
  title: 'Cooking Questions? Let’s Talk! — MyRecipe Companion',
  description: 'Have a question? See how Chef Jen helps you find the answer.',
  openGraph: {
    title: 'Cooking Questions? Let’s Talk!',
    description: 'Have a question? See how Chef Jen helps you find the answer.',
    images: ['/videos/chef-jen-tips-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = { src: '/videos/chef-jen-tips.mp4', poster: '/videos/chef-jen-tips-poster.jpg', width: 720, height: 1450, name: 'chef_jen_tips' }

export default function CookingTipsPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title={<>Cooking Questions? Let’s&nbsp;Talk!</>}
      subtitle={<>Have a question? See how Chef Jen helps you find the&nbsp;answer.</>}
      video={VIDEO}
      closingTitle={<>Imagine Having Chef Jen There Whenever You Need a Little&nbsp;Help!</>}
      closingText="From simple questions to cooking challenges, Chef Jen is ready to help."
      tryLabel="Ready to Get Cooking Help?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="cooking_tips"
    />
  )
}
