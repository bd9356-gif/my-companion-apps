import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Homemade Chicken Stock — Chef Jen | MyRecipe Companion',
  description: 'A rich, flavorful broth made by simmering a picked rotisserie chicken carcass with aromatic vegetables and herbs for hours. Created by Chef Jen.',
  openGraph: {
    title: 'Homemade Chicken Stock — Created by Chef Jen',
    description: 'A rich, flavorful broth made by simmering a rotisserie chicken carcass with aromatic vegetables and herbs.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787664257682-6weayk5v9bn.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Homemade Chicken Stock from Costco Rotisserie Carcass',
    description: 'A rich, flavorful broth made by simmering a picked rotisserie chicken carcass with aromatic vegetables and herbs for hours.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787664257682-6weayk5v9bn.jpg',
    category: 'Soups & Stocks',
    shareUrl: 'https://recipe.mycompanionapps.com/share/17EB7109-9488-42F4-B804-70EFEE5A475C',
    ingredients: [
      '1 Costco rotisserie chicken carcass (bones, skin, leftover meat scraps)',
      '1 large onion, quartered (leave skin on for color)',
      '2 carrots, cut into chunks',
      '2 celery stalks, cut into chunks',
      '4 garlic cloves, smashed',
      '2 bay leaves',
      '1 teaspoon whole black peppercorns',
      '1 small bunch fresh parsley stems',
      '10–12 cups cold water',
    ],
    instructions: [
      'Place the rotisserie chicken carcass in a large stockpot.',
      'Add the quartered onion, carrot chunks, celery chunks, and smashed garlic cloves to the pot.',
      'Add the bay leaves, black peppercorns, and fresh parsley stems.',
      'Pour the cold water over everything, making sure the carcass and vegetables are fully submerged.',
      'Bring the mixture to a boil over high heat, then immediately reduce to a gentle simmer.',
      'Skim off any foam or impurities that rise to the surface during the first few minutes.',
      'Simmer uncovered for 2–3 hours, allowing the flavors to develop and concentrate.',
      'Strain the stock through a fine-mesh sieve or cheesecloth into a clean pot, discarding the solids.',
      'Cool the stock to room temperature before storing it in the refrigerator or freezer.',
      'Skim off any solidified fat from the surface once fully chilled, if desired for a lighter broth.',
    ],
  }} />
}
