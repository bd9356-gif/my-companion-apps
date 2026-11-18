import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Cooking Questions? Let's Talk!" — the Chef Jen Tips demonstration.
// Opened from homepage card #1 (Need a Little Help in the Kitchen?). Same layout as
// /show-me-how (shared DemoPage).

export const metadata: Metadata = {
  title: 'Cooking Questions? Let’s Talk! — MyRecipe Companion',
  description: 'Have ingredients, questions, or an idea? Talk it through with Chef Jen.',
  openGraph: {
    title: 'Cooking Questions? Let’s Talk!',
    description: 'Have ingredients, questions, or an idea? Talk it through with Chef Jen.',
    images: ['/videos/chef-jen-talk-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

// "Talk with Chef Jen" video (Nov 2026). The GA4 video name stays chef_jen_tips so the
// play/complete events keep reporting under the same name as before.
const VIDEO = { src: '/videos/chef-jen-talk.mp4', poster: '/videos/chef-jen-talk-poster.jpg', width: 720, height: 1450, name: 'chef_jen_tips' }

export default function CookingTipsPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title={<>Cooking Questions? Let’s&nbsp;Talk!</>}
      subtitle={<>Have ingredients, questions, or an idea? Talk it through with Chef&nbsp;Jen.</>}
      video={VIDEO}
      closingTitle={<>Imagine Having Chef Jen in Your&nbsp;Kitchen!</>}
      closingText="From a simple question to a recipe you can call your own."
      tryLabel="Ready to Get Cooking Help?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="cooking_tips"
    />
  )
}
