import type { Metadata } from 'next'
import RecipePage from '../RecipePage'

export const metadata: Metadata = {
  title: 'Marinated Grilled Chicken Spiedini — Chef Jen | MyRecipe Companion',
  description: 'Tender chicken marinated in a vibrant Mediterranean blend of lemon, vinegar, and herbs, perfect for grilling or pan-searing. Created by Chef Jen.',
  openGraph: {
    title: 'Marinated Grilled Chicken Spiedini — Created by Chef Jen',
    description: 'Tender chicken marinated in a vibrant Mediterranean blend of lemon, vinegar, and herbs.',
    images: ['https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787267562906-ag88lr39y38.jpg'],
    type: 'article',
    siteName: 'MyRecipe Companion',
  },
}

export default function Page() {
  return <RecipePage recipe={{
    title: 'Marinated Grilled Chicken Spiedini',
    description: 'Tender chicken marinated in a vibrant Mediterranean blend of lemon, vinegar, and herbs, perfect for grilling or pan-searing.',
    photo: 'https://epgtahifcphwjifxmxst.supabase.co/storage/v1/object/public/personal_recipes/recipe-photos/1787267562906-ag88lr39y38.jpg',
    category: 'Chicken',
    shareUrl: 'https://recipe.mycompanionapps.com/share/F53AF4C3-0F5D-4EE0-ABDA-4AA699B4A5FE',
    ingredients: [
      '2 chicken breasts (about 6 oz each)',
      '1/3 cup olive oil',
      '1/4 cup fresh lemon juice',
      '1/4 cup white vinegar',
      '2 garlic cloves, pressed',
      '1 tablespoon fresh parsley, chopped',
      '1 tablespoon dried oregano',
      '1/2 teaspoon garlic salt',
      '1/2 teaspoon salt',
      '1/2 teaspoon black pepper',
    ],
    instructions: [
      'In a bowl, whisk together the olive oil, lemon juice, white vinegar, pressed garlic, parsley, oregano, garlic salt, salt, and black pepper to create the marinade.',
      'Place the chicken breasts in a shallow dish or resealable bag and pour the marinade over them, ensuring they are fully coated.',
      'Cover the dish or seal the bag and refrigerate for at least 2 hours, or up to overnight, for maximum flavor.',
      'Remove the chicken from the refrigerator about 15 minutes before cooking to bring it closer to room temperature.',
      'Heat a large skillet or grill to medium-high heat and lightly oil the surface.',
      'Remove the chicken from the marinade, allowing excess liquid to drip off, and reserve the marinade for basting.',
      'Cook the chicken for 6–7 minutes on the first side without moving it until golden brown.',
      'Flip the chicken and cook for another 5–6 minutes on the second side until cooked through.',
      'Baste the chicken with the reserved marinade during the last minute of cooking for extra flavor.',
      'Transfer the cooked chicken to a serving plate and let it rest for 2–3 minutes before serving.',
    ],
  }} />
}
