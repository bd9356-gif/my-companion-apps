// Landing page — reconstructed. Banner sits at the very top, edge-to-edge,
// and everything else stacks beneath it in a single column. App order is
// MyRecipe → MyGolf → NET (Recipe leads because it's the most active product
// and the one Chef Jennifer ties back to). The page deliberately reads as
// warm and human — the banner sets that tone, and the copy below avoids
// AI-marketing language so the two halves feel like the same product.

const APPS = [
  {
    icon: '🍽️',
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
  {
    icon: '🔬',
    name: 'NET AI Companion',
    tagline: 'Support for NET cancer patients',
    description: 'Navigate neuroendocrine tumor research, clinical trials, and treatment options. Built with compassion for patients and families.',
    url: 'https://net-ai-companion.vercel.app',
    color: 'blue',
    features: ['14,500+ research abstracts', 'Clinical trials database', 'Research assistant', 'Report interpretation'],
  },
]

const COMING_SOON = [
  { icon: '💪', name: 'MyFitness Companion', tagline: 'Personalized workout planning' },
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
                className={`block p-6 rounded-2xl border-2 transition-all hover:shadow-md ${CARD_STYLES[app.color] || CARD_STYLES.orange}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="text-4xl shrink-0">{app.icon}</span>
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
            <a href="https://net-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">NET AI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
