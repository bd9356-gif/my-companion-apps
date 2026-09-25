import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Cheeseburger Casserole — Chef Jen | MyRecipe Companion',
  description: 'A comforting one-dish meal that combines ground beef, cheese, and pasta for classic cheeseburger flavor in casserole form.',
  openGraph: { title: 'Cheeseburger Casserole — Created by Chef Jen', description: 'Classic cheeseburger flavor in an easy one-dish casserole.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790363779869-86pjbm4sqct.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Cheeseburger Casserole',
    description: 'A comforting one-dish meal that combines ground beef, cheese, and pasta for classic cheeseburger flavor in casserole form.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790363779869-86pjbm4sqct.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/9125C52E-AB5F-4667-A290-188DFA29F6A5',
    ingredients: ['2 lbs ground beef','1 medium onion, diced','8 oz egg noodles','2 cups shredded cheddar cheese','1 cup beef broth','1/4 cup ketchup','2 tablespoons mustard','1/4 cup diced pickles','Salt and black pepper to taste','2 tablespoons butter'],
    instructions: ['Preheat your oven to 350°F.','Cook the egg noodles according to package directions, then drain and set aside.','In a large skillet, melt the butter over medium-high heat and cook the diced onion until softened, about 3 minutes.','Add the ground beef and brown completely, breaking it up as it cooks, about 5-7 minutes.','Drain excess fat from the beef if needed, then stir in the ketchup, mustard, and beef broth.','In a large casserole dish, combine the cooked noodles, beef mixture, diced pickles, and 1.5 cups of the cheddar cheese.','Season with salt and pepper and mix until well combined.','Top with the remaining 0.5 cup of cheddar cheese.','Bake uncovered for 20-25 minutes until the cheese is melted and the casserole is heated through.','Let rest for 5 minutes before serving.'],
  }} />
}
