// MyCompanionApps.com — The Companion Suite (May 2026 redesign)
// Aesthetic: warm vintage, hand-crafted, cozy — matching the Pinterest board visual

const APPS = [
  {
    icon: '/recipe-icon.png',
    name: 'MyRecipe Companion',
    tagline: 'More Than Recipes',
    description: 'Your cozy kitchen companion. Save recipes, plan meals, learn new skills, and cook with confidence.',
    url: '/myrecipe',
    pricingUrl: '',
    color: 'orange',
    buttonColor: 'bg-orange-700 hover:bg-orange-800',
    borderColor: 'border-orange-200',
    nameColor: 'text-orange-600',
  },
  {
    icon: '⛳',
    name: 'MyGolf Companion',
    tagline: 'More Than Golf',
    description: 'Your personal golf companion. Track rounds, improve your game, and enjoy the journey.',
    url: 'https://golf-ai-companion.vercel.app',
    color: 'green',
    buttonColor: 'bg-green-800 hover:bg-green-900',
    borderColor: 'border-green-200',
    nameColor: 'text-green-700',
  },
]

const PILLARS = [
  { icon: '📖', title: 'Personal & Meaningful', desc: 'Built around your life, your memories, your goals.' },
  { icon: '🌱', title: 'Grow & Improve', desc: 'Tools and insights to help you get better every day.' },
  { icon: '🤝', title: 'Always With You', desc: 'Your companions, your way — anytime, anywhere.' },
  { icon: '🔒', title: 'Yours to Keep', desc: 'Your data, your stories, safe and secure.' },
]

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#f5f0e8', borderBottom: '1px solid #e0d8c8' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-2">
          <span className="text-xl">🌿</span>
          <span className="font-bold text-gray-800 text-base tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>MyCompanionApps</span>
        </div>
      </header>

      {/* Hero image — Pinterest board visual */}
      <div className="max-w-2xl mx-auto px-4 pt-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-update.jpg"
          alt="The Companion Suite by MyCompanionApps"
          className="w-full h-auto rounded-2xl shadow-md"
          width={1200}
          height={500}
        />
      </div>

      <main className="max-w-2xl mx-auto px-4 pt-6 pb-12">

        {/* Explore label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 border-t border-stone-300" />
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">🌿 Explore Our Companions 🌿</p>
          <div className="flex-1 border-t border-stone-300" />
        </div>

        {/* App Cards */}
        <div className="space-y-4 mb-10">
          {APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-2xl border-2 bg-white overflow-hidden transition-all hover:shadow-lg ${app.borderColor}`}
            >
              <div className="p-5">
                {/* Logo + heading side by side */}
                <div className="flex items-center gap-4 mb-2">
                  {app.icon.startsWith('/') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={app.icon} alt="" className="w-16 h-16 object-contain shrink-0" width={64} height={64} />
                  ) : (
                    <span className="text-5xl leading-none shrink-0">{app.icon}</span>
                  )}
                  <div>
                    <div className="font-bold text-2xl leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      <span className="text-stone-800">My</span>
                      <span className={app.nameColor}>{app.name.replace('My', '').replace(' Companion', '')}</span>
                    </div>
                    <div className="text-lg italic text-stone-600 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>Companion ♡</div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mt-0.5">{app.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{app.description}</p>

                {/* Button */}
                <div className={`w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold text-center ${app.buttonColor}`}>
                  Learn More &gt;
                </div>
                {app.pricingUrl && (
                  <a href={app.pricingUrl} className="block text-center text-xs text-stone-400 hover:text-stone-600 mt-2">See pricing →</a>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {PILLARS.map((p) => (
            <div key={p.title} className="text-center p-4 rounded-xl bg-white border border-stone-200">
              <div className="text-2xl mb-2">{p.icon}</div>
              <p className="text-sm font-bold text-stone-800 mb-1">{p.title}</p>
              <p className="text-xs text-stone-500 leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* App Store buttons */}
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-10">
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

        {/* Closing tagline */}
        <div className="text-center py-6 border-t border-stone-200">
          <p className="text-stone-500 italic text-sm" style={{ fontFamily: 'Georgia, serif' }}>
            One suite. Many passions. ♡ Endless journeys.
          </p>
          <p className="text-stone-400 text-xs mt-2">More coming soon!</p>
        </div>

      </main>

      <footer className="border-t border-stone-200 px-4 py-6" style={{ backgroundColor: '#ede8df' }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-sm text-stone-400">© 2026 MyCompanionApps</p>
          <div className="flex gap-4">
            <a href="/myrecipe" className="text-sm text-stone-400 hover:text-stone-600">MyRecipe</a>
            <a href="https://golf-ai-companion.vercel.app" className="text-sm text-stone-400 hover:text-stone-600">MyGolf</a>
            <a href="/privacy" className="text-sm text-stone-400 hover:text-stone-600">Privacy</a>
            <a href="/terms" className="text-sm text-stone-400 hover:text-stone-600">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
