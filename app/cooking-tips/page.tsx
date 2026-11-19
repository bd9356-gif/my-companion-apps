import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Imagine Having a Personal Chef to Talk To!" — the Talk with Chef Jen demonstration
// (headline and wording updated Nov 2026; the page title and Facebook preview text are unchanged).
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
      title={<>Imagine Having a Personal Chef to Talk&nbsp;To!</>}
      subtitle={<>Come on in and meet Chef&nbsp;Jen.</>}
      video={VIDEO}
      closingText={<>From a simple question to a recipe you can call your&nbsp;own.</>}
      closingTextLarge
      tryLabel="Ready to Get Cooking Help?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="cooking_tips"
    />
  )
}
