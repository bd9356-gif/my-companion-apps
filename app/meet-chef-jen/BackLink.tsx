'use client'

// "← Back": returns to the page the visitor came from (a shared recipe, a tip, the
// homepage…). With no page to go back to (opened directly), it goes to the homepage.

export default function BackLink() {
  return (
    <a
      href="/myrecipe"
      onClick={(e) => {
        if (window.history.length > 1 && document.referrer) {
          e.preventDefault()
          window.history.back()
        }
      }}
      style={{ display: 'inline-block', padding: '6px 10px', fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 14, color: '#78716C', textDecoration: 'none' }}
    >
      ← Back
    </a>
  )
}
