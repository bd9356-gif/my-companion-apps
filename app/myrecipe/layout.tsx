import type { Metadata } from 'next'

// The MyRecipe Companion homepage (the Playbill) has its own title so GA4 reports it
// separately from the MyCompanionApps umbrella homepage at "/".
// Its Facebook/Open Graph preview uses the homepage opening picture (Nov 2026: Experience the
// Future of Home Cooking, with cream space above and below to make 1200 × 630). A new file name
// so Facebook and others fetch it instead of their saved copy of the old Playbill picture.

const TITLE = 'MyRecipe Companion — More Than Recipes'
const OG_DESCRIPTION = 'Discover what MyRecipe Companion can do for you. More Than Recipes.'
const OG_IMAGE = { url: '/myrecipe/myrecipe-og-2026.jpg', width: 1200, height: 630, alt: 'More Than Recipes. Experience the Future of Home Cooking. With Chef Jen — Your AI Cooking Companion.' }

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
