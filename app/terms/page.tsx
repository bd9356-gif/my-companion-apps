export const metadata = {
  title: 'Terms of Use | MyCompanionApps',
  description: 'Terms of Use for My Companion Apps and all companion applications.',
}

export default function TermsPage() {
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
        <h1 className="text-2xl font-bold text-stone-800 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Terms of Use</h1>
        <p className="text-xs text-stone-400 mb-8">Last updated: June 2026</p>

        <div className="space-y-7 text-stone-700">

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Agreement to Terms</h2>
            <p className="text-sm leading-relaxed">By downloading or using any My Companion Apps application — including MyRecipe Companion, MyGolf Companion, and NET AI Companion — you agree to these Terms of Use. If you do not agree, please do not use our apps.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Use of Our Apps</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li>You must be at least 13 years old to use our apps.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You agree not to misuse our apps, attempt to reverse-engineer them, or use them for any unlawful purpose.</li>
              <li>AI-generated content (recipes, suggestions, responses) is provided for personal use and informational purposes only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Subscriptions & Payments</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc pl-4">
              <li>Subscriptions are billed through Apple In-App Purchase and managed via your Apple ID.</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</li>
              <li>You can manage or cancel subscriptions at any time in your Apple ID account settings.</li>
              <li>We do not offer refunds outside of Apple's standard refund policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Your Content</h2>
            <p className="text-sm leading-relaxed">Content you create in our apps — recipes, notes, photos, and other personal data — remains yours. You grant us a limited license to store and process your content solely to provide the app's functionality. We do not sell or share your personal content with third parties.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">AI-Generated Content</h2>
            <p className="text-sm leading-relaxed">Our apps use AI (powered by Anthropic's Claude) to generate recipes, suggestions, analysis, and other content. AI-generated content is provided as-is for personal use. We do not guarantee the accuracy, completeness, or suitability of AI-generated content for any specific purpose. Always use your own judgment, particularly for health, medical, or safety-related decisions.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Intellectual Property</h2>
            <p className="text-sm leading-relaxed">The My Companion Apps name, logo, app designs, and all original content created by us are our intellectual property. You may not copy, reproduce, or distribute our apps or branding without written permission.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Disclaimer of Warranties</h2>
            <p className="text-sm leading-relaxed">Our apps are provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or that the apps will meet your specific requirements. Use of our apps is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">To the fullest extent permitted by law, My Companion Apps shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our apps.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Changes to These Terms</h2>
            <p className="text-sm leading-relaxed">We may update these Terms from time to time. Continued use of our apps after changes are posted constitutes your acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-stone-800 mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed">Questions about these Terms? Contact us at: <a href="mailto:support@mycompanionapps.com" className="text-orange-700 underline hover:text-orange-900">support@mycompanionapps.com</a></p>
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
