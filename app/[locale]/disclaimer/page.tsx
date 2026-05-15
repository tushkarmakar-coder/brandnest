import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | BrandNest',
  description: 'Legal disclaimer for BrandNest website and services.',
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/disclaimer',
    languages: {
      'en': 'https://brandnestagency.vercel.app/disclaimer',
      'hi': 'https://brandnestagency.vercel.app/hi/disclaimer',
    },
  },
}


export default function Disclaimer() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-[48px] font-semibold text-[#1A1814] mb-4">Disclaimer</h1>
        <p className="text-[#6B6560] text-[14px] mb-12">Last Updated: April 27, 2026</p>

        <div className="space-y-8 text-[#1A1814]">
          
          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">1. General Disclaimer</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Information provided on this website is for general informational purposes only. BrandNest makes no representations or warranties about completeness, accuracy, reliability, or suitability of information, products, or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">2. As-Is Basis</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">
              All content, services, and products are provided on an as-is basis. BrandNest disclaims all warranties, express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">3. Limitation of Liability</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">
              BrandNest shall not be liable for indirect, incidental, special, consequential, or punitive damages, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Loss of revenue or profits</li>
              <li>Loss of business opportunity</li>
              <li>Loss of data or information</li>
              <li>Business interruption</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">4. No Warranty of Results</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              BrandNest does not guarantee any specific outcomes, including search engine rankings, website traffic, sales, conversions, or advertising performance. Business results depend on many factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">5. Third-Party Links & Services</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Our website may contain links to third-party sites. BrandNest is not responsible for content, accuracy, security, privacy practices, or any damages from third-party services. Review their terms before use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">6. User Content Responsibility</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              You are solely responsible for any content you provide or upload. BrandNest is not liable for copyright infringement, offensive content, or any claims related to your materials.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">7. Website Availability</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              We do not guarantee uninterrupted website availability, error-free operation, timely updates, or security against all attacks. We may perform maintenance or suspend services without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">8. Professional Advice Disclaimer</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Information provided by BrandNest does not constitute legal, financial, medical, tax, or business advice. Always consult with qualified professionals before making decisions based on our recommendations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">9. Compliance & Indemnification</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              You agree to indemnify BrandNest from any claims, damages, or expenses arising from your use of services, violation of these terms, your content, or infringement of third-party rights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">10. Governing Law</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              This disclaimer is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.
            </p>
          </section>

          <section className="bg-[#F4F2ED] p-6 rounded border border-[#E8E4DC]">
            <h2 className="font-display text-[24px] font-semibold mb-3">Questions?</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Contact us at brandnest.team@gmail.com | WhatsApp: +91-7894935653 | Noida, India
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
