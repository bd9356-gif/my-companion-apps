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

/** "More Than Recipes" banner at the top of the page, above the slideshow (500 × 100). */
export const BOOTHS_BANNER = { img: 'main-header', width: 500, height: 100, alt: 'More Than Recipes — See what MyRecipe Companion can do for you.' }

/** A booth video: opens in a pop-up player when the card is tapped. */
export type BoothVideo = { src: string; poster: string; width: number; height: number }

/**
 * The six booths (the "playbill"), in order. Card images are 600 × 280.
 * - `href`: the card is a link to that page.
 * - `video`: the card opens that video in a pop-up player.
 * - neither: the card shows but isn't clickable yet (nobody lands on a missing page).
 * Connect a booth later by setting its href or video.
 */
export const BOOTHS: { id: string; img: string; alt: string; href: string | null; video?: BoothVideo }[] = [
  { id: 'talk_to_chef_jen', img: 'need-help', alt: 'Need a little help in the kitchen? Talk to Chef Jen for ideas, tips, and solutions.', href: '/cooking-tips' },
  { id: 'create_a_recipe', img: 'got-recipe', alt: 'Got a recipe idea? Turn it into a recipe with Chef Jen.', href: '/show-me-how' },
  { id: 'cooking_school', img: 'want-to-cook', alt: 'Want to learn to cook? Build your skills with easy lessons, videos, and tips.', href: '/cooking-school' },
  { id: 'recipe_vault', img: 'tired-of', alt: 'Tired of losing recipes? Save, find, and organize all your favorites in one place.', href: null },
  { id: 'recipe_box', img: 'ever-lose', alt: 'Ever lose a family recipe? Preserve your recipes and the memories behind them.', href: '/recipe-box' },
  { id: 'plan_your_meals', img: 'ever-want', alt: 'Ever want to save time and money? Plan your meals, shop smarter, and get more from what you have.', href: null },
]
