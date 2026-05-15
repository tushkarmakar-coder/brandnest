import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Packages | Web Development, Video Production & Ads',
  description: 'Transparent pricing for premium website development, AI integration, video production, and digital marketing services. From landing pages to enterprise SaaS.',
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/pricing',
    languages: {
      'en': 'https://brandnestagency.vercel.app/pricing',
      'hi': 'https://brandnestagency.vercel.app/hi/pricing',
    },
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
