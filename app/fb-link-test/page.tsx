// Temporary test page: which Facebook group link format opens correctly
// inside the Facebook app's built-in browser on iPhone. Not linked anywhere; remove after testing.

import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Facebook link test', robots: { index: false, follow: false } }

const ID = '2143785163199218'
const LINKS: [string, string][] = [
  ['1', `https://www.facebook.com/groups/${ID}`],
  ['2', `https://www.facebook.com/groups/${ID}/`],
  ['3', `https://facebook.com/groups/${ID}`],
  ['4', `https://m.facebook.com/groups/${ID}`],
  ['5', 'https://www.facebook.com/share/g/19shn7AGTN/'],
  ['6', `fb://group/${ID}`],
  ['7', `fb://group?id=${ID}`],
  ['8', `fb://profile/${ID}`],
]

export default function Page() {
  return (
    <main style={{ maxWidth: 520, margin: '0 auto', padding: '32px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 22, margin: '0 0 8px' }}>Facebook link test</h1>
      <p style={{ fontSize: 15, color: '#555', margin: '0 0 24px' }}>Tap each one. After each tap, come back here and note whether the group opened.</p>
      {LINKS.map(([n, url]) => (
        <a key={n} href={url} style={{ display: 'block', padding: '14px 16px', marginBottom: 10, border: '1.5px solid #C8401A', borderRadius: 12, color: '#C8401A', textDecoration: 'none', fontWeight: 600, fontSize: 16 }}>
          Test {n}
          <span style={{ display: 'block', fontWeight: 400, fontSize: 12, color: '#777', marginTop: 4, wordBreak: 'break-all' }}>{url}</span>
        </a>
      ))}
    </main>
  )
}
