import type { Metadata } from 'next'
import DemoPage from '../show-me-how/DemoPage'

// "Cooking School" — the Cooking School introduction (Learn. Practice. Master. With your
// teacher, Chef Jen). Opened from homepage card #3 (Want to Learn to Cook?).
// Same layout and full-screen player as the other demonstration pages (shared DemoPage).

export const metadata: Metadata = {
  title: 'Cooking School — MyRecipe Companion',
  description: 'Learn. Practice. Master. With your teacher, Chef Jen.',
  openGraph: {
    title: 'Cooking School — Learn. Practice. Master.',
    description: 'With your teacher, Chef Jen.',
    images: ['/videos/chef-jen-cooking-school-poster.jpg'],
    type: 'website',
    siteName: 'MyRecipe Companion',
  },
}

const VIDEO = {
  src: '/videos/chef-jen-cooking-school.mp4',
  poster: '/videos/chef-jen-cooking-school-poster.jpg',
  width: 720, height: 1450, name: 'chef_jen_cooking_school',
}

export default function CookingSchoolPage() {
  return (
    <DemoPage
      back={{ href: '/myrecipe', label: 'MyRecipe Companion' }}
      title="Cooking School"
      subtitle="Learn. Practice. Master."
      video={VIDEO}
      closingTitle={<>With Your Teacher, Chef&nbsp;Jen.</>}
      closingText="Build your cooking skills with easy lessons, class videos, and tips, at your own pace."
      tryLabel="Ready to Start Learning?"
      learnLabel="Want to See What Else MyRecipe Companion Can Do?"
      source="cooking_school"
    />
  )
}
