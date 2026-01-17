import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-white/80 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Cookie Policy</h1>
        <p className="text-sm text-white/40 mb-12 italic">Last Updated: January 16, 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">1. What are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information. When you visit our website, we may collect information from you automatically through cookies or similar technology.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">2. How We Use Cookies</h2>
            <p className="leading-relaxed">
              We use cookies in a range of ways to improve your experience on our website, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Keeping the website secure and functional.</li>
              <li>Understanding how you use our website (Analytics).</li>
              <li>Processing donations securely via Stripe.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <p><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., Stripe security cookies).</p>
              <p><strong>Performance Cookies:</strong> Help us understand traffic patterns and improve the site layout.</p>
              <p><strong>Functional Cookies:</strong> Remember your preferences (e.g., currency settings).</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">4. Managing Cookies</h2>
            <p className="leading-relaxed">
              You can set your browser not to accept cookies. However, in a few cases, some of our website features may not function as a result. For users in the EU, we provide a cookie consent banner to manage your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">5. Third-Party Cookies</h2>
            <p className="leading-relaxed">
              Our website may use third-party services like Stripe for payments and Google Analytics for traffic data. These third parties may set their own cookies over which we have no control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about our cookie policy, please contact us at:
              <br />
              <strong>Email:</strong> info@imprenditorenonseisolo.it
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}




