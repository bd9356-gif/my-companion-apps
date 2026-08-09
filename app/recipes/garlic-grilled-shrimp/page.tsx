import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Garlic Grilled Shrimp — Chef Jen | MyRecipe Companion',
  description: 'Succulent shrimp infused with garlic and smoky spices, quickly grilled to perfection for a restaurant-quality dish that\'s ready in minutes. Created by Chef Jen.',
  openGraph: {
    title: 'Garlic Grilled Shrimp — Created by Chef Jen',
    description: 'Succulent shrimp infused with garlic and smoky spices, quickly grilled to perfection.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1782225884651-nxf7oemu1kn.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Garlic Grilled Shrimp',
    description: 'Succulent shrimp infused with garlic and smoky spices, quickly grilled to perfection for a restaurant-quality dish that\'s ready in minutes.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1782225884651-nxf7oemu1kn.jpg',
    category: 'Seafood',
    shareUrl: 'https://recipe.mycompanionapps.com/share/4E44CB58-3A8C-4EE2-84E5-5C8597F72D90',
    ingredients: [
      '1.5 lbs large shrimp, peeled and deveined',
      '6 garlic cloves, minced',
      '3 tablespoons olive oil',
      '1 teaspoon smoked paprika',
      '1/2 teaspoon ground cumin',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1/4 cup fresh cilantro, chopped',
      '1 lime, cut into wedges',
    ],
    instructions: [
      'Preheat your grill or grill pan to medium-high heat.',
      'Pat the shrimp dry with paper towels to ensure they cook evenly.',
      'In a bowl, combine minced garlic, olive oil, smoked paprika, cumin, salt, and pepper.',
      'Add the shrimp to the garlic mixture and toss gently until all pieces are well coated.',
      'Thread the shrimp onto skewers or place directly on the grill grates.',
      'Grill the shrimp for 2-3 minutes on the first side without moving them.',
      'Flip the shrimp and grill for another 2-3 minutes until they are pink and cooked through.',
      'Transfer the grilled shrimp to a serving platter.',
      'Sprinkle fresh cilantro over the shrimp while still hot.',
      'Serve immediately with lime wedges on the side for squeezing over the shrimp.',
    ],
  }} />
}
