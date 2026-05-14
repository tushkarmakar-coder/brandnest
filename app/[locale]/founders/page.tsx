import { Metadata } from 'next'
import FounderHero from '@/components/FounderHero'
import FounderTimeline from '@/components/FounderTimeline'
import FounderStats from '@/components/FounderStats'
import FounderProfiles from '@/components/FounderProfiles'
import FounderQuote from '@/components/FounderQuote'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Story | Meet The Founders',
  description: 'The story of BrandNest — from freelancing to building a premium digital growth agency. Meet Tushar Karmakar and Simran Sharma.',
}

export default function FoundersPage() {
  return (
    <main className="bg-[#111111]">
      <FounderHero />
      <FounderTimeline />
      <FounderStats />
      <FounderProfiles />
      <FounderQuote />
      <Footer />
    </main>
  )
}
