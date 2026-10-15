'use client'

// Two small tips shown right after a recipe: how to import it into a recipe app,
// and an invite to Chef Jen's Facebook group (GA4: chef_jen_group_click).

import { FACEBOOK_GROUP_URL, FACEBOOK_GROUP_NAME, trackEvent } from '@/lib/community'

const sans = 'system-ui, -apple-system, sans-serif'
const box: React.CSSProperties = {
  backgroundColor: '#FFFBF5', border: '1px solid #F0EBE3', borderRadius: 12,
  padding: '14px 16px', fontFamily: sans, fontSize: 15, color: '#3C2415', lineHeight: 1.6,
}

export default function RecipeTips({ slug }: { slug: string }) {
  return (
    <div style={{ display: 'grid', gap: 12, margin: '32px 0 0' }}>
      <p style={{ ...box, margin: 0 }}>
        💡 <strong>Recipe Import Tip:</strong> Copy the recipe link from your browser, or tap Share → Copy Link on your phone. Then paste it into the import feature of your favorite recipe app that supports recipe links.
      </p>
      {FACEBOOK_GROUP_URL && (
        <p style={{ ...box, margin: 0 }}>
          💡 <strong>Facebook Tip:</strong> Enjoy this recipe? Join{' '}
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('chef_jen_group_click', { source_page: window.location.pathname, source_type: 'recipe_page', cta_location: 'recipe_tip', source_recipe_slug: slug })}
            style={{ color: '#C8401A', fontWeight: 600 }}
          >
            {FACEBOOK_GROUP_NAME}
          </a>{' '}
          on Facebook for more recipes, cooking tips, and ideas for what to make tonight.
        </p>
      )}
    </div>
  )
}
