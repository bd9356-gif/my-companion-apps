import TrackedLink from '../recipes/TrackedLink'

// The website's primary action: Try It Free → App Store. Use this everywhere a
// Try It Free button appears so the look stays the same (change it here once).
// #EA580C with bold white text at 19px — large bold text, which meets the
// accessibility contrast rule for this orange (3.6:1 ≥ 3:1).

export const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'
export const TRY_IT_FREE_ORANGE = '#EA580C'

export default function TryItFreeButton({ source, style }: {
  /** GA source_type for the app_store_click event. */
  source: string
  /** Layout extras (e.g. width); colors and type come from here. */
  style?: React.CSSProperties
}) {
  return (
    <>
      <style>{`
        .try-it-free { transition: background-color 120ms ease, transform 80ms ease; }
        .try-it-free:hover { background-color: #C2410C !important; border-color: #C2410C !important; }
        .try-it-free:active { background-color: #9A3412 !important; border-color: #9A3412 !important; transform: translateY(1px); }
        .try-it-free:focus-visible { outline: 3px solid #FDBA74; outline-offset: 2px; }
      `}</style>
      <TrackedLink
        href={APP_STORE_URL}
        external
        event="app_store_click"
        params={{ source_type: source, button_text: 'Try It Free' }}
        className="try-it-free"
        style={{
          display: 'block', backgroundColor: TRY_IT_FREE_ORANGE, color: '#FFFFFF', padding: '13px 8px', borderRadius: 14,
          textDecoration: 'none', fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 19, fontWeight: 700, lineHeight: 1.15,
          boxShadow: '0 4px 14px rgba(234,88,12,0.3)', border: `2px solid ${TRY_IT_FREE_ORANGE}`,
          ...style,
        }}
      >
        Try It Free →
      </TrackedLink>
    </>
  )
}
