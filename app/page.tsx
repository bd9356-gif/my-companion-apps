// Landing page — reconstructed. Banner sits at the very top, edge-to-edge,
// and everything else stacks beneath it in a single column. App order is
// MyRecipe → MyGolf → NET (Recipe leads because it's the most active product
// and the one Chef Jennifer ties back to). The page deliberately reads as
// warm and human — the banner sets that tone, and the copy below avoids
// AI-marketing language so the two halves feel like the same product.

const APPS = [
  {
    // MyRecipe has its own brand icon (orange pot + green leaves + book +
    // graduation cap). Anything that starts with "/" gets rendered as an
    // <img> below; emojis render as text. Lets Golf and NET keep their
    // single-character icons without a special prop.
    icon: '/recipe-icon.png',
    name: 'MyRecipe Companion',
    tagline: 'Where your cooking life and your learning journey meet',
    description: "A cozy cooking companion — save recipes, plan meals, learn new skills, and cook alongside Chef Jennifer who's always ready to help.",
    url: 'https://recipe.mycompanionapps.com',
    color: 'orange',
    features: ['Recipe Vault & Cards', 'Chef Jennifer', 'Chef TV lessons', 'Meal Plan & shopping list'],
  },
  {
    icon: '⛳',
    name: 'MyGolf Companion',
    tagline: 'Your personal golf clubhouse',
    description: 'Lessons matched to your level, a Club Pro who answers your questions, and a Golf Bag that builds with you — from first swings to scoring shots.',
    url: 'https://golf-ai-companion.vercel.app',
    color: 'green',
    features: ['767 lessons', 'Matched to your level', 'Club Pro guidance', 'MyBag learning journey'],
  },
]

const COMING_SOON = [
  { icon: '🐶', name: 'MyDoggie Companion', tagline: 'Personalized care and training' },
  { icon: '📚', name: 'MyLearning Companion', tagline: 'Guided skill building' },
]

// Per-app accent colors. Centralized so adding a new card means adding one
// line here instead of editing the ternaries in multiple places.
const CARD_STYLES: Record<string, string> = {
  orange: 'border-orange-200 hover:border-orange-400 bg-orange-50/30',
  green: 'border-green-200 hover:border-green-400 bg-green-50/30',
  blue: 'border-blue-200 hover:border-blue-400 bg-blue-50/30',
}

const TAGLINE_STYLES: Record<string, string> = {
  orange: 'text-orange-700',
  green: 'text-green-700',
  blue: 'text-blue-700',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner — full-width edge-to-edge at the very top. Image was cropped
          to remove the white padding baked into the PNG, so it now sits
          flush with the page without re-introducing the "banner in a box"
          look. New dimensions: 1536 × 511 (3:1). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/banner.png"
        alt="MyCompanionApps — where your real life and your AI companion meet."
        className="w-full h-auto block"
        width={1536}
        height={511}
      />

      <main className="max-w-4xl mx-auto px-4 pt-0 pb-8">

        {/* Positioning line — single short sentence at the top of the page.
            With the banner removed, this is the only brand voice on the
            page above the app cards. */}
        <p className="text-center text-base text-gray-600 leading-snug text-balance mt-3 mb-3 max-w-xl mx-auto">
          A suite of focused companions &mdash; clear, personal guidance for the realities of your&nbsp;life.
        </p>

        {/* Live Apps — MyRecipe first, MyGolf second, NET third.
            "Live Apps" label removed — the cards speak for themselves. */}
        <div className="mb-8">
          <div className="space-y-4">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block p-6 pl-24 rounded-2xl border-2 transition-all hover:shadow-md ${CARD_STYLES[app.color] || CARD_STYLES.orange}`}
              >
                {/* Icon anchored to the top-left corner of the card. Using
                    absolute positioning so the icon doesn't take a column in
                    the flex row — the text content can use the full width
                    (minus a fixed left pad) and the icon doesn't compress
                    the title/tagline/description on narrow phones. */}
                {app.icon.startsWith('/') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={app.icon}
                    alt=""
                    className="absolute top-5 left-5 w-16 h-16 object-contain"
                    width={64}
                    height={64}
                  />
                ) : (
                  <span className="absolute top-4 left-5 text-5xl leading-none">{app.icon}</span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start min-w-0">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-gray-900 text-lg">{app.name}</h3>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                      </div>
                      <p className={`text-sm font-semibold mb-2 ${TAGLINE_STYLES[app.color] || TAGLINE_STYLES.orange}`}>
                        {app.tagline}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">{app.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {app.features.map((f) => (
                          <span key={f} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 shrink-0 text-lg">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Coming Soon — small dashed-border tiles, visually distinct from Live. */}
        <div className="mb-12">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Coming Soon</h2>
          <div className="grid grid-cols-1 gap-3">
            {COMING_SOON.map((app) => (
              <div key={app.name} className="p-4 rounded-xl border border-dashed border-gray-200 flex items-center gap-4">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <p className="font-semibold text-gray-700">{app.name}</p>
                  <p className="text-sm text-gray-400">{app.tagline}</p>
                </div>
                <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Store / Google Play "Coming Soon" buttons (May 2026).
            Brand-safe styled pills with Apple silhouette + Google Play
            arrow on a dark background, "Coming Soon" eyebrow signals
            the native apps are on the way. Swap for the real official
            badges once the apps actually ship. */}
        <div className="mb-12 grid grid-cols-2 gap-3 max-w-md mx-auto">
          <div className="flex items-center gap-3 bg-stone-900 text-white rounded-xl px-3 py-2.5" aria-label="App Store — coming soon">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-none">Coming Soon</p>
              <p className="text-sm font-semibold leading-tight mt-0.5">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-stone-900 text-white rounded-xl px-3 py-2.5" aria-label="Google Play — coming soon">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5 2.92v18.16c0 .69.5 1.06 1.04.78l13.92-9.08c.5-.32.5-1.25 0-1.57L6.04 2.14C5.5 1.86 5 2.23 5 2.92z" />
            </svg>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-none">Coming Soon</p>
              <p className="text-sm font-semibold leading-tight mt-0.5">Google Play</p>
            </div>
          </div>
        </div>

        {/* The promise — closing block. */}
        <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-2xl font-bold text-gray-900 mb-2">The My Companion Promise</p>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            Every My Companion app is built on the same foundation &mdash; guidance that gets personal, matched to where you are, and tools that grow with you. Simple. Focused. Yours.
          </p>
        </div>

      </main>

      <footer className="border-t border-gray-100 px-4 py-6 mt-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-400">© 2026 MyCompanionApps</p>
          <div className="flex gap-4">
            <a href="https://recipe.mycompanionapps.com" className="text-sm text-gray-400 hover:text-gray-600">MyRecipe</a>
            <a href="https://golf-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">MyGolf</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
