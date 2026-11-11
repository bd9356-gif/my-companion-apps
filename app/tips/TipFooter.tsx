'use client'

// Footer after a Chef Jen tip: exactly three next steps. "Find Your Next Dinner Idea" goes to the
// MyRecipe Companion homepage (/myrecipe). Left-aligned, no boxes (same style as the shared-recipe footer).
// GA4: learn_more_click, myrecipe_homepage_click, chef_jen_group_click.

import Link from 'next/link'
import { trackEvent, openFacebookGroup } from '@/lib/community'

const FACEBOOK_GROUP_SHARE_URL = 'https://www.facebook.com/share/g/19wjF8WYr7/?mibextid=wwXIfr'
const CHARCOAL = '#292929'
const sans = 'system-ui, sans-serif'

const heading = (color: string): React.CSSProperties => ({ fontFamily: sans, fontSize: 19, fontWeight: 600, lineHeight: 1.35, color, textDecoration: 'underline', textUnderlineOffset: 4 })
const body: React.CSSProperties = { fontFamily: sans, fontSize: 16, lineHeight: 1.6, color: CHARCOAL, margin: '4px 0 0' }

export default function TipFooter({ tipTitle }: { tipTitle: string }) {
  const track = (name: string, params: Record<string, string>) =>
    trackEvent(name, { transport_type: 'beacon', source_page: window.location.pathname, source_type: 'chef_jen_tip', tip_title: tipTitle, ...params })

  return (
    <footer style={{ textAlign: 'left', marginTop: 8 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <section>
          <Link href="/tips" onClick={() => track('learn_more_click', { cta_location: 'tip_footer', destination_url: '/tips' })} style={heading('#5F8A70')}>
            👩‍🍳 More Chef Jen Kitchen Tips →
          </Link>
          <p style={body}>Cooking made easier.</p>
        </section>

        <section>
          <Link href="/myrecipe" onClick={() => track('myrecipe_homepage_click', { cta_location: 'tip_footer_dinner_idea' })} style={heading('#557FA3')}>
            🍽️ Find Your Next Dinner Idea →
          </Link>
          <p style={body}>What’s for dinner tonight?</p>
        </section>

        <section>
          <a
            href={FACEBOOK_GROUP_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { track('chef_jen_group_click', { cta_location: 'tip_footer' }); openFacebookGroup(e) }}
            style={heading('#262626')}
          >
            👥 Join What’s for Dinner? with Chef Jen →
          </a>
          <p style={body}>Join the conversation.</p>
        </section>
      </div>
    </footer>
  )
}
