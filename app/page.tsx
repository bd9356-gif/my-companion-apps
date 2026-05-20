// MyCompanionApps.com landing page — The Companion Suite redesign (May 2026)

const APPS = [
  {
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

const CARD_STYLES: Record<string, string> = {
  orange: 'border-orange-200 hover:border-orange-300',
  green: 'border-green-200 hover:border-green-300',
}

const TAGLINE_STYLES: Record<string, string> = {
  orange: 'text-orange-700',
  green: 'text-green-700',
}

const FEATURE_STYLES: Record<string, string> = {
  orange: 'bg-orange-50 border-orange-100 text-orange-700',
  green: 'bg-green-50 border-green-100 text-green-700',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="px-6 py-4 flex items-center gap-2 border-b border-gray-100">
        <span className="text-2xl">🌿</span>
        <span className="font-bold text-gray-900 text-lg">MyCompanionApps</span>
      </header>

      {/* Hero — full width photo with text overlay */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '420px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="The Companion Suite"
          className="w-full object-cover"
          style={{ maxHeight: '420px' }}
          width={1536}
          height={420}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <p className="text-orange-300 text-sm font-semibold uppercase tracking-widest mb-2">Introducing</p>
          <h1 className="text-white font-bold leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            The Companion<br />
            <span className="text-orange-400 italic" style={{ fontFamily: 'Georgia, serif' }}>Suite</span>
            <span className="text-orange-400 ml-2">♡</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
            Thoughtfully designed companions<br />
            for the passions and journeys<br />
            that shape your life.
          </p>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 pt-6 pb-12">

        {/* Positioning line */}
        <p className="text-center text-base text-gray-500 leading-snug mb-8 max-w-xl mx-auto">
          A suite of focused companions — clear, personal guidance for the realities of your life.
        </p>

        {/* Live Apps */}
        <div className="space-y-4 mb-10">
          {APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block p-5 pl-24 rounded-2xl border-2 bg-white transition-all hover:shadow-md ${CARD_STYLES[app.color] || CARD_STYLES.orange}`}
            >
              {app.icon.startsWith('/') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={app.icon}
                  alt=""
                  className="absolute top-5 left-4 w-14 h-14 object-contain"
                  width={56}
                  height={56}
                />
              ) : (
                <span className="absolute top-4 left-4 text-5xl leading-none">{app.icon}</span>
              )}

              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-gray-900 text-base">{app.name}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Live</span>
                  </div>
                  <p className={`text-sm font-semibold mb-2 ${TAGLINE_STYLES[app.color] || TAGLINE_STYLES.orange}`}>
                    {app.tagline}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{app.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.features.map((f) => (
                      <span key={f} className={`text-xs border px-2.5 py-1 rounded-full ${FEATURE_STYLES[app.color] || FEATURE_STYLES.orange}`}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-gray-300 shrink-0 text-lg mt-1">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Coming Soon</h2>
          <div className="space-y-3">
            {COMING_SOON.map((app) => (
              <div key={app.name} className="p-4 rounded-xl border border-dashed border-gray-200 flex items-center gap-4 bg-gray-50/50">
                <span className="text-2xl">{app.icon}</span>
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{app.name}</p>
                  <p className="text-xs text-gray-400">{app.tagline}</p>
                </div>
                <span className="ml-auto text-xs bg-white border border-gray-200 text-gray-500 px-2.5 py-1 rounded-full font-medium">Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Store buttons */}
        <div className="mb-10 grid grid-cols-2 gap-3 max-w-sm mx-auto">
          <div className="flex items-center gap-3 bg-stone-900 text-white rounded-xl px-3 py-2.5">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-none">Coming Soon</p>
              <p className="text-sm font-semibold leading-tight mt-0.5">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-stone-900 text-white rounded-xl px-3 py-2.5">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 2.92v18.16c0 .69.5 1.06 1.04.78l13.92-9.08c.5-.32.5-1.25 0-1.57L6.04 2.14C5.5 1.86 5 2.23 5 2.92z" />
            </svg>
            <div>
              <p className="text-[9px] uppercase tracking-wider text-stone-400 leading-none">Coming Soon</p>
              <p className="text-sm font-semibold leading-tight mt-0.5">Google Play</p>
            </div>
          </div>
        </div>

        {/* Promise block */}
        <div className="text-center p-8 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-xl font-bold text-gray-900 mb-2">The My Companion Promise</p>
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto text-sm">
            Every My Companion app is built on the same foundation — guidance that gets personal,
            matched to where you are, and tools that grow with you. Simple. Focused. Yours.
          </p>
        </div>

      </main>

      <footer className="border-t border-gray-100 px-4 py-6">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
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
