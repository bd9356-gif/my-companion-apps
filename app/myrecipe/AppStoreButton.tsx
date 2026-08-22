'use client'

const APP_STORE_URL = 'https://apps.apple.com/us/app/myrecipe-ai-cooking-companion/id6772163990'

function fireAppStoreClick(buttonText: string, e: React.MouseEvent<HTMLAnchorElement>) {
  const g = typeof window !== 'undefined' ? (window as any).gtag : null
  if (typeof g === 'function') {
    e.preventDefault()
    g('event', 'app_store_click', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title,
      button_text: buttonText,
      destination_url: APP_STORE_URL,
      event_callback: () => { window.open(APP_STORE_URL, '_blank') },
      event_timeout: 1500,
    })
  }
  // If gtag not available, navigate normally (no preventDefault called)
}

export function AppStoreBadgeButton() {
  return (
    <a
      href={APP_STORE_URL}
      onClick={(e) => fireAppStoreClick('App Store', e)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '12px 22px', borderRadius: 14, textDecoration: 'none' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 9, fontFamily: 'system-ui, sans-serif', opacity: 0.65, letterSpacing: '0.06em' }}>DOWNLOAD ON THE</div>
        <div style={{ fontSize: 16, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
      </div>
    </a>
  )
}

export function TryFreeButton() {
  return (
    <a
      href={APP_STORE_URL}
      onClick={(e) => fireAppStoreClick('Try Free', e)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#C8401A', color: '#FFFDF9', padding: '12px 22px', borderRadius: 14, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 15, fontWeight: 700, boxShadow: '0 4px 14px rgba(200,64,26,0.35)' }}
    >
      Try Free →
    </a>
  )
}

export function TryItFreeButton() {
  return (
    <a
      href={APP_STORE_URL}
      onClick={(e) => fireAppStoreClick('Try It Free', e)}
      style={{ display: 'inline-block', backgroundColor: '#C8401A', color: '#FFFDF9', padding: '16px 40px', borderRadius: 16, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', fontSize: 17, fontWeight: 700, boxShadow: '0 4px 20px rgba(200,64,26,0.3)', marginBottom: 16 }}
    >
      Try It Free
    </a>
  )
}

export function AppStoreBadgeButtonLarge() {
  return (
    <a
      href={APP_STORE_URL}
      onClick={(e) => fireAppStoreClick('App Store', e)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, backgroundColor: '#1C1C1E', color: '#FFFDF9', padding: '14px 28px', borderRadius: 14, textDecoration: 'none' }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: 9, fontFamily: 'system-ui, sans-serif', opacity: 0.65, letterSpacing: '0.06em' }}>DOWNLOAD ON THE</div>
        <div style={{ fontSize: 17, fontFamily: 'system-ui, sans-serif', fontWeight: 700, lineHeight: 1.1 }}>App Store</div>
      </div>
    </a>
  )
}
