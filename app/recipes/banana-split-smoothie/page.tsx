import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Banana Split Smoothie — Chef Jen | MyRecipe Companion',
  description: 'A creamy, dessert-inspired smoothie that captures all the classic flavors of a banana split in every sip.',
  openGraph: { title: 'Banana Split Smoothie — Created by Chef Jen', description: 'All the flavors of a banana split in smoothie form.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788735532783-h3ta8up6uk.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Banana Split Smoothie',
    description: 'A creamy, dessert-inspired smoothie that captures all the classic flavors of a banana split in every delicious sip.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788735532783-h3ta8up6uk.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/E8B1A60F-EC92-40C5-8F48-585EC829D056',
    ingredients: ['1 frozen banana','1 cup frozen strawberries','½ cup Greek yogurt','½ cup milk','1 tablespoon cocoa powder','1 tablespoon peanut butter','1 teaspoon maple syrup','1 teaspoon vanilla extract','Dark chocolate shavings for topping'],
    instructions: ['Add the frozen banana, frozen strawberries, Greek yogurt, milk, cocoa powder, peanut butter, maple syrup, and vanilla extract to a blender.','Blend on high speed until thick and smooth.','Drizzle chocolate syrup around the inside of a tall glass in a spiral pattern.','Pour the smoothie into the prepared glass.','Top with a generous dollop of Greek yogurt.','Arrange fresh banana slices and strawberry halves on top.','Finish with dark chocolate shavings sprinkled over the top.','Serve immediately with a spoon and straw.'],
  }} />
}
