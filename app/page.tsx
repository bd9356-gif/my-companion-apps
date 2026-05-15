const APPS = [
  {
    icon: '⛳',
    name: 'MyGolf Companion',
    tagline: 'Your personal golf clubhouse',
    description: 'Lessons matched to your level, a Club Pro who answers your questions, and a Golf Bag that builds with you — from first swings to scoring shots.',
    url: 'https://golf-ai-companion.vercel.app',
    status: 'live',
    color: 'green',
    features: ['767 lessons', 'Matched to your level', 'Club Pro guidance', 'MyBag learning journey'],
  },
  {
    icon: '🔬',
    name: 'NET AI Companion',
    tagline: 'Support for NET cancer patients',
    description: 'Navigate neuroendocrine tumor research, clinical trials, and treatment options. Built with compassion for patients and families.',
    url: 'https://net-ai-companion.vercel.app',
    status: 'live',
    color: 'blue',
    features: ['14,500+ research abstracts', 'Clinical trials database', 'Research assistant', 'Report interpretation'],
  },
  {
    icon: '🍽️',
    name: 'MyRecipe Companion',
    tagline: 'Where your cooking life and your learning journey meet',
    description: "A cozy cooking companion — save recipes, plan meals, learn new skills, and cook alongside Chef Jennifer who's always ready to help.",
    url: 'https://recipe.mycompanionapps.com',
    status: 'live',
    color: 'orange',
    features: ['Recipe Vault & Cards', 'Chef Jennifer', 'Chef TV lessons', 'Meal Plan & shopping list'],
  },
]

const COMING_SOON = [
  { icon: '💪', name: 'MyFitness Companion', tagline: 'Personalized workout planning' },
  { icon: '📚', name: 'MyLearning Companion', tagline: 'AI-guided skill building' },
]

// Per-app accent colors. Centralized so adding a new card means adding one
// line here instead of editing the ternaries in multiple places.
const CARD_STYLES: Record<string, string> = {
  green: 'border-green-200 hover:border-green-400 bg-green-50/30',
  blue: 'border-blue-200 hover:border-blue-400 bg-blue-50/30',
  orange: 'border-orange-200 hover:border-orange-400 bg-orange-50/30',
}

const TAGLINE_STYLES: Record<string, string> = {
  green: 'text-green-700',
  blue: 'text-blue-700',
  orange: 'text-orange-700',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Full-width banner — edge-to-edge, no card framing, no shadow,
          no rounded corners. The banner image already has its own
          background and visual treatment; wrapping it in a card was
          framing-it-twice. This way the banner IS the top of the page,
          not "a banner inside the page." */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/banner.png"
        alt="MyCompanionApps — where your real life and your AI companion meet."
        className="w-full h-auto block"
        width={1200}
        height={630}
      />

      <main className="max-w-4xl mx-auto px-4 pt-5 pb-8">

        {/* Positioning statement — sits at the top of main, directly
            beneath the banner, so the visual hands off to the words
            with no whitespace gap. `text-balance` evens out the line
            breaks so we don't get orphans like "life" sitting alone
            on the last line on phone widths. The non-breaking space
            between "your" and "life" is a belt-and-suspenders guard
            for browsers that don't yet support text-balance. Tight
            top padding on main (pt-5 ≈ 20px) keeps the tagline close
            to the banner so the visual handoff feels intentional, not
            "banner, then a gap, then text." */}
        <div className="text-center mb-8 max-w-xl mx-auto">
          <p className="text-lg text-gray-800 leading-relaxed font-medium text-balance">
            A suite of focused companions &mdash; from everyday goals to the moments that truly test you.
          </p>
          <p className="text-base text-gray-500 leading-relaxed mt-3 text-balance">
            Clear, personal guidance, built for the realities of your&nbsp;life.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Live Apps</h3>
          <div className="space-y-4">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-2xl border-2 transition-all hover:shadow-md ${CARD_STYLES[app.color] || CARD_STYLES.blue}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{app.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{app.name}</h3>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                      </div>
                      <p className={`text-sm font-semibold mb-2 ${TAGLINE_STYLES[app.color] || TAGLINE_STYLES.blue}`}>
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

        <div className="mb-16">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Coming Soon</h3>
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
            <a href="https://golf-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">MyGolf</a>
            <a href="https://net-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">NET AI</a>
            <a href="https://recipe.mycompanionapps.com" className="text-sm text-gray-400 hover:text-gray-600">MyRecipe</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
