// Footer after a Chef Jen tip (Nov 2026): the one More Than Recipes invitation, shared with the
// website recipe pages and the recipe app's shared recipe and tip pages.
// GA4: myrecipe_homepage_click (cta_location more_than_recipes_footer, source_type chef_jen_tip).

import MoreThanRecipesInvite from '../components/MoreThanRecipesInvite'

export default function TipFooter({ tipTitle }: { tipTitle: string }) {
  return <MoreThanRecipesInvite sourceType="chef_jen_tip" params={{ tip_title: tipTitle }} />
}
