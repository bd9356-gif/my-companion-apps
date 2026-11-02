// More Than Recipes — presentation & showroom settings (edit here).

/** Seconds each presentation slide shows before moving on by itself. */
export const SLIDE_SECONDS = 5

/** The four introduction slides, in order. Images: public/more-than-recipes/. */
export const SLIDES = [
  { n: 1, img: 'slide-1', alt: 'Imagine having your own chef and cooking teacher right in your kitchen.' },
  { n: 2, img: 'slide-2', alt: 'It’s more than a recipe app. It’s a conversation about cooking. “What can I make tonight with chicken, a few veggies, and some pasta?” Chef Jen: “Great! Let’s make a quick, flavorful dinner the whole family will love!”' },
  { n: 3, img: 'slide-3', alt: 'From a conversation to a recipe you can actually cook: a complete recipe, ingredients and steps, ready in minutes.' },
  { n: 4, img: 'slide-4', alt: 'Wonder what else Chef Jen can do? MyRecipe Companion — More Than Recipes. Explore More. Simple. Helpful. Human.' },
]

/** Where the "Explore More →" button sits on slide 4, as % of the picture. */
export const EXPLORE_MORE_HOTSPOT = { left: 22, top: 79, width: 56, height: 14 }

/**
 * The six booths, in order. `href` is where the cover goes; null = not ready yet
 * (the cover shows but isn't a link, so nobody lands on a missing page).
 * Connect a booth later by setting its href, e.g. '/more-than-recipes/talk'.
 */
export const BOOTHS: { id: string; img: string; alt: string; href: string | null }[] = [
  { id: 'talk_to_chef_jen', img: 'talk', alt: 'Talk to Chef Jen — cooking questions, ideas, substitutions, and help.', href: null },
  { id: 'create_a_recipe', img: 'create', alt: 'Create a Recipe — turn an idea or restaurant dish into a recipe.', href: null },
  { id: 'cooking_school', img: 'cooking-school', alt: 'Cooking School — learn, practice, videos, and keep your notes.', href: null },
  { id: 'recipe_vault', img: 'recipe-vault', alt: 'Recipe Vault — find, import, and organize your recipes.', href: null },
  { id: 'recipe_box', img: 'recipe-box', alt: 'Recipe Box — preserve family recipes and memories.', href: null },
  { id: 'plan_your_meals', img: 'plan-meals', alt: 'Plan Your Meals — dinner ideas, shopping lists, and everyday planning.', href: null },
]
