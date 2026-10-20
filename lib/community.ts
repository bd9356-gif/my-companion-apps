// Chef Jen Facebook community + GA4 helpers.
// Paste the group's URL below. Until it is set, the Facebook CTA renders nothing
// (so no dead link ever goes live).

export const FACEBOOK_GROUP_URL = 'https://m.facebook.com/groups/2143785163199218'
export const FACEBOOK_GROUP_NAME = 'What’s for Dinner? with Chef Jen'

// Inside Facebook's own built-in browser on iPhone, every group link shows "Page not found".
// There, hand the link to Safari instead (iOS 17+ x-safari-https: scheme); iOS then opens the
// group. Tested on Bill's iPhone (fb-link-test #10). Everywhere else the normal link is used.
const FACEBOOK_GROUP_VIA_SAFARI = 'x-safari-https://www.facebook.com/groups/2143785163199218'

export function openFacebookGroup(e: { preventDefault: () => void }) {
  if (typeof navigator === 'undefined') return
  const ua = navigator.userAgent
  if (/FBAN|FBAV|FB_IAB|FBIOS/.test(ua) && /iPhone|iPad|iPod/.test(ua)) {
    e.preventDefault()
    window.location.href = FACEBOOK_GROUP_VIA_SAFARI
  }
}

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void }

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  const g = (window as GtagWindow).gtag
  if (typeof g === 'function') g('event', name, params)
}
