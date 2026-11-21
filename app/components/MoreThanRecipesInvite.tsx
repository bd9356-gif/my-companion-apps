'use client'

// One invitation after a recipe or Chef Jen tip (Nov 2026): what the visitor came for comes
// first; then one message, one button, one destination — the MyRecipe Companion product page
// (same tab). Same wording and design as the shared recipe and tip pages on
// recipe.mycompanionapps.com.
// GA4: myrecipe_homepage_click with cta_location more_than_recipes_footer, the page type
// (source_type) and the recipe slug or tip title, so recipe → product and tip → product can be compared.

import { trackEvent } from '@/lib/community'

const sans = 'system-ui, sans-serif'

export default function MoreThanRecipesInvite({ sourceType, params = {} }: { sourceType: string; params?: Record<string, string> }) {
  const onClick = () =>
    trackEvent('myrecipe_homepage_click', {
      cta_location: 'more_than_recipes_footer',
      source_type: sourceType,
      source_page: window.location.pathname,
      destination_url: 'https://mycompanionapps.com/myrecipe',
      transport_type: 'beacon',
      ...params,
    })

  return (
    <footer style={{ marginTop: 16, paddingTop: 32, borderTop: '1px solid #F0EBE3', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 700, color: '#2C1810', margin: 0, lineHeight: 1.2 }}>More Than Recipes</h2>
      <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', lineHeight: 1.6, margin: '8px 0 20px' }}>
        Experience the future of home cooking with AI Chef&nbsp;Jen.
      </p>
      <a
        href="/myrecipe"
        onClick={onClick}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 52, boxSizing: 'border-box', padding: '12px 28px', borderRadius: 14, backgroundColor: '#C8401A', color: '#FFFFFF', textDecoration: 'none', fontFamily: sans, fontSize: 17, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}
      >
        Explore MyRecipe Companion&nbsp;→
      </a>
    </footer>
  )
}
