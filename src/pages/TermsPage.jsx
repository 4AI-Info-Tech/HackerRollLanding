export default function TermsPage() {
  return (
    <section className="w-full pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-[#71717a] mb-10">Last updated: March 20, 2026</p>

        <div className="space-y-8 text-[#a1a1aa] text-sm leading-relaxed">
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using HackerRoll ("the App"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use the App.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">2. Description of Service</h2>
            <p>
              HackerRoll is a mobile application that provides an enhanced reading experience for Hacker News content.
              The App offers AI-powered features including article summaries, analysis, translation, and AI-generated
              editorial illustrations. Some features require a paid subscription or credit purchases.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">3. Accounts & Authentication</h2>
            <p>
              HackerRoll allows you to connect your existing Hacker News account to access authenticated features
              such as voting, replying, and favoriting. Your HN credentials are used solely to establish a session
              with the Hacker News website and are not stored on our servers in plain text.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">4. Subscriptions & Credits</h2>
            <p>
              HackerRoll offers a Pro subscription and credit packs for AI-powered features. Subscriptions automatically
              renew unless canceled at least 24 hours before the end of the current period. Credits are non-refundable
              and are consumed when AI features are used. Pro subscribers receive a monthly credit allocation.
              Payment is processed through Apple's in-app purchase system.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">5. AI-Generated Content</h2>
            <p>
              AI-generated summaries, analyses, translations, and illustrations are provided for informational purposes
              only. We do not guarantee the accuracy, completeness, or reliability of AI-generated content.
              You should not rely on AI outputs as a substitute for reading the original articles.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Interfere with or disrupt the App's services or servers</li>
              <li>Use automated systems to access the App in a manner that exceeds reasonable use</li>
              <li>Resell or redistribute AI-generated content for commercial purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">7. Third-Party Content</h2>
            <p>
              HackerRoll displays content from Hacker News (operated by Y Combinator) and linked third-party websites.
              We are not responsible for the accuracy or content of third-party materials.
              HackerRoll is not affiliated with or endorsed by Y Combinator.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">8. Intellectual Property</h2>
            <p>
              The App, including its design, code, and AI models, is the intellectual property of HackerRoll.
              User-generated content (such as HN posts and comments) remains the property of their respective authors.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">9. Limitation of Liability</h2>
            <p>
              HackerRoll is provided "as is" without warranties of any kind. We shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the App after changes
              constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">11. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:support@hackerroll.com" className="text-[#ff6600] hover:underline">
                support@hackerroll.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
