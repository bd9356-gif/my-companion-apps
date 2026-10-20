'use client'

// Promotional cards shown right after a recipe (approved copy — do not reword):
//   1. ❤️ Meet Chef Jen (primary)      → /meet-chef-jen        GA4: meet_chef_jen_click
//   2. 🍳 Come Cook With Us! (secondary) → Facebook group        GA4: chef_jen_group_click
//   3. 💡 Recipe Import Tip (quiet, informational)
// The app's recipe share page (recipe.mycompanionapps.com/share/[id]) carries the
// same three cards.

import Link from 'next/link'
import { FACEBOOK_GROUP_URL, FACEBOOK_GROUP_NAME, trackEvent, openFacebookGroup } from '@/lib/community'

const sans = 'system-ui, -apple-system, sans-serif'

export default function RecipeTips({ slug }: { slug: string }) {
  return (
    <div style={{ display: 'grid', gap: 14, margin: '36px 0 0' }}>

      {/* 1 — Primary */}
      <Link
        href="/meet-chef-jen"
        onClick={() => trackEvent('meet_chef_jen_click', { source_type: 'recipe_page', source_recipe_slug: slug, transport_type: 'beacon' })}
        style={{ display: 'block', textDecoration: 'none', backgroundColor: '#FEF3E8', border: '2px solid #C8401A', borderRadius: 16, padding: '22px 22px' }}
      >
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#2C1810', margin: '0 0 8px' }}>❤️ Meet Chef Jen</p>
        <p style={{ fontFamily: sans, fontSize: 16, color: '#3C2415', lineHeight: 1.6, margin: 0 }}>
          Need dinner inspiration? Have ingredients but no plan? Chef Jen in MyRecipe Companion helps turn what you have into a meal you’ll love.{' '}
          <span style={{ color: '#C8401A', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>Come see what she can do.</span>
        </p>
      </Link>

      {/* 2 — Secondary */}
      {FACEBOOK_GROUP_URL && (
        <div style={{ backgroundColor: 'white', border: '1px solid #F0EBE3', borderRadius: 14, padding: '18px 20px' }}>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: '#2C1810', margin: '0 0 6px' }}>🍳 Come Cook With Us!</p>
          <p style={{ fontFamily: sans, fontSize: 15, color: '#3C2415', lineHeight: 1.6, margin: 0 }}>
            Enjoyed this recipe? Join{' '}
            <a
              href={FACEBOOK_GROUP_URL}
              onClick={(e) => { trackEvent('chef_jen_group_click', { transport_type: 'beacon', source_page: window.location.pathname, source_type: 'recipe_page', cta_location: 'recipe_tip', source_recipe_slug: slug }); openFacebookGroup(e) }}
              style={{ color: '#C8401A', fontWeight: 600 }}
            >
              {FACEBOOK_GROUP_NAME}
            </a>{' '}
            on Facebook for more recipes, cooking tips, and dinner ideas.
          </p>
        </div>
      )}

      {/* 3 — Supporting tip (quiet) */}
      <p style={{ fontFamily: sans, fontSize: 14, color: '#78716C', lineHeight: 1.6, margin: '2px 4px 0' }}>
        💡 <strong style={{ color: '#5C4A3A' }}>Recipe Import Tip</strong><br />
        Want to save this recipe? Copy its link and paste it into your favorite recipe app that supports recipe links.
      </p>
    </div>
  )
}
