import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Pan-Seared Florida Yellow Snapper — Chef Jen | MyRecipe Companion',
  description: 'A light and bright coastal favorite featuring fresh yellow snapper fillets topped with a zesty lemon-butter sauce. Created by Chef Jen.',
  openGraph: {
    title: 'Pan-Seared Florida Yellow Snapper — Created by Chef Jen',
    description: 'Fresh yellow snapper fillets topped with a zesty citrus butter sauce.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786887794250-j2xsm988twq.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Pan-Seared Florida Yellow Snapper with Citrus Butter',
    description: 'A light and bright coastal favorite featuring fresh yellow snapper fillets topped with a zesty lemon-butter sauce.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786887794250-j2xsm988twq.jpg',
    category: 'Seafood',
    shareUrl: 'https://recipe.mycompanionapps.com/share/96A1A0A7-96C5-44AD-B8C8-2EFD7ECD243D',
    ingredients: [
      '4 Florida yellow snapper fillets (6 oz each)',
      'Salt and black pepper to taste',
      '3 tablespoons all-purpose flour',
      '4 tablespoons butter, divided',
      '2 tablespoons olive oil',
      '3 tablespoons fresh lemon juice',
      '2 cloves garlic, minced',
      '2 tablespoons fresh parsley, chopped',
      'Lemon slices for garnish',
    ],
    instructions: [
      'Pat the snapper fillets dry with paper towels and season both sides generously with salt and pepper.',
      'Lightly dredge each fillet in flour, shaking off any excess.',
      'Heat the olive oil and 2 tablespoons of butter in a large skillet over medium-high heat until the butter foams.',
      'Carefully place the snapper fillets skin-side down in the skillet and cook for 4 minutes without moving them.',
      'Gently flip the fillets and cook for another 3-4 minutes until the flesh is opaque and flakes easily with a fork.',
      'Transfer the cooked snapper to a serving plate.',
      'In the same skillet, add the remaining 2 tablespoons of butter and the minced garlic, stirring for about 30 seconds until fragrant.',
      'Remove the skillet from heat and stir in the fresh lemon juice, then pour the citrus butter sauce over the fillets.',
      'Garnish with chopped parsley and lemon slices before serving.',
      'Serve immediately with your choice of vegetables or rice.',
    ],
  }} />
}
