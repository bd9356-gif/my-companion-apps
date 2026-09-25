import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Shrimp Scampi — Chef Jen | MyRecipe Companion',
  description: 'Succulent garlic and white wine shrimp over pasta or crusty bread.',
  openGraph: { title: 'Shrimp Scampi — Created by Chef Jen', description: 'Succulent garlic and white wine shrimp over pasta or crusty bread.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790181603177-1mgxljd5d22.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Shrimp Scampi',
    description: 'Succulent garlic and white wine shrimp over pasta or crusty bread.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790181603177-1mgxljd5d22.jpg',
    category: 'Crowd-Pleaser Classics',
    shareUrl: 'https://recipe.mycompanionapps.com/share/0EDBAE0C-7AB1-4101-A95E-06EEEFADB696',
    ingredients: ['1 pound large shrimp, peeled and deveined','4 tablespoons butter','2 tablespoons olive oil','6 garlic cloves, minced','½ cup dry white wine','3 tablespoons fresh lemon juice','¼ teaspoon red pepper flakes','Salt and black pepper to taste','¼ cup fresh parsley, chopped','Pasta or crusty bread for serving'],
    instructions: ['Heat butter and olive oil in a large skillet over medium-high heat.','Add minced garlic and red pepper flakes, stirring constantly for about 1 minute until fragrant.','Add the shrimp to the skillet in a single layer and cook for 2 minutes without stirring.','Flip the shrimp and cook for another 1-2 minutes until they start to turn pink.','Pour in the white wine and lemon juice, scraping up any browned bits from the bottom of the pan.','Season with salt and pepper to taste, then simmer for 2-3 minutes until the shrimp are fully cooked and pink throughout.','Stir in the fresh parsley and remove from heat.','Serve immediately over cooked pasta or with crusty bread for dipping in the sauce.'],
  }} />
}
