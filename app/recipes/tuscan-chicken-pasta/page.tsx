import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Tuscan Chicken Pasta — Chef Jen | MyRecipe Companion',
  description: 'Tender chicken and pasta tossed with sun-dried tomatoes, spinach, and garlic in a light olive oil sauce inspired by Tuscan flavors. Created by Chef Jen.',
  openGraph: {
    title: 'Tuscan Chicken Pasta — Created by Chef Jen',
    description: 'Tender chicken and pasta tossed with sun-dried tomatoes, spinach, and garlic in a light Tuscan olive oil sauce.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787692475971-r8aloew8u2b.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Tuscan Chicken Pasta',
    description: 'Tender chicken and pasta tossed with sun-dried tomatoes, spinach, and garlic in a light olive oil sauce inspired by Tuscan flavors.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787692475971-r8aloew8u2b.jpg',
    category: 'Pasta',
    shareUrl: 'https://recipe.mycompanionapps.com/share/742219B6-4606-46B1-88AF-F06271DE8A97',
    ingredients: [
      '4 chicken breasts (about 6 oz each)',
      '1 pound pasta (penne or linguine)',
      '3 cups fresh spinach',
      '1/2 cup sun-dried tomatoes, chopped',
      '3 tablespoons olive oil',
      '4 cloves garlic, minced',
      '1 teaspoon salt',
      '1/2 teaspoon black pepper',
      '1 teaspoon Italian seasoning',
      '2 tablespoons lemon juice',
    ],
    instructions: [
      'Bring a large pot of salted water to a boil and cook the pasta according to package directions until al dente, then drain and set aside.',
      'While the pasta cooks, pat the chicken breasts dry with paper towels and season both sides with salt, pepper, and Italian seasoning.',
      'Heat the olive oil in a large skillet over medium-high heat and cook the chicken for 6–7 minutes per side until golden and cooked through, then transfer to a cutting board and slice into bite-sized pieces.',
      'In the same skillet, add the minced garlic and cook for about 1 minute until fragrant.',
      'Add the sun-dried tomatoes and fresh spinach to the skillet, stirring until the spinach is wilted, about 2–3 minutes.',
      'Return the sliced chicken to the skillet and toss with the spinach and sun-dried tomato mixture.',
      'Add the cooked pasta to the skillet and toss everything together to combine.',
      'Drizzle the lemon juice over the pasta and chicken, toss again, and adjust seasoning with salt and pepper to taste.',
      'Serve hot and enjoy this light Tuscan-inspired pasta dish.',
    ],
  }} />
}
