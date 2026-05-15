import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | BrandNest',
  description: 'Our refund and satisfaction guarantee policy.',
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/refund-policy',
    languages: {
      'en': 'https://brandnestagency.vercel.app/refund-policy',
      'hi': 'https://brandnestagency.vercel.app/hi/refund-policy',
    },
  },
}


export default function RefundPolicy() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-[48px] font-semibold text-[#1A1814] mb-4">Refund Policy</h1>
        <p className="text-[#6B6560] text-[14px] mb-12">Last Updated: April 27, 2026</p>

        <div className="space-y-8 text-[#1A1814]">
          
          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">1. Satisfaction Guarantee</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              At BrandNest, we are committed to your satisfaction. If you are not satisfied with deliverables, we will work with you to address concerns.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">2. Refund Eligibility</h2>
            <h3 className="font-semibold text-[18px] mb-3 mt-6">Refunds are available if:</h3>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Work has not commenced after 7 days of payment</li>
              <li>BrandNest fails to deliver services as agreed</li>
              <li>Severe project failures caused by our negligence</li>
              <li>Service cancelled before 25% completion</li>
            </ul>

            <h3 className="font-semibold text-[18px] mb-3 mt-6">Refunds are NOT available for:</h3>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Change of mind after 25% completion</li>
              <li>Dissatisfaction with creative direction</li>
              <li>Third-party service failures</li>
              <li>Delays caused by client feedback</li>
              <li>Services already delivered and accepted</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">3. Revision Policy</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              All quotes include 2-3 revision rounds. Additional revisions are charged at 2,500 per round. We will work to refine deliverables within the agreed scope.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">4. Partial Refund Terms</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">Based on project completion stage:</p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>0-25% Complete: 80% refund (20% cancellation fee)</li>
              <li>25-50% Complete: 50% refund (50% completion fee)</li>
              <li>50-75% Complete: 25% refund (75% work fee)</li>
              <li>75%+ Complete: No refund (final payment required)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">5. Website Performance Clause</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              We build performant, SEO-optimized websites. However, we cannot guarantee search engine rankings, sales conversions, or server uptime. These depend on factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">6. Refund Request Process</h2>
            <ol className="list-decimal list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Submit detailed email to brandnest.team@gmail.com with specific issues and screenshots</li>
              <li>We will review within 5 business days</li>
              <li>Approved refunds processed within 10 business days</li>
              <li>Refunds issued via original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">7. Processing Timeframes</h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Refund requests: Must be submitted within 30 days of completion</li>
              <li>Review period: 5 business days</li>
              <li>Processing time: 10 business days after approval</li>
              <li>Bank transfer: May take additional 2-3 business days</li>
            </ul>
          </section>

          <section className="bg-[#F4F2ED] p-6 rounded border border-[#E8E4DC]">
            <h2 className="font-display text-[24px] font-semibold mb-3">Need Help?</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              We are committed to your satisfaction. Contact us immediately at brandnest.team@gmail.com or WhatsApp: +91-7894935653
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
