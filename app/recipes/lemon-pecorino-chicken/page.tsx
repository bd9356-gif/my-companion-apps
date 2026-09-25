import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Lemon Pecorino Crusted Chicken — Chef Jen | MyRecipe Companion',
  description: 'Golden-crusted chicken with a silky lemon cream sauce — indulgent yet quick enough for any weeknight.',
  openGraph: { title: 'Lemon Pecorino Crusted Chicken — Created by Chef Jen', description: 'Golden-crusted chicken with a silky lemon cream sauce.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790366538582-a07lanj2fr.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Lemon Pecorino Crusted Chicken with Creamy Lemon Sauce',
    description: 'Golden-crusted chicken with a silky lemon cream sauce — indulgent yet quick enough for any weeknight.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790366538582-a07lanj2fr.jpg',
    category: 'Crowd-Pleaser Classics',
    shareUrl: 'https://recipe.mycompanionapps.com/share/A0456CE5-C6FC-4DE2-A114-EB839DD09BD3',
    ingredients: ['4 boneless, skinless chicken breasts','Salt and pepper to taste','1/2 cup all-purpose flour','2 eggs, beaten','1 cup panko breadcrumbs','1/2 cup grated Pecorino Romano','1 tablespoon lemon zest','2 tablespoons olive oil','4 tablespoons butter, divided','3 cloves garlic, minced','1 cup heavy cream','1/4 cup chicken broth','1/4 cup lemon juice','1 teaspoon lemon zest (for sauce)','1/4 cup grated Pecorino Romano (for sauce)','Fresh parsley, optional'],
    instructions: ['Flatten chicken breasts to even thickness using a meat mallet between parchment paper.','Season both sides with salt and pepper.','Set up breading stations: one plate with flour, one with beaten eggs, one with a mix of panko, Pecorino, and lemon zest.','Coat each chicken breast in flour, then egg, then press into the breadcrumb mixture until fully coated.','Heat olive oil and 2 tablespoons butter in a skillet over medium heat.','Cook chicken for 4–5 minutes per side until golden brown and fully cooked through.','Transfer to a paper towel-lined plate.','In the same pan, melt the remaining butter and sauté garlic for 1 minute until fragrant.','Add heavy cream, chicken broth, lemon juice, lemon zest, and Pecorino.','Simmer 4–5 minutes until the sauce thickens.','Season sauce with salt and pepper to taste.','Serve chicken topped with the creamy lemon sauce and garnish with fresh parsley.'],
  }} />
}
