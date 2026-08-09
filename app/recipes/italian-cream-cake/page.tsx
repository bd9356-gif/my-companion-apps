import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Italian Cream Cake — Chef Jen | MyRecipe Companion',
  description: 'A rich, decadent layer cake with cream cheese frosting, coconut, and pecans that\'s pure indulgence. Created by Chef Jen.',
  openGraph: {
    title: 'Italian Cream Cake — Created by Chef Jen',
    description: 'A rich, decadent layer cake with cream cheese frosting, coconut, and pecans.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301424971-7h0y4vp4uaw.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Italian Cream Cake',
    description: 'A rich, decadent layer cake with cream cheese frosting, coconut, and pecans that\'s pure indulgence.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1786301424971-7h0y4vp4uaw.jpg',
    category: 'Dessert',
    shareUrl: 'https://recipe.mycompanionapps.com/share/0245A011-AE9E-461C-A81B-F217E345470A',
    ingredients: [
      '2 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1/2 teaspoon salt',
      '1/2 cup butter, softened',
      '1/2 cup vegetable oil',
      '2 cups granulated sugar',
      '5 large eggs',
      '1 cup buttermilk',
      '1 teaspoon vanilla extract',
      '1 cup sweetened shredded coconut',
      '1 cup chopped pecans',
      '1 pound cream cheese, softened (for frosting)',
      '1/2 cup butter, softened (for frosting)',
      '4 cups powdered sugar',
      '1 teaspoon vanilla extract (for frosting)',
    ],
    instructions: [
      'Preheat your oven to 350°F and grease three 9-inch round cake pans.',
      'Whisk together flour, baking soda, and salt in a medium bowl.',
      'Beat softened butter and oil together until combined, then gradually add sugar and beat until fluffy.',
      'Add eggs one at a time, beating well after each addition.',
      'Alternately add flour mixture and buttermilk, beginning and ending with flour, and mix until just combined.',
      'Stir in vanilla extract, coconut, and pecans until evenly distributed.',
      'Divide batter equally among prepared pans and bake for 25-30 minutes until a toothpick inserted in the center comes out clean.',
      'Cool the cakes in pans for 10 minutes, then turn out onto wire racks to cool completely.',
      'Beat cream cheese and butter together until smooth and creamy for the frosting.',
      'Gradually add powdered sugar and vanilla extract, beating until the frosting reaches a spreadable consistency.',
      'Place the first cake layer on a serving plate and spread frosting over the top.',
      'Stack remaining layers with frosting between each, then frost the top and sides of the entire cake, garnishing with toasted pecans if desired.',
    ],
  }} />
}
