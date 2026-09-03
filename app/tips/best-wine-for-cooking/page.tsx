import type { Metadata } from 'next'
import TipPage from '../TipPage'

export const metadata: Metadata = {
  title: 'What\'s the Best Wine for Cooking? — Chef Jen | MyRecipe Companion',
  description: 'Chef Jen explains how to choose the right wine for cooking — from rich red sauces to delicate seafood dishes.',
  openGraph: { title: 'What\'s the Best Wine for Cooking? — Chef Jen', description: 'How to choose the right wine for any dish.', type: 'article', siteName: 'MyRecipe Companion' },
}

export default function Page() {
  return <TipPage tip={{
    title: "What's the Best Wine for Cooking?",
    intro: "The old rule is simple: cook with wine you'd actually drink. But that doesn't mean you need to open your best bottle. It means don't cook with something you wouldn't put in a glass.",
    sections: [
      { heading: "White Wine", content: "Dry whites like Sauvignon Blanc, Pinot Grigio, or unoaked Chardonnay are your go-to for chicken, seafood, creamy sauces, and risotto. They add brightness and acidity without overpowering the dish. Avoid sweet whites — they'll make your sauce taste like dessert." },
      { heading: "Red Wine", content: "Dry reds like Cabernet Sauvignon, Merlot, or Chianti work beautifully in braises, beef stews, and tomato-based sauces. They add depth, color, and a richness that slow cooking can't fake. Avoid heavy, tannic reds for light dishes — they'll overwhelm everything else." },
      { heading: "Marsala & Sherry", content: "Fortified wines like Marsala and dry Sherry are powerhouses in the kitchen. A splash of Marsala transforms a simple chicken breast into something memorable. Dry Sherry adds a nutty, complex note to soups and pan sauces." },
      { heading: "When Wine Isn't Available", content: "No wine on hand? For white wine, use chicken or vegetable broth with a splash of white wine vinegar for acidity. For red wine, beef broth with a small amount of red wine vinegar or grape juice works in a pinch. The substitution won't be identical, but it keeps the dish moving." },
    ],
    bottomLine: "Match the wine to the dish — white for light, red for rich — and always use something you'd be happy to sip while you cook.",
  }} />
}
