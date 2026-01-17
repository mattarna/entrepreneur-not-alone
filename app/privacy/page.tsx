import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white/80 font-sans">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-white/40 mb-12 italic">Last Updated: January 16, 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              IMPRENDITORE NON SEI SOLO ETS (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and donate to our cause. We comply with the General Data Protection Regulation (GDPR) in the EU and relevant US privacy laws (including CCPA/CPRA where applicable).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We collect information that you provide directly to us when you make a donation:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact Information (Name, email address).</li>
              <li>Payment Information (Processed securely via Stripe; we do not store your credit card details).</li>
              <li>Tax Information (If required for tax-deductible receipts in Italy).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">3. Legal Basis for Processing (GDPR)</h2>
            <p className="leading-relaxed">
              For users in the European Union, we process your data under the following legal bases:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li><strong>Performance of a contract:</strong> To process your donation.</li>
              <li><strong>Legal obligation:</strong> For tax and accounting purposes.</li>
              <li><strong>Legitimate interests:</strong> To provide updates on our impact (where permitted).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">4. US Privacy Rights</h2>
            <p className="leading-relaxed">
              Depending on your state of residence (e.g., California), you may have the right to request access to, deletion of, or portability of your personal data. We do not &quot;sell&quot; your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We use <strong>Stripe</strong> for payment processing. Their use of your personal information is governed by their Privacy Policy. We may also use analytics tools (like Google Analytics) to understand website traffic.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your information for as long as necessary to fulfill the purposes outlined in this policy or as required by Italian law for tax and reporting purposes (typically 10 years).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#5EEAD4] mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> info@imprenditorenonseisolo.it
              <br />
              <strong>Address:</strong> Via dell’Annunciata 31, 20121 - Milano, Italy
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}




