// Chef Jen Facebook community + GA4 helpers.
// Paste the group's URL below. Until it is set, the Facebook CTA renders nothing
// (so no dead link ever goes live).

export const FACEBOOK_GROUP_URL = 'https://www.facebook.com/share/g/19shn7AGTN/?mibextid=wwXIfr'
export const FACEBOOK_GROUP_NAME = 'What’s for Dinner? with Chef Jen'

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void }

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  const g = (window as GtagWindow).gtag
  if (typeof g === 'function') g('event', name, params)
}
