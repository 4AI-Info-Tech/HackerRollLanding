export default function PrivacyPage() {
  return (
    <section className="w-full pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#71717a] mb-10">Last updated: March 20, 2026</p>

        <div className="space-y-8 text-[#a1a1aa] text-sm leading-relaxed">
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">1. Overview</h2>
            <p>
              HackerRoll ("we", "our", "the App") respects your privacy. This policy explains what data
              we collect, how we use it, and your rights regarding that data.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">2. Data We Collect</h2>

            <h3 className="text-white/80 font-medium mt-4 mb-2">Installation Data</h3>
            <p>
              When you first launch the App, a unique installation identifier is generated. This identifier
              is used to associate your device with your subscription status and credit balance. It does not
              contain personally identifiable information.
            </p>

            <h3 className="text-white/80 font-medium mt-4 mb-2">Hacker News Session Data</h3>
            <p>
              If you choose to log in with your HN account, an encrypted session cookie is stored on our
              servers to enable authenticated actions (voting, replying, favoriting). Your HN password is
              never stored — it is used only during the login flow to establish a session.
            </p>

            <h3 className="text-white/80 font-medium mt-4 mb-2">AI Feature Usage</h3>
            <p>
              When you use AI features (summaries, analysis, translations), the article text and metadata
              are sent to our servers and processed using third-party AI providers (OpenAI). AI results may
              be cached to improve performance for subsequent users requesting the same content.
            </p>

            <h3 className="text-white/80 font-medium mt-4 mb-2">Subscription & Purchase Data</h3>
            <p>
              Subscription and credit purchase data is managed by Apple (via App Store) and RevenueCat
              (our subscription management provider). We receive subscription status and credit balance
              information but do not have access to your payment details.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide and maintain the App's functionality</li>
              <li>To manage your subscription status and credit balance</li>
              <li>To enable authenticated Hacker News features</li>
              <li>To deliver AI-powered features (summaries, analysis, translation)</li>
              <li>To cache AI results for improved performance</li>
              <li>To send push notifications you have opted into</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-white/80">RevenueCat</strong> — Subscription and credit management</li>
              <li><strong className="text-white/80">OpenAI</strong> — AI content generation (summaries, analysis, translations)</li>
              <li><strong className="text-white/80">Cloudflare</strong> — Infrastructure, hosting, and content delivery</li>
              <li><strong className="text-white/80">fal.ai</strong> — AI image generation for editorial illustrations</li>
            </ul>
            <p className="mt-2">
              Each provider has their own privacy policy governing their handling of data.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">5. Data Storage & Security</h2>
            <p>
              Data is stored on Cloudflare's global network using D1 (database) and R2 (media storage).
              HN session cookies are encrypted at rest using AES-256. All data transmission between the App
              and our servers uses HTTPS/TLS encryption.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">6. Data Retention</h2>
            <p>
              Installation data is retained as long as you use the App. HN session data is retained until
              you log out or the session expires. Cached AI results may be retained to serve future requests.
              You can request deletion of your data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Request access to the data we hold about your installation</li>
              <li>Request deletion of your data</li>
              <li>Log out of your HN account at any time, which removes stored session data</li>
              <li>Cancel your subscription at any time through the App Store</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">8. Children's Privacy</h2>
            <p>
              HackerRoll is not intended for children under 13. We do not knowingly collect data from
              children under 13. If you believe a child has provided us with data, please contact us.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected by updating
              the "Last updated" date above. Continued use of the App after changes constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">10. Contact</h2>
            <p>
              For privacy-related questions or data requests, please contact us at{" "}
              <a href="mailto:privacy@hackerroll.com" className="text-[#ff6600] hover:underline">
                privacy@hackerroll.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
