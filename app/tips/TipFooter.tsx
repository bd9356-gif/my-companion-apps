'use client'

// Footer after a Chef Jen tip (Nov 2026): one invitation — More Than Recipes, one button to the
// MyRecipe Companion product page (same tab). Same wording and design as the shared recipe and
// tip pages on recipe.mycompanionapps.com. Replaces the earlier three links (more tips, dinner
// idea, Facebook group).
// GA4: myrecipe_homepage_click with cta_location more_than_recipes_footer and source_type chef_jen_tip.

import { trackEvent } from '@/lib/community'

const MYRECIPE_HOME_URL = '/myrecipe'
const sans = 'system-ui, sans-serif'

export default function TipFooter({ tipTitle }: { tipTitle: string }) {
  const onClick = () =>
    trackEvent('myrecipe_homepage_click', {
      cta_location: 'more_than_recipes_footer',
      source_type: 'chef_jen_tip',
      source_page: window.location.pathname,
      tip_title: tipTitle,
      destination_url: 'https://mycompanionapps.com/myrecipe',
      transport_type: 'beacon',
    })

  return (
    <footer style={{ marginTop: 16, paddingTop: 32, borderTop: '1px solid #F0EBE3', textAlign: 'center' }}>
      <h2 style={{ fontSize: 30, fontWeight: 700, color: '#2C1810', margin: 0, lineHeight: 1.2 }}>More Than Recipes</h2>
      <p style={{ fontFamily: sans, fontSize: 16, color: '#5C4A3A', lineHeight: 1.6, margin: '8px 0 20px' }}>
        Experience the future of home cooking with AI Chef&nbsp;Jen.
      </p>
      <a
        href={MYRECIPE_HOME_URL}
        onClick={onClick}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 52, boxSizing: 'border-box', padding: '12px 28px', borderRadius: 14, backgroundColor: '#C8401A', color: '#FFFFFF', textDecoration: 'none', fontFamily: sans, fontSize: 17, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.3)' }}
      >
        Explore MyRecipe Companion&nbsp;→
      </a>
    </footer>
  )
}
