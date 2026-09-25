import type { Metadata } from 'next'
import RecipePage from '../RecipePage'
export const metadata: Metadata = {
  title: 'Crispy Chicken Tacos — Chef Jen | MyRecipe Companion',
  description: 'Chicken tacos stuffed with seasoned shredded chicken and cheese, baked between two hot pans for crunch on both sides — no frying required.',
  openGraph: { title: 'Crispy Chicken Tacos — Created by Chef Jen', description: 'Baked crispy chicken tacos with no frying required.', images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790286408639-gbgudepbf9a.jpg'], type: 'article', siteName: 'MyRecipe Companion' },
}
export default function Page() {
  return <RecipePage recipe={{
    title: 'Crispy Chicken Tacos',
    description: 'Seasoned shredded chicken and cheese stuffed into tortillas, then baked between two hot pans for crunch on both sides — no frying required.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1790286408639-gbgudepbf9a.jpg',
    category: 'Everyday Favorites',
    shareUrl: 'https://recipe.mycompanionapps.com/share/AC7FC26B-E0C1-41BB-A625-3BB173F35A31',
    ingredients: ['2 cups cooked shredded chicken','1 packet taco seasoning','1 lime','8 small flour or corn tortillas (6-inch)','1 tablespoon olive oil','2 cups shredded Mexican cheese blend','Optional: chopped fresh cilantro'],
    instructions: ['Preheat the oven to 425°F. Place two same-sized rimmed baking sheets in the oven to heat up.','In a medium bowl, combine shredded chicken, taco seasoning, and lime juice. Mix well.','If using corn tortillas, wrap them in a damp towel and microwave for 20–30 seconds until warm and pliable.','Brush one side of each tortilla with oil. Flip the tortilla so the oiled side is on the bottom.','Divide the chicken and cheese over one half of each tortilla and gently fold.','Place a sheet of parchment paper onto one of the preheated baking sheets. Transfer the tacos onto the parchment. Cover with the second sheet of parchment and place the second heated baking sheet on top, pressing down lightly.','Bake for 18–22 minutes, or until the tacos are crispy and golden.','Remove from the oven and serve with desired toppings.'],
  }} />
}
