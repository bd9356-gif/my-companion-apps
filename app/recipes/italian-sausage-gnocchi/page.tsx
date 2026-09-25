import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'One Pan Italian Sausage Gnocchi — Chef Jen | MyRecipe Companion',
  description: 'Creamy one-pan Italian sausage gnocchi ready in 25 minutes — weeknight dinner sorted.',
  openGraph: { title: 'One Pan Italian Sausage Gnocchi — Created by Chef Jen', description: 'Creamy Italian sausage gnocchi ready in 25 minutes.', images: ['https://skinnyspatula.com/wp-content/uploads/2023/08/One_Pan_Italian_Sausage_Gnocchi_0-720x720.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'One Pan Italian Sausage Gnocchi',
    description: 'A creamy one-pan Italian sausage gnocchi ready in 25 minutes — weeknight dinner sorted.',
    photo: 'https://skinnyspatula.com/wp-content/uploads/2023/08/One_Pan_Italian_Sausage_Gnocchi_0-720x720.jpg',
    category: 'Crowd-Pleaser Classics',
    shareUrl: 'https://recipe.mycompanionapps.com/share/69C7C314-2979-4634-A065-804684817984',
    ingredients: ['1 tablespoon olive oil','1 medium onion, finely diced','1 lb Italian sausage, casings removed','2 garlic cloves, minced','1 teaspoon dried oregano','1/2 teaspoon dried basil','1/2 teaspoon dried thyme','1/4 teaspoon red chili flakes','1/3 cup dry white wine','14 oz tomato sauce (passata)','1/2 cup heavy cream','1 pack (16 oz) fresh gnocchi','1/3 cup grated Parmesan','Fresh basil leaves','Salt and pepper to taste'],
    instructions: ['Heat the olive oil in a large frying pan over medium heat.','Add the finely diced onion and cook for 3-5 minutes until translucent.','Add the Italian sausage with casings removed, breaking it apart with a wooden spoon, and cook until well-browned.','Stir in the garlic, oregano, basil, thyme, and red chili flakes, and sauté for about a minute until fragrant.','Pour in the dry white wine, scrape the bottom of the pan, and allow the wine to reduce for a couple of minutes.','Add the tomato sauce, stir everything together, and bring to a simmer.','Lower the heat, stir in the heavy cream, add the fresh gnocchi, cover the pan, and simmer for about 5 minutes until the gnocchi is cooked.','Stir in the Parmesan and basil, then season to taste.','Serve immediately with extra Parmesan and fresh basil on top.'],
  }} />
}
