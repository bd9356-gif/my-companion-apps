import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Linguine Puttanesca — Chef Jen | MyRecipe Companion',
  description: 'A bold and briny Italian pasta with olives, capers, anchovies, and tomatoes.',
  openGraph: { title: 'Linguine Puttanesca — Created by Chef Jen', description: 'Bold and briny Italian pasta with olives, capers, and anchovies.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1789744616305-bbrv726qrn.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Linguine Puttanesca',
    description: 'A bold and briny Italian pasta with olives, capers, anchovies, and tomatoes.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1789744616305-bbrv726qrn.jpg',
    category: 'Crowd-Pleaser Classics',
    shareUrl: 'https://recipe.mycompanionapps.com/share/A3D8D3CE-8902-48D4-B818-4B516E8ADFAB',
    ingredients: ['1 pound linguine','1 can (28 ounces) crushed tomatoes','1 cup kalamata olives, pitted','3 tablespoons capers, drained','4 anchovy fillets','4 cloves garlic, minced','3 tablespoons olive oil','1/2 teaspoon red pepper flakes','2 tablespoons fresh parsley, chopped','Salt and black pepper to taste'],
    instructions: ['Bring a large pot of salted water to a boil and cook the linguine until al dente.','While the pasta cooks, heat olive oil in a large skillet over medium heat.','Add the minced garlic and red pepper flakes and cook for about 1 minute until fragrant.','Stir in the anchovy fillets and cook for 2 minutes, breaking them apart until they dissolve into the oil.','Add the crushed tomatoes and simmer for 5 minutes.','Stir in the kalamata olives and capers, then simmer for another 3 minutes.','Season with salt and black pepper as needed.','Drain the cooked linguine and add it to the skillet.','Toss the pasta with the sauce until well coated.','Divide among serving bowls and garnish with fresh parsley.'],
  }} />
}
