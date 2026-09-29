// Chef Jen tip pages served live from Supabase (the app's Learning Vault note).
// Hand-built folders under /tips still win over this route until they're converted.

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import TipPage from '../TipPage'
import { getPublishedTip } from '@/lib/publishing'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tip = await getPublishedTip(slug)
  if (!tip) return { title: 'Chef Jen Cooking Tips — MyRecipe Companion' }
  return {
    title: `${tip.title} — Chef Jen | MyRecipe Companion`,
    description: tip.preview,
    openGraph: { title: `${tip.title} — Chef Jen`, description: tip.preview, type: 'article', siteName: 'MyRecipe Companion' },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const tip = await getPublishedTip(slug)
  if (!tip) redirect('/tips')
  return <TipPage tip={{ title: tip.title, intro: tip.intro, sections: tip.sections, bottomLine: tip.bottomLine }} />
}
