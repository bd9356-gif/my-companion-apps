import type { Metadata } from 'next'
import TipPage from '../TipPage'

export const metadata: Metadata = {
  title: 'How to Rescue Dry Chicken — Chef Jen | MyRecipe Companion',
  description: 'Chef Jen shares practical techniques to save overcooked, dry chicken and prevent it from happening again.',
  openGraph: { title: 'How to Rescue Dry Chicken — Chef Jen', description: 'Save overcooked chicken and prevent it from happening again.', type: 'article', siteName: 'MyRecipe Companion' },
}

export default function Page() {
  return <TipPage tip={{
    title: "How to Rescue Dry Chicken",
    intro: "Dry chicken is one of the most common kitchen disappointments — and one of the most fixable. Whether you've overcooked tonight's dinner or you're looking ahead, there are real solutions for both.",
    sections: [
      { heading: "The Quick Rescue: Warm Broth", content: "Slice or shred the dry chicken and return it to a pan with a splash of warm chicken broth. Let it sit over low heat for a few minutes to absorb moisture. It won't be perfect, but it will be significantly more palatable. A squeeze of lemon at the end helps too." },
      { heading: "Sauce It", content: "Dry chicken disappears under a good sauce. Slice it thin, lay it over pasta with a pan sauce, or shred it into a soup or chili where moisture can work its way back in. The texture issue becomes irrelevant when the dish has enough going on around it." },
      { heading: "Turn It Into Something Else", content: "Shredded dry chicken is actually perfect for chicken salad, tacos, quesadillas, or fried rice. The other ingredients — mayo, avocado, cheese, soy sauce — add fat and moisture that the chicken is missing. This is the move that turns a mistake into a planned dish." },
      { heading: "Prevent It Next Time", content: "The number one cause of dry chicken is cooking by time instead of temperature. A thermometer is the only reliable way to know when chicken is done. Pull it at 160°F — it will carry over to 165°F while resting. Also: bone-in, skin-on chicken is far more forgiving than boneless, skinless breast." },
    ],
    bottomLine: "Warm broth or a good sauce saves most dry chicken. A thermometer prevents it from happening in the first place.",
  }} />
}
