import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'One-Pan Italian Chicken — Chef Jen | MyRecipe Companion',
  description: 'Tender chicken thighs and roasted vegetables finished with fresh tomatoes and basil. A perfect Italian weeknight dinner. Created by Chef Jen.',
  openGraph: {
    title: 'One-Pan Italian Chicken — Created by Chef Jen',
    description: 'Tender chicken thighs and roasted vegetables finished with fresh tomatoes and basil.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1780071050898-dykhmla8tx.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'One-Pan Italian Chicken with Roasted Vegetables',
    description: 'A classic Italian weeknight dinner with tender chicken thighs and roasted vegetables finished with fresh tomatoes and basil.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1780071050898-dykhmla8tx.jpg',
    category: 'Chicken',
    shareUrl: 'https://recipe.mycompanionapps.com/share/719949F6-D1CF-419A-ABE8-C36F52A3423C',
    ingredients: [
      '1.5 lbs boneless, skinless chicken thighs',
      '1 lb baby potatoes, halved',
      '2 medium zucchini, sliced',
      '1.5 cups cherry tomatoes',
      '3 tablespoons olive oil',
      '2 tablespoons balsamic vinegar',
      '4 cloves garlic, minced',
      '1.5 teaspoons dried oregano',
      '1 teaspoon salt',
      '1/2 teaspoon black pepper',
      '1 teaspoon paprika',
      '1/4 cup fresh basil',
    ],
    instructions: [
      'Preheat your oven to 425°F.',
      'In a small bowl, whisk together balsamic vinegar, minced garlic, oregano, and 1 tbsp olive oil to create the Italian marinade.',
      'Season the chicken thighs with salt, pepper, and paprika, then add them to the marinade and toss well to coat.',
      'On a large sheet pan, toss the halved potatoes and sliced zucchini with 1 tbsp olive oil, salt, and pepper, then spread them out evenly.',
      'Roast the vegetables for 15 minutes.',
      'Remove the pan from the oven and push the vegetables to the sides, creating space in the center for the chicken.',
      'Place the marinated chicken thighs in the middle of the pan.',
      'Scatter the cherry tomatoes around the pan and drizzle everything with the remaining olive oil.',
      'Return the pan to the oven and roast for 12-15 minutes until the chicken reaches 165°F internally and vegetables are tender.',
      'Remove from the oven and let the dish rest for 5 minutes.',
      'Garnish generously with fresh basil before serving.',
    ],
  }} />
}
