import type { Metadata } from 'next'
import TipPage from '../TipPage'

export const metadata: Metadata = {
  title: 'How to Build Restaurant-Level Sauces — Chef Jen | MyRecipe Companion',
  description: 'Chef Jen reveals the techniques professional chefs use to build sauces with deep, layered flavor at home.',
  openGraph: { title: 'How to Build Restaurant-Level Sauces — Chef Jen', description: 'The secrets behind sauces that taste like a restaurant made them.', type: 'article', siteName: 'MyRecipe Companion' },
}

export default function Page() {
  return <TipPage tip={{
    title: "How to Build Restaurant-Level Sauces",
    intro: "Restaurant sauces taste different because they're built differently. It's not a secret ingredient — it's a process. Layer flavor at every step, and the result takes care of itself.",
    sections: [
      { heading: "Start With the Fond", content: "The brown bits stuck to the bottom of the pan after searing meat are called fond, and they're concentrated flavor. Never wash them away. Deglaze with wine, broth, or even water and scrape them up — that's the foundation of your sauce." },
      { heading: "Build Your Aromatics", content: "Onion, shallots, garlic, celery, carrot — these are flavor builders, not just fillers. Cook them low and slow until soft and sweet before adding anything else. Rushing this step is the most common mistake home cooks make." },
      { heading: "Add Acid", content: "A splash of wine, a squeeze of lemon, or a spoon of vinegar brightens everything and balances richness. Add it after your aromatics and let it reduce by half before adding liquid. Acid is the difference between a sauce that tastes flat and one that tastes alive." },
      { heading: "Reduce and Concentrate", content: "Volume is your enemy. Cook your sauce down until it coats the back of a spoon. Restaurants reduce sauces far longer than most home cooks are patient for — and that's where the depth comes from." },
      { heading: "Finish with Butter", content: "Swirling cold butter into a hot sauce off the heat is called mounting, and it creates a glossy, velvety texture that no other technique can replicate. One or two tablespoons is all it takes. This is the last step — always." },
    ],
    bottomLine: "Great sauces are built in layers — fond, aromatics, acid, reduction, butter. Rush any step and you'll taste it.",
  }} />
}
