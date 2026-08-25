import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Linguine Puttanesca — Chef Jen | MyRecipe Companion',
  description: 'Spicy tomato pasta loaded with briny olives, capers, anchovies, and garlic for a bold Mediterranean flavor. Created by Chef Jen.',
  openGraph: {
    title: 'Linguine Puttanesca — Created by Chef Jen',
    description: 'Spicy tomato pasta loaded with briny olives, capers, anchovies, and garlic.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786905468260-2mfmcmlkcne.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Linguine Puttanesca',
    description: 'Spicy tomato pasta loaded with briny olives, capers, anchovies, and garlic for a bold Mediterranean flavor.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786905468260-2mfmcmlkcne.jpg',
    category: 'Pasta',
    shareUrl: 'https://recipe.mycompanionapps.com/share/A96296B9-4341-4756-9B63-656FA8A965C4',
    ingredients: [
      '1 pound linguine pasta',
      '1.5 pounds fresh plum tomatoes',
      '4 garlic cloves, minced',
      '6 anchovy fillets',
      '1 cup Kalamata olives, pitted',
      '3/4 cup green olives, pitted',
      '1/3 cup capers',
      '1/3 cup extra virgin olive oil',
      '1/2 teaspoon red pepper flakes',
      'Salt and black pepper to taste',
      '2 tablespoons fresh parsley, chopped',
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook the linguine according to package directions until al dente.',
      'Meanwhile, dice the fresh plum tomatoes and set aside.',
      'Heat the olive oil in a large skillet over medium heat and add the minced garlic and red pepper flakes.',
      'Sauté the garlic for about 1 minute until fragrant, then add the anchovy fillets and stir until they dissolve into the oil.',
      'Add the diced plum tomatoes to the skillet and simmer for 5-7 minutes, allowing them to break down slightly.',
      'Stir in the Kalamata olives, green olives, and capers, and simmer for another 3-4 minutes.',
      'Taste the sauce and adjust the seasoning with salt and pepper as needed.',
      'Drain the cooked linguine and add it directly to the skillet with the sauce.',
      'Toss the pasta gently with the sauce until well combined and heated through.',
      'Divide the linguine puttanesca among serving bowls and garnish with fresh chopped parsley.',
    ],
  }} />
}
