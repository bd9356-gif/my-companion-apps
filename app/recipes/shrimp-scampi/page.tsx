import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Shrimp Scampi — Chef Jen | MyRecipe Companion',
  description: 'Succulent shrimp sautéed in garlic, white wine, and butter with a squeeze of fresh lemon. Created by Chef Jen.',
  openGraph: {
    title: 'Shrimp Scampi — Created by Chef Jen',
    description: 'Succulent shrimp sautéed in garlic, white wine, and butter with a squeeze of fresh lemon.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1789588822524-3vi6e9j6lm5.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Shrimp Scampi',
    description: 'Succulent shrimp sautéed in garlic, white wine, and butter with a squeeze of fresh lemon.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1789588822524-3vi6e9j6lm5.jpg',
    category: 'Seafood',
    shareUrl: 'https://recipe.mycompanionapps.com/share/6DB7F78F-160B-46E1-8692-B9DC3C18F5A1',
    ingredients: [
      '1 pound large shrimp, peeled and deveined',
      '4 tablespoons butter',
      '6 garlic cloves, minced',
      '1/2 cup dry white wine',
      '3 tablespoons fresh lemon juice',
      '1/4 teaspoon red pepper flakes',
      'Salt and black pepper to taste',
      '2 tablespoons fresh parsley, chopped',
      '1 tablespoon olive oil',
    ],
    instructions: [
      'Heat the olive oil and 2 tablespoons of butter in a large skillet over medium-high heat.',
      'Add the minced garlic and red pepper flakes, stirring for about 30 seconds until fragrant.',
      'Add the shrimp to the skillet and season with salt and pepper.',
      'Cook the shrimp for 1–2 minutes on each side until they start to turn pink.',
      'Pour in the white wine and lemon juice, scraping up any browned bits from the bottom of the pan.',
      'Cook for 2–3 minutes until the shrimp are fully cooked and the sauce begins to reduce.',
      'Remove the skillet from heat and stir in the remaining 2 tablespoons of butter until melted and creamy.',
      'Taste and adjust seasoning with additional salt and pepper if needed.',
      'Sprinkle with fresh chopped parsley.',
      'Serve immediately over pasta, with crusty bread, or on its own.',
    ],
  }} />
}
