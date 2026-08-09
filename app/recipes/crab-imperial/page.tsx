import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Crab Imperial — Chef Jen | MyRecipe Companion',
  description: 'A classic Maryland dish of lump crab meat baked in a creamy, savory sauce topped with crispy breadcrumbs. Created by Chef Jen.',
  openGraph: {
    title: 'Crab Imperial — Created by Chef Jen',
    description: 'A classic Maryland dish of lump crab meat baked in a creamy, savory sauce topped with crispy breadcrumbs.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786142165339-oxhd0b3576m.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Crab Imperial',
    description: 'A classic Maryland dish of lump crab meat baked in a creamy, savory sauce topped with crispy breadcrumbs.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786142165339-oxhd0b3576m.jpg',
    category: 'Seafood',
    shareUrl: 'https://recipe.mycompanionapps.com/share/4E3B8EBF-C937-41BD-A214-9CF2AE9B85A4',
    ingredients: [
      '1 pound lump crab meat',
      '1/2 cup mayonnaise',
      '1 tablespoon whole grain mustard',
      '1/2 teaspoon Worcestershire sauce',
      '1/4 teaspoon Old Bay seasoning',
      '1/8 teaspoon cayenne pepper',
      'Salt and black pepper to taste',
      '1 egg yolk',
      '1/2 cup panko breadcrumbs',
      '2 tablespoons butter',
      'Pinch of paprika',
    ],
    instructions: [
      'Preheat your oven to 375°F.',
      'Pick through the crab meat gently to remove any shell pieces, keeping the lumps as intact as possible.',
      'In a bowl, whisk together the mayonnaise, whole grain mustard, Worcestershire sauce, Old Bay seasoning, cayenne pepper, salt, and black pepper.',
      'Stir in the egg yolk until the mixture is smooth and well combined.',
      'Gently fold the crab meat into the sauce, being careful not to break up the lumps.',
      'Divide the mixture evenly into crab shells or individual baking dishes.',
      'In a small bowl, toss the panko breadcrumbs with melted butter until evenly coated.',
      'Sprinkle the buttered breadcrumbs generously over each portion of crab imperial.',
      'Dust lightly with paprika for color and flavor.',
      'Bake for 12 to 15 minutes until the top is golden brown and the filling is heated through.',
      'Remove from the oven and let cool for 1 minute before serving.',
    ],
  }} />
}
