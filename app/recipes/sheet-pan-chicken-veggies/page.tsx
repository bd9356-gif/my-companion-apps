import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Easy Weeknight Sheet Pan Chicken and Veggies — Chef Jen | MyRecipe Companion',
  description: 'A fuss-free one-pan dinner that comes together in under 30 minutes with minimal prep and cleanup.',
  openGraph: { title: 'Sheet Pan Chicken and Veggies — Created by Chef Jen', description: 'One-pan dinner ready in under 30 minutes.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301155111-lwln9gta79.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Easy Weeknight Sheet Pan Chicken and Veggies',
    description: 'A fuss-free one-pan dinner that comes together in under 30 minutes with minimal prep and cleanup.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301155111-lwln9gta79.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/F7E1EC02-1620-4CB2-B922-EF86D9FC9AE8',
    ingredients: ['4 chicken breasts (about 6 oz each)','3 cups broccoli florets','2 medium zucchini, sliced','3 tablespoons olive oil','3 cloves garlic, minced','1 teaspoon salt','½ teaspoon black pepper','1 teaspoon dried oregano','2 tablespoons lemon juice'],
    instructions: ['Preheat your oven to 400°F.','Pat the chicken breasts dry with paper towels and place them on a large sheet pan.','In a bowl, toss the broccoli and zucchini with olive oil, garlic, salt, pepper, and oregano.','Arrange the seasoned vegetables around the chicken on the sheet pan.','Drizzle the chicken with lemon juice and season with a pinch of salt and pepper.','Roast everything for 25–30 minutes until the chicken is cooked through and vegetables are tender and lightly caramelized.','Serve hot straight from the pan with rice, pasta, or crusty bread if desired.'],
  }} />
}
