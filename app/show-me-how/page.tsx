import type { Metadata } from 'next'
import DemoPage from './DemoPage'

// "Watch Chef Jen Create a Recipe!" — destination for "Show Me How →" on /meet-chef-jen.
// Linked from "Show Me How →" on the Meet Chef Jen page.

export const metadata: Metadata = {
  title: 'Watch Chef Jen Create a Recipe — MyRecipe Companion',
  description: 'Have a conversation. Watch the magic happen. See Chef Jen turn a simple request into a finished recipe.',
  openGraph: {
    title: 'Watch Chef Jen Create a Recipe!',
    description: 'Have a conversation. Watch the magic happen.',
    images: ['/videos/chef-jen-creates-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = { src: '/videos/chef-jen-creates.mp4', poster: '/videos/chef-jen-creates-poster.jpg', width: 720, height: 1280, name: 'chef_jen_creates' }

export default function ShowMeHowPage() {
  return (
    <DemoPage
      back={{ href: '/', label: 'MyCompanionApps' }}
      title={<>Watch Chef Jen Create a&nbsp;Recipe!</>}
      subtitle="One simple request. Watch Chef Jen bring it to life."
      video={VIDEO}
      closingTitle={<>Now Imagine What Chef Jen Could Create With&nbsp;You!</>}
      closingText="Your next great recipe could start with one simple idea."
      tryLabel="Ready to Create Your Own?"
      learnLabel="Want to Know What Else MyRecipe Companion Can Do?"
      source="show_me_how"
    />
  )
}
