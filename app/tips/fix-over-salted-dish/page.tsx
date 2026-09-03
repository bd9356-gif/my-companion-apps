import type { Metadata } from 'next'
import TipPage from '../TipPage'

export const metadata: Metadata = {
  title: 'How Do I Fix an Over-Salted Dish? — Chef Jen | MyRecipe Companion',
  description: 'Chef Jen explains practical ways to fix a dish that has too much salt — and what actually works versus kitchen myths.',
  openGraph: { title: 'How Do I Fix an Over-Salted Dish? — Chef Jen', description: 'What actually works when you\'ve added too much salt.', type: 'article', siteName: 'MyRecipe Companion' },
}

export default function Page() {
  return <TipPage tip={{
    title: "How Do I Fix an Over-Salted Dish?",
    intro: "Over-salting is one of the most common cooking mistakes — and one of the most misunderstood to fix. The potato trick is a myth. Here's what actually works.",
    sections: [
      { heading: "Add More Volume", content: "The most reliable fix is dilution. Add more of the unsalted base — more broth, more water, more tomatoes, more vegetables. This doesn't reduce the salt in the dish, but it spreads it across more food, reducing the concentration. This works well for soups, stews, and sauces." },
      { heading: "Add Acid", content: "A squeeze of lemon juice or a splash of vinegar doesn't remove salt, but it changes how you perceive it. Acid competes with saltiness on your palate and can make an over-salted dish taste balanced instead of harsh. This is often the fastest and most effective fix." },
      { heading: "Add Fat", content: "Cream, butter, coconut milk, or olive oil coat the tongue and soften the perception of salt. Adding a fat component rounds out saltiness the same way acid does — not by removing it, but by making it less dominant. This works especially well in pasta sauces and soups." },
      { heading: "Add Something Sweet", content: "A small amount of sugar, honey, or even a naturally sweet vegetable like carrot can counterbalance saltiness. Use this sparingly — you're not making the dish sweet, you're rebalancing it. A pinch of sugar in a tomato sauce that's too salty can save the whole pot." },
      { heading: "The Potato Myth", content: "Despite what you've heard, adding a raw potato to a salty soup doesn't absorb salt any more than any other vegetable would. The potato absorbs liquid — which is slightly salty — but it's essentially the same as adding water. Skip it and use one of the methods above instead." },
    ],
    bottomLine: "Dilute with volume, brighten with acid, or soften with fat. One of those three will fix almost any over-salted dish.",
  }} />
}
