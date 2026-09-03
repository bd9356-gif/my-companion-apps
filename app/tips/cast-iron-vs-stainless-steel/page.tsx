import type { Metadata } from 'next'
import TipPage from '../TipPage'

export const metadata: Metadata = {
  title: 'Cast Iron vs Stainless Steel — Chef Jen | MyRecipe Companion',
  description: 'Chef Jen breaks down the difference between cast iron and stainless steel pans so you always reach for the right one.',
  openGraph: { title: 'Cast Iron vs Stainless Steel — Chef Jen', description: 'Which pan should you reach for and when?', type: 'article', siteName: 'MyRecipe Companion' },
}

export default function Page() {
  return <TipPage tip={{
    title: "Cast Iron vs Stainless Steel — Which Should You Reach For?",
    intro: "Both are excellent. Neither is universally better. The one you should grab depends entirely on what you're cooking — and once you understand why, you'll never hesitate at the stove again.",
    sections: [
      { heading: "Cast Iron: The Heat Holder", content: "Cast iron heats slowly but holds heat like nothing else. That's what makes it perfect for searing steaks, baking cornbread, and frying chicken. Once it's hot, it stays hot even when cold food hits the surface — which is exactly what you want for a perfect crust. It also goes from stovetop to oven without a second thought." },
      { heading: "Cast Iron: The Trade-Off", content: "Cast iron is reactive with acidic foods. Wine, tomatoes, and citrus can leach iron into the food and give it a metallic taste. It also requires seasoning and careful drying to prevent rust. It's heavy. None of that is a dealbreaker — just something to know." },
      { heading: "Stainless Steel: The Workhorse", content: "Stainless heats faster and more evenly than cast iron. It's non-reactive, so you can deglaze with wine, make tomato sauces, and finish with lemon without worry. The browned bits that stick to the bottom — the fond — are pure flavor, and stainless is built for deglazing them into a sauce." },
      { heading: "Stainless Steel: The Trade-Off", content: "Stainless sticks more than cast iron if you don't preheat it properly or use enough fat. The trick is to heat the pan first, then add oil, then add food. If it sticks, it's usually not ready to release yet — give it another 30 seconds and it will let go on its own." },
    ],
    bottomLine: "Reach for cast iron when you want heat retention and a crust. Reach for stainless when you want control, speed, and a pan sauce.",
  }} />
}
