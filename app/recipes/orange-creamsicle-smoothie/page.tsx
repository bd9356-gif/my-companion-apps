import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Orange Creamsicle Smoothie — Chef Jen | MyRecipe Companion',
  description: 'A nostalgic blend of creamy vanilla and bright orange that tastes like a frozen treat from childhood. Created by Chef Jen.',
  openGraph: {
    title: 'Orange Creamsicle Smoothie — Created by Chef Jen',
    description: 'A nostalgic blend of creamy vanilla and bright orange that tastes like a frozen treat from childhood.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787267242632-2t4zgzg9bv4.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Orange Creamsicle Smoothie',
    description: 'A nostalgic blend of creamy vanilla and bright orange that tastes like a frozen treat from childhood.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787267242632-2t4zgzg9bv4.jpg',
    category: 'Drinks',
    shareUrl: 'https://recipe.mycompanionapps.com/share/B90EA633-5894-4908-B77F-017DB7688165',
    ingredients: [
      '1 cup fresh orange juice',
      '1 cup vanilla yogurt',
      '1/2 cup heavy cream',
      '1 teaspoon vanilla extract',
      '2 tablespoons honey or agave syrup',
      '1 1/2 cups ice cubes',
      'Frozen orange slices for garnish (optional)',
    ],
    instructions: [
      'Add the orange juice, vanilla yogurt, heavy cream, vanilla extract, and honey to a blender.',
      'Add the ice cubes.',
      'Blend on high speed for 60 to 90 seconds, until smooth and creamy.',
      'Pour into chilled glasses, garnish with frozen orange slices if desired, and serve immediately.',
    ],
  }} />
}
