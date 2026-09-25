import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Spaghetti Stuffed Peppers — Chef Jen | MyRecipe Companion',
  description: 'Colorful bell peppers filled with leftover spaghetti and baked until tender for an easy, comforting weeknight meal.',
  openGraph: { title: 'Spaghetti Stuffed Peppers — Created by Chef Jen', description: 'Bell peppers filled with leftover spaghetti, baked until tender.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788092848210-zwvm1y8jgkh.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Spaghetti Stuffed Peppers',
    description: 'Colorful bell peppers filled with leftover spaghetti and baked until tender for an easy, comforting weeknight meal.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1788092848210-zwvm1y8jgkh.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/D16F1E5E-AC0F-4DB6-B5E2-7FF5D2925524',
    ingredients: ['4 large bell peppers (any color)','2 cups leftover cooked spaghetti','1.5 cups leftover spaghetti sauce or marinara','1 cup shredded mozzarella cheese','1/2 cup grated Parmesan cheese','1 large egg','Salt and black pepper to taste','1 tablespoon olive oil'],
    instructions: ['Preheat your oven to 375°F.','Cut the tops off the bell peppers and remove the seeds and membranes.','Lightly brush the outside of each pepper with olive oil and place them upright in a baking dish.','In a large bowl, combine the leftover spaghetti, spaghetti sauce, mozzarella, Parmesan, and egg, then season with salt and pepper.','Fill each pepper cavity generously with the spaghetti mixture, packing it down gently.','Cover the baking dish with foil and bake for 35-40 minutes, until the peppers are tender when pierced with a fork.','Remove the foil, top each pepper with extra mozzarella if desired, and bake uncovered for another 5 minutes to melt the cheese.','Let cool for a few minutes before serving.'],
  }} />
}
