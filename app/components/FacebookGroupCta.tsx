'use client'

// Low-commitment close: join Chef Jen's Facebook group. Renders nothing until
// FACEBOOK_GROUP_URL is set in lib/community.ts.

import { FACEBOOK_GROUP_URL, FACEBOOK_GROUP_NAME, trackEvent } from '@/lib/community'

type Props = {
  variant: 'collection' | 'tip'
  sourceType: 'recipe_collection' | 'chef_jen_tip'
  ctaLocation: string
  fullWidthInGrid?: boolean
}

export default function FacebookGroupCta({ variant, sourceType, ctaLocation, fullWidthInGrid }: Props) {
  if (!FACEBOOK_GROUP_URL) return null
  const big = variant === 'collection'
  const heading = big ? '🍳 Still looking for dinner ideas?' : '👩‍🍳 Like Chef Jen’s cooking tips?'
  const body = big
    ? 'Recipes, cooking tips, questions and ideas from people who love to cook.'
    : 'Share what you’re cooking, ask questions and get more helpful cooking ideas.'

  return (
    <div style={{ ...(fullWidthInGrid ? { gridColumn: '1 / -1' } : {}), backgroundColor: '#FEF3E8', border: '1px solid #F5D9C0', borderRadius: 16, padding: big ? '28px 24px' : '20px 22px', textAlign: 'center', margin: big ? 0 : '0 0 32px' }}>
      <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: big ? 15 : 14, color: '#78716C', margin: '0 0 6px' }}>{heading}</p>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: big ? 22 : 18, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.3 }}>
        <a
          href={FACEBOOK_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('chef_jen_group_click', { source_page: window.location.pathname, source_type: sourceType, cta_location: ctaLocation })}
          style={{ color: '#C8401A', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationThickness: 2 }}
        >
          Join {FACEBOOK_GROUP_NAME} {'→'}
        </a>
      </h3>
      <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: 14, color: '#78716C', margin: '0 auto', maxWidth: 440, lineHeight: 1.6 }}>{body}</p>
    </div>
  )
}
