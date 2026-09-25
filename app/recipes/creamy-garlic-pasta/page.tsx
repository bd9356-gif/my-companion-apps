import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Creamy Garlic Pasta with Lemon — Chef Jen | MyRecipe Companion',
  description: 'Silky cream sauce with garlic and bright lemon tossed with pasta for an elegant yet simple weeknight dinner.',
  openGraph: { title: 'Creamy Garlic Pasta with Lemon — Created by Chef Jen', description: 'Silky garlic cream sauce with bright lemon over pasta.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788836652306-ugbghw515ui.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Creamy Garlic Pasta with Lemon',
    description: 'Silky cream sauce with garlic and bright lemon tossed with pasta for an elegant yet simple weeknight dinner.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788836652306-ugbghw515ui.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/E9A3CCF1-C35E-4C82-8527-D0815A1F47FB',
    ingredients: ['8 oz pasta (fettuccine or penne)','2 tablespoons olive oil','3 garlic cloves, minced','¾ cup heavy cream','2 tablespoons fresh lemon juice','Salt and black pepper to taste','1 tablespoon fresh parsley, chopped'],
    instructions: ['Bring a large pot of salted water to a boil and cook the pasta according to package directions.','While the pasta cooks, heat olive oil in a large skillet over medium heat.','Add minced garlic and cook for about 30 seconds until fragrant.','Pour in the heavy cream and bring to a gentle simmer.','Let the cream sauce simmer for 2–3 minutes, stirring occasionally.','Add the fresh lemon juice and stir to combine.','Season with salt and black pepper to taste.','Drain the cooked pasta and add it to the skillet.','Toss until all the noodles are evenly coated.','Cook together for 1 minute over low heat to meld the flavors.','Transfer to a serving plate and garnish with fresh parsley.','Serve immediately while hot.'],
  }} />
}
