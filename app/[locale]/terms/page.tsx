import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | BrandNest',
  description: 'Terms and conditions for using BrandNest services.',
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/terms',
    languages: {
      'en': 'https://brandnestagency.vercel.app/terms',
      'hi': 'https://brandnestagency.vercel.app/hi/terms',
    },
  },
}


export default function Terms() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-[48px] font-semibold text-[#1A1814] mb-4">Terms & Conditions</h1>
        <p className="text-[#6B6560] text-[14px] mb-12">Last Updated: April 27, 2026</p>

        <div className="space-y-8 text-[#1A1814]">
          
          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              By accessing and using this website and our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">2. License to Use</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">BrandNest grants you a limited, non-exclusive license to use our website. You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Modify or copy materials without permission</li>
              <li>Use content for commercial purposes</li>
              <li>Attempt to reverse engineer our systems</li>
              <li>Upload viruses or malicious code</li>
              <li>Violate any applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">3. Service Description</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              BrandNest provides website development, video production, AI-powered advertising, and AI tool integration. Services are provided on an as-is basis without warranties regarding continuous, error-free service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">4. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>50% advance payment required to start projects</li>
              <li>50% payment due upon project completion</li>
              <li>Invoices must be paid within 7 days</li>
              <li>Late payments may result in project suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">5. Intellectual Property Rights</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">
              Upon full payment, you will own custom work created for your project. However, we retain rights to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Template elements and pre-built components</li>
              <li>Third-party libraries and frameworks</li>
              <li>Case studies and portfolio use (with permission)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              To the fullest extent permitted by law, BrandNest will not be liable for indirect, incidental, special, or consequential damages. Our liability is limited to the amount paid for the specific service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">7. Disclaimer of Results</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              We do not guarantee specific business outcomes including search engine rankings, website traffic, sales, or conversions. Results depend on factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">8. Termination</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Either party may terminate a project with written notice. Fees paid are generally non-refundable. Work will cease upon termination.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">9. Governing Law</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.
            </p>
          </section>

          <section className="bg-[#F4F2ED] p-6 rounded border border-[#E8E4DC]">
            <h2 className="font-display text-[24px] font-semibold mb-3">Questions?</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Contact us at brandnest.team@gmail.com or WhatsApp: brandnest.team@gmail.com
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
