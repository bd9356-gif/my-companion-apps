const APPS = [
  {
    icon: '⛳',
    name: 'MyGolf Companion',
    tagline: 'Your AI-powered golf clubhouse',
    description: 'Personalized videos, AI-crafted guides, and your own Club Pro — all matched to your skill level. From beginner basics to advanced shot shaping.',
    url: 'https://golf-ai-companion.vercel.app',
    status: 'live',
    color: 'green',
    features: ['767 instruction videos', 'AI-matched to your level', 'MyPro AI guidance', 'MyBag learning journey'],
  },
  {
    icon: '🔬',
    name: 'NET AI Companion',
    tagline: 'AI-powered support for NET cancer patients',
    description: 'Navigate neuroendocrine tumor research, clinical trials, and treatment options. Built with compassion for patients and families.',
    url: 'https://net-ai-companion.vercel.app',
    status: 'live',
    color: 'blue',
    features: ['14,500+ research abstracts', 'Clinical trials database', 'AI research assistant', 'Report interpretation'],
  },
  {
    icon: '🍽️',
    name: 'Recipe AI Companion',
    tagline: 'Your AI-powered cooking companion',
    description: 'A cozy, modern cooking companion that blends a personal recipe vault, guided learning, and an AI chef — built for home cooks who want a simple way to save recipes, learn skills, and get help in the kitchen.',
    url: 'https://recipe.mycompanionapps.com',
    status: 'live',
    color: 'orange',
    features: ['Recipe Vault & Cards', 'Chef Jennifer AI', 'Chef TV videos', 'MyPlan & shopping list'],
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
      <header className="border-b border-gray-100 px-4 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">MyCompanionApps</h1>
            <p className="text-sm text-gray-500 mt-0.5">AI-powered companions for every part of your life</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Your AI Companion.<br />
            <span className="text-green-700">For everything that matters.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Each My Companion app brings AI-powered, personalized guidance to a specific area of your life — simple, focused, and built around you.
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
            Every My Companion app is built on the same foundation — AI that gets personal, guidance that matches where you are, and tools that grow with you. Simple. Focused. Yours.
          </p>
        </div>

      </main>

      <footer className="border-t border-gray-100 px-4 py-6 mt-12">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-400">© 2025 MyCompanionApps</p>
          <div className="flex gap-4">
            <a href="https://golf-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">MyGolf</a>
            <a href="https://net-ai-companion.vercel.app" className="text-sm text-gray-400 hover:text-gray-600">NET AI</a>
            <a href="https://recipe.mycompanionapps.com" className="text-sm text-gray-400 hover:text-gray-600">Recipe AI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
