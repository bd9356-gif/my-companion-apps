'use client'

// /admin — Website Publishing. Choose which MyRecipe Companion recipes and
// Chef Jen tips appear on mycompanionapps.com. Not a CMS: no creating or editing here.

import { useCallback, useEffect, useMemo, useState } from 'react'
import { createClient, type Session } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL, COLLECTIONS } from '@/lib/publishing'

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, detectSessionInUrl: true, flowType: 'implicit' },
})

type Recipe = { id: string; title: string | null; photo_url: string | null; created_at: string | null; published: boolean; web_slug: string | null; web_collection: string | null }
type Tip = { id: string; title: string | null; created_at: string | null; published: boolean; web_slug: string | null }

const font = 'system-ui, -apple-system, sans-serif'
const ACCENT = '#C8401A'

function fmtDate(d: string | null) {
  return d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''
}

function Toggle({ on, disabled, onChange, title }: { on: boolean; disabled?: boolean; onChange: (v: boolean) => void; title?: string }) {
  return (
    <button
      type="button" role="switch" aria-checked={on} disabled={disabled} title={title}
      onClick={() => onChange(!on)}
      style={{ width: 52, height: 30, borderRadius: 15, border: 'none', padding: 3, cursor: disabled ? 'not-allowed' : 'pointer', backgroundColor: on ? '#16A34A' : '#D6D3D1', opacity: disabled ? 0.45 : 1, flexShrink: 0, transition: 'background-color .15s' }}
    >
      <span style={{ display: 'block', width: 24, height: 24, borderRadius: 12, backgroundColor: 'white', transform: on ? 'translateX(22px)' : 'none', transition: 'transform .15s', boxShadow: '0 1px 3px rgba(0,0,0,.25)' }} />
    </button>
  )
}

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null)
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [linkSent, setLinkSent] = useState(false)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [tips, setTips] = useState<Tip[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [publishedOnly, setPublishedOnly] = useState(false)

  const load = useCallback(async (s: Session | null) => {
    if (!s || (s.user?.email || '').toLowerCase() !== ADMIN_EMAIL) { setLoading(false); return }
    const res = await fetch('/api/admin/publishing', { headers: { Authorization: `Bearer ${s.access_token}` }, cache: 'no-store' })
    const json = await res.json().catch(() => ({}))
    if (!res.ok) setError(json.error || `Error ${res.status}`)
    else { setError(''); setRecipes(json.recipes || []); setTips(json.tips || []) }
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); load(data.session) })
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s)
      if (event === 'SIGNED_IN') load(s)
    })
    return () => sub.subscription.unsubscribe()
  }, [load])

  const isAdmin = (session?.user?.email || '').toLowerCase() === ADMIN_EMAIL

  async function save(kind: 'recipe' | 'tip', id: string, change: { published?: boolean; web_collection?: string | null }) {
    if (!session) return
    setBusy(id); setError('')
    const res = await fetch('/api/admin/publishing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
      body: JSON.stringify({ kind, id, ...change }),
    })
    const json = await res.json().catch(() => ({}))
    if (!res.ok) setError(json.error || `Error ${res.status}`)
    else if (kind === 'recipe') setRecipes((rs) => rs.map((r) => (r.id === id ? { ...r, ...json.item } : r)))
    else setTips((ts) => ts.map((t) => (t.id === id ? { ...t, ...json.item } : t)))
    setBusy(null)
  }

  async function sendLink(e: React.FormEvent) {
    e.preventDefault(); setError('')
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/admin`, shouldCreateUser: false },
    })
    if (error) setError(error.message)
    else setLinkSent(true)
  }

  const q = search.trim().toLowerCase()
  const shownRecipes = useMemo(() => recipes.filter((r) => (!publishedOnly || r.published) && (!q || (r.title || '').toLowerCase().includes(q))), [recipes, publishedOnly, q])
  const shownTips = useMemo(() => tips.filter((t) => (!publishedOnly || t.published) && (!q || (t.title || '').toLowerCase().includes(q))), [tips, publishedOnly, q])

  const page: React.CSSProperties = { minHeight: '100vh', backgroundColor: '#FAFAF9', fontFamily: font, color: '#1C1917' }
  const wrap: React.CSSProperties = { maxWidth: 960, margin: '0 auto', padding: '24px 16px 80px' }
  const card: React.CSSProperties = { backgroundColor: 'white', border: '1px solid #E7E5E4', borderRadius: 12 }

  if (!ready) return <div style={page}><div style={wrap}>Loading…</div></div>

  if (!session) {
    return (
      <div style={page}>
        <div style={{ ...wrap, maxWidth: 420, paddingTop: 80 }}>
          <div style={{ ...card, padding: 28 }}>
            <h1 style={{ fontSize: 22, margin: '0 0 6px' }}>Website Publishing</h1>
            <p style={{ color: '#78716C', fontSize: 14, margin: '0 0 20px' }}>Admin sign in</p>
            {linkSent ? (
              <p style={{ fontSize: 15, lineHeight: 1.6 }}>Check <strong>{email}</strong> for a sign-in link. Open it on this device.</p>
            ) : (
              <form onSubmit={sendLink}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  style={{ width: '100%', boxSizing: 'border-box', padding: '12px 14px', fontSize: 16, border: '1px solid #D6D3D1', borderRadius: 10, marginBottom: 12 }} />
                <button type="submit" style={{ width: '100%', padding: '12px', fontSize: 15, fontWeight: 700, color: 'white', backgroundColor: ACCENT, border: 'none', borderRadius: 10, cursor: 'pointer' }}>
                  Email me a sign-in link
                </button>
              </form>
            )}
            {error && <p style={{ color: '#B91C1C', fontSize: 14, marginTop: 12 }}>{error}</p>}
          </div>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div style={page}>
        <div style={{ ...wrap, maxWidth: 420, paddingTop: 80 }}>
          <div style={{ ...card, padding: 28 }}>
            <h1 style={{ fontSize: 20, margin: '0 0 10px' }}>Not authorized</h1>
            <p style={{ color: '#78716C', fontSize: 14 }}>Signed in as {session.user.email}.</p>
            <button onClick={() => supabase.auth.signOut()} style={{ marginTop: 12, padding: '10px 16px', border: '1px solid #D6D3D1', borderRadius: 10, background: 'white', cursor: 'pointer' }}>Sign out</button>
          </div>
        </div>
      </div>
    )
  }

  const recipesPublished = recipes.filter((r) => r.published).length
  const tipsPublished = tips.filter((t) => t.published).length

  return (
    <div style={page}>
      <div style={wrap}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <h1 style={{ fontSize: 24, margin: 0 }}>Website Publishing</h1>
            <p style={{ color: '#78716C', fontSize: 13, margin: '4px 0 0' }}>Choose what appears on mycompanionapps.com. Content is created and edited in MyRecipe Companion.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => { setLoading(true); load(session) }} style={{ padding: '8px 14px', border: '1px solid #D6D3D1', borderRadius: 10, background: 'white', cursor: 'pointer', fontSize: 13 }}>{loading ? 'Loading…' : 'Refresh'}</button>
            <button onClick={() => supabase.auth.signOut()} style={{ padding: '8px 14px', border: '1px solid #D6D3D1', borderRadius: 10, background: 'white', cursor: 'pointer', fontSize: 13 }}>Sign out</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
          <input placeholder="Search by name…" value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ flex: '1 1 220px', padding: '10px 12px', fontSize: 15, border: '1px solid #D6D3D1', borderRadius: 10 }} />
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#57534E' }}>
            <input type="checkbox" checked={publishedOnly} onChange={(e) => setPublishedOnly(e.target.checked)} /> Published only
          </label>
        </div>

        {error && <div style={{ ...card, borderColor: '#FCA5A5', backgroundColor: '#FEF2F2', color: '#B91C1C', padding: '10px 14px', fontSize: 14, marginBottom: 16 }}>{error}</div>}

        {/* Recipes */}
        <h2 style={{ fontSize: 18, margin: '8px 0 10px' }}>Recipes <span style={{ color: '#78716C', fontWeight: 400, fontSize: 14 }}>· {recipesPublished} published of {recipes.length}</span></h2>
        <div style={{ ...card, overflow: 'hidden', marginBottom: 32 }}>
          {shownRecipes.length === 0 && <div style={{ padding: 16, color: '#78716C', fontSize: 14 }}>{loading ? 'Loading…' : 'No recipes.'}</div>}
          {shownRecipes.map((r, i) => (
            <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderTop: i ? '1px solid #F5F5F4' : 'none', flexWrap: 'wrap' }}>
              {r.photo_url && r.photo_url.startsWith('http')
                // eslint-disable-next-line @next/next/no-img-element
                ? <img src={r.photo_url} alt="" style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                : <div style={{ width: 48, height: 48, borderRadius: 8, backgroundColor: '#F5F5F4', flexShrink: 0 }} />}
              <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{r.title || 'Untitled'}</div>
                <div style={{ fontSize: 12, color: '#78716C', marginTop: 2 }}>
                  {fmtDate(r.created_at)}
                  {r.web_slug && <> · <a href={`/recipes/${r.web_slug}`} target="_blank" rel="noreferrer" style={{ color: ACCENT }}>/recipes/{r.web_slug}</a></>}
                </div>
              </div>
              <select value={r.web_collection || ''} disabled={busy === r.id}
                onChange={(e) => save('recipe', r.id, { web_collection: e.target.value || null })}
                style={{ padding: '7px 8px', fontSize: 13, border: '1px solid #D6D3D1', borderRadius: 8, background: 'white' }}>
                <option value="" disabled={r.published}>Collection…</option>
                {COLLECTIONS.map((c) => <option key={c.key} value={c.key}>{c.title}</option>)}
              </select>
              <Toggle on={r.published} disabled={busy === r.id || (!r.published && !r.web_collection)}
                title={!r.web_collection ? 'Pick a collection first' : undefined}
                onChange={(v) => save('recipe', r.id, { published: v })} />
            </div>
          ))}
        </div>

        {/* Tips */}
        <h2 style={{ fontSize: 18, margin: '8px 0 10px' }}>Chef Jen Tips <span style={{ color: '#78716C', fontWeight: 400, fontSize: 14 }}>· {tipsPublished} published of {tips.length}</span></h2>
        <div style={{ ...card, overflow: 'hidden' }}>
          {shownTips.length === 0 && <div style={{ padding: 16, color: '#78716C', fontSize: 14 }}>{loading ? 'Loading…' : 'No tips.'}</div>}
          {shownTips.map((t, i) => (
            <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderTop: i ? '1px solid #F5F5F4' : 'none' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{t.title || 'Untitled'}</div>
                <div style={{ fontSize: 12, color: '#78716C', marginTop: 2 }}>
                  {fmtDate(t.created_at)}
                  {t.web_slug && <> · <a href={`/tips/${t.web_slug}`} target="_blank" rel="noreferrer" style={{ color: ACCENT }}>/tips/{t.web_slug}</a></>}
                </div>
              </div>
              <Toggle on={t.published} disabled={busy === t.id} onChange={(v) => save('tip', t.id, { published: v })} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
