import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | BrandNest',
  description: 'Our privacy policy explains how BrandNest collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/privacy-policy',
    languages: {
      'en': 'https://brandnestagency.vercel.app/privacy-policy',
      'hi': 'https://brandnestagency.vercel.app/hi/privacy-policy',
    },
  },
}


export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-[48px] font-semibold text-[#1A1814] mb-4">Privacy Policy</h1>
        <p className="text-[#6B6560] text-[14px] mb-12">Last Updated: April 27, 2026</p>

        <div className="space-y-8 text-[#1A1814]">
          
          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">1. Introduction</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              BrandNest is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website brandnest.in and use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-[18px] mb-3 mt-6">Personal Information You Provide:</h3>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Contact information (name, email, phone, company)</li>
              <li>Project details and service preferences</li>
              <li>Payment and billing information</li>
              <li>Communication history and inquiries</li>
              <li>Any documents or files shared with us</li>
            </ul>
            <h3 className="font-semibold text-[18px] mb-3 mt-6">Automatically Collected Information:</h3>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Browser type and IP address</li>
              <li>Pages visited and time spent on site</li>
              <li>Referral source and device information</li>
              <li>Cookies and tracking pixels</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and support requests</li>
              <li>Process payments and send invoices</li>
              <li>Send marketing communications (with consent)</li>
              <li>Analyze site usage and optimize experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">4. Data Security</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information. However, no method of transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[28px] font-semibold mb-4">5. Your Rights</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.8] text-[#6B6560]">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="text-[15px] leading-[1.8] text-[#6B6560] mt-3">
              Contact us at brandnest.team@gmail.com to exercise these rights.
            </p>
          </section>

          <section className="bg-[#F4F2ED] p-6 rounded border border-[#E8E4DC]">
            <h2 className="font-display text-[24px] font-semibold mb-3">Contact Us</h2>
            <p className="text-[15px] leading-[1.8] text-[#6B6560]">
              Email: brandnest.team@gmail.com | WhatsApp: +91-7894935653 | Noida, India
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
