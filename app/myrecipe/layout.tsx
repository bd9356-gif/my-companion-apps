import type { Metadata } from 'next'

// The MyRecipe Companion homepage (the Playbill) has its own title so GA4 reports it
// separately from the MyCompanionApps umbrella homepage at "/".
// Its Facebook/Open Graph preview uses the approved Playbill artwork (the video's opening image).

const TITLE = 'MyRecipe Companion — More Than Recipes'
const OG_DESCRIPTION = 'Discover what MyRecipe Companion can do for you. More Than Recipes.'
const OG_IMAGE = { url: '/videos/playbill-poster.jpg', width: 1080, height: 720, alt: 'Welcome to MyRecipe Companion — More Than Recipes' }

export const metadata: Metadata = {
  title: TITLE,
  description: 'Discover MyRecipe Companion — more than recipes. Create, save, organize, and share recipes. Learn to cook and have a conversation with Chef Jen.',
  openGraph: {
    type: 'website',
    siteName: 'MyCompanionApps',
    url: '/myrecipe',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export default function MyRecipeLayout({ children }: { children: React.ReactNode }) {
  return children
}
