export const metadata = {
  title: 'Privacy Policy | MyCompanionApps',
  description: 'Privacy Policy for My Companion Apps and all companion applications.',
}

export default function PrivacyPage() {
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
        <h1 className="text-2xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Privacy Policy</h1>
        <p className="text-xs text-stone-400 mb-8">Last updated: June 2026</p>

        <div className="space-y-7 text-stone-700">

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Overview</h2>
            <p className="text-sm leading-relaxed">My Companion Apps ("we", "our", or "us") builds a suite of AI-powered companion applications including MyRecipe Companion, MyGolf Companion, and NET AI Companion. This Privacy Policy applies to all My Companion Apps applications and explains how we collect, use, and protect your information.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Information We Collect</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li><strong>Account information:</strong> When you sign in with Apple or Google, we collect your name and email address.</li>
              <li><strong>App content:</strong> Content you create in our apps — recipes, notes, golf rounds, journal entries, and photos — is stored in your private account.</li>
              <li><strong>Usage data:</strong> We collect basic usage information (feature usage counts, subscription tier) to operate and improve our apps.</li>
              <li><strong>Device information:</strong> Standard device and OS information collected by Apple for crash reporting and analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">How We Use Your Information</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li>To provide and operate each companion app and its features</li>
              <li>To power AI features (Chef Jen, personalized recommendations, and other AI assistants) via the Anthropic Claude API</li>
              <li>To sync your content and preferences across your devices</li>
              <li>To process subscription payments via Apple In-App Purchase and RevenueCat</li>
              <li>To improve app features and fix issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Data Storage & Security</h2>
            <p className="text-sm leading-relaxed">Your data is stored securely using Supabase. Your personal content — recipes, golf data, notes, and photos — is private and only accessible to you. We use industry-standard encryption for data in transit and at rest.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Third-Party Services</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li><strong>Apple Sign In:</strong> Used for authentication across all apps.</li>
              <li><strong>Google OAuth:</strong> Optional sign-in method. Governed by Google's privacy policy.</li>
              <li><strong>Anthropic Claude AI:</strong> Powers AI features. Relevant content queries are sent to Anthropic's API to generate responses.</li>
              <li><strong>RevenueCat:</strong> Manages in-app subscription purchases and entitlements.</li>
              <li><strong>OpenAI:</strong> Used for AI image generation features where available.</li>
              <li><strong>Supabase:</strong> Secure cloud database for storing your personal app data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Your Rights</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li>You can delete your account and all associated data at any time from within any app</li>
              <li>You can contact us to request data export or deletion</li>
              <li>You can manage your subscription at any time through your Apple ID settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Children's Privacy</h2>
            <p className="text-sm leading-relaxed">My Companion Apps are not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Changes to This Policy</h2>
            <p className="text-sm leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our apps after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed">Questions about this policy or your data? Contact us at: <a href="mailto:support@mycompanionapps.com" className="text-orange-700 underline hover:text-orange-900">support@mycompanionapps.com</a></p>
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