export const metadata = {
  title: 'MyGolf Companion — Coming Soon',
  description: 'More Than Golf. Your AI golf companion for every round — challenges, memories, practice, and more. Coming soon to the App Store.',
}

const features = [
  {
    emoji: '🏆',
    name: 'I Had a Five™',
    tagline: 'Choose your group\'s challenge.',
    description: 'Weekly group challenges with real awards every round — Snowman, Who Cares, You Chose Badly. Monthly rollup crowns the Gold Jacket and Plaid Jacket. Every challenge reveals the real USGA rule it bends.',
  },
  {
    emoji: '🏡',
    name: '19th Hole',
    tagline: 'Where every round becomes tomorrow\'s memories.',
    description: 'Save photos from your round, write a private golf journal, and keep a running list of Golf Cart Classics — the lines your group says to each other that never get old.',
  },
  {
    emoji: '🎒',
    name: 'MyBag',
    tagline: 'Your Golf Improvement Bag.',
    description: 'Save videos and tips that actually fit your game. Promote your best finds to practice focus. Your personal shortlist, always ready for Saturday.',
  },
  {
    emoji: '🏛️',
    name: 'AI Clubhouse',
    tagline: 'Learn. Practice. Master.',
    description: 'Ask The Pro real golf questions and get real answers. Watch Golf TV. Browse the Golf Library. Everything you save lives in your own Playbook.',
  },
  {
    emoji: '📍',
    name: 'My Courses',
    tagline: 'Your golf address book.',
    description: 'Save every course you play — tee time booking links, phone numbers, booking windows. No more digging for a number on the morning of.',
  },
]

export default function GolfPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#f5f0e8', borderBottom: '1px solid #e0d8c8' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <a href="/" className="text-sm text-stone-500 hover:text-stone-700">← Back</a>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700" style={{ fontFamily: 'Georgia, serif' }}>🌿 MyCompanionApps</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 pb-16">

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-block bg-green-800 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Coming Soon to the App Store
          </div>
          <h1 className="text-3xl font-bold text-green-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            MyGolf Companion
          </h1>
          <p className="text-lg text-stone-500 italic mb-4">More Than Golf.</p>
          <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
            Your AI golf companion for every round — group challenges, round memories,
            practice focus, and everything that makes the game worth playing.
          </p>
        </div>

        {/* Pinterest cover image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/golf-preview.png"
            alt="MyGolf Companion app preview"
            className="w-full"
          />
        </div>

        {/* Tagline strip */}
        <div className="grid grid-cols-5 gap-1 mb-10 text-center">
          {['Improve', 'Play', 'Connect', 'Remember', 'Enjoy'].map((word, i) => (
            <div key={i} className="bg-green-900 text-white rounded-lg py-2 px-1">
              <p className="text-xs font-bold">{word}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-4 mb-10">
          <h2 className="text-base font-bold text-stone-800 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            What's Inside
          </h2>
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{f.emoji}</span>
                <div>
                  <p className="font-bold text-stone-900 text-sm">{f.name}</p>
                  <p className="text-xs text-green-700 italic mb-1">{f.tagline}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <p className="text-sm font-bold text-stone-800 mb-1">MyGolf Companion</p>
          <p className="text-xs text-stone-400 italic mb-4">Launching soon on iOS</p>
          <div className="inline-block bg-stone-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl opacity-60 cursor-not-allowed select-none">
            ⬇ Download on the App Store
          </div>
          <p className="text-xs text-stone-400 mt-3">Available soon — check back shortly.</p>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-4 py-5" style={{ backgroundColor: '#ede8df' }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-xs text-stone-400">© 2026 MyCompanionApps</p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-xs text-stone-400 hover:text-stone-600">Privacy</a>
            <a href="/terms" className="text-xs text-stone-400 hover:text-stone-600">Terms</a>
            <a href="/support" className="text-xs text-stone-400 hover:text-stone-600">Support</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
