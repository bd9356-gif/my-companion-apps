export const metadata = {
  title: 'Support | MyCompanionApps',
  description: 'Support for MyRecipe Companion, MyGolf Companion, and NET AI Companion.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8', fontFamily: 'Georgia, serif' }}>
      <header style={{ backgroundColor: '#f5f0e8', borderBottom: '1px solid #e0d8c8' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <a href="/" className="text-sm text-stone-500 hover:text-stone-700">← Back</a>
          <span className="text-stone-300">|</span>
          <span className="text-sm font-semibold text-stone-700" style={{ fontFamily: 'Georgia, serif' }}>🌿 MyCompanionApps</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10 pb-16">
        <h1 className="text-2xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Support</h1>
        <p className="text-xs text-stone-400 mb-8">MyRecipe Companion &middot; MyGolf Companion &middot; NET AI Companion</p>

        <div className="space-y-7 text-stone-700">

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              Need help, have a question, or found something that isn't working right?
              Reach out at{' '}
              <a href="mailto:support@mycompanionapps.com" className="text-orange-700 underline hover:text-orange-900">
                support@mycompanionapps.com
              </a>
              . We typically respond within 1–2 business days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Managing Your Subscription</h2>
            <p className="text-sm leading-relaxed">
              You can manage or cancel your subscription anytime from within the app
              (More → Manage Subscription), or through your device's Settings → your
              name → Subscriptions.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Deleting Your Account</h2>
            <p className="text-sm leading-relaxed">
              You can delete your account and all associated data at any time from
              within the app, or contact us at the email above to request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Your Privacy</h2>
            <p className="text-sm leading-relaxed">
              Your recipes, golf rounds, journal entries, and photos are private and
              only accessible to you. See our{' '}
              <a href="/privacy" className="text-orange-700 underline hover:text-orange-900">Privacy Policy</a>{' '}
              for full details.
            </p>
          </section>

        </div>
      </main>

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
