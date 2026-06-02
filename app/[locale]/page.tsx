import HeroThree from '@/components/HeroThree'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyUs from '@/components/WhyUs'
import AISection from '@/components/AISection'
import DemosTeaser from '@/components/DemosTeaser'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PricingSection from '@/components/PricingSection'
import ConsultationSection from '@/components/ConsultationSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import Industries from '@/components/Industries'
import FounderTeaser from '@/components/FounderTeaser'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BrandNest | AI Powered Marketing & Website Development",
  description: "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Grow your business online fast.",
  alternates: {
    canonical: 'https://brandnestagency.vercel.app',
    languages: {
      'en': 'https://brandnestagency.vercel.app',
      'hi': 'https://brandnestagency.vercel.app/hi',
    },
  },
}

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://brandnestagency.vercel.app/#business',
        name: 'BrandNest Digital Agency',
        description: "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Websites, SEO, Ads & AI Tools. Grow your business online fast.",
        url: 'https://brandnestagency.vercel.app',
        telephone: 'brandnest.team@gmail.com',
        email: 'brandnest.team@gmail.com',
        address: { 
          '@type': 'PostalAddress', 
          streetAddress: 'Sec-16B, Noida Extension',
          addressLocality: 'Greater Noida', 
          addressRegion: 'Uttar Pradesh', 
          postalCode: '201308',
          addressCountry: 'IN' 
        },
        geo: { '@type': 'GeoCoordinates', latitude: '28.5996', longitude: '77.4475' },
        openingHours: 'Mo-Sa 09:00-19:00',
        priceRange: '₹25,000 - ₹5,000,000',
        areaServed: ['Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'India', 'United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia', 'Singapore', 'Worldwide'],
        sameAs: [
          'https://instagram.com/thebrandnestofficial', 
          'https://linkedin.com/company/brandnest',
          'https://linktr.ee/thebrandnestofficial'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Agency Services & Solutions',
          itemListElement: [
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Custom Website Development', 
                description: 'High-performance, custom full-stack website development using React, Next.js, and modern web technologies for businesses, startups, and enterprises.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'B2B Marketplace & Multi-Vendor Platforms', 
                description: 'Custom B2B marketplaces, multi-vendor e-commerce platforms, and complex transactional web applications tailored for Indian and global founders.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'SaaS Dashboard Development', 
                description: 'Bespoke SaaS web application development, custom admin panels, analytics dashboards, and scalable cloud software solutions.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Cloud Kitchen & Restaurant Ordering Platforms', 
                description: 'Swiggy-style direct food ordering platforms, restaurant websites, and cloud kitchen management web apps with zero commission structures.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Commercial Video Production & Brand Films', 
                description: 'End-to-end commercial video production, AI-enhanced brand films, promotional video ads, and high-converting video marketing assets.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Performance Marketing & Commercial Ads', 
                description: 'ROI-focused digital advertising campaigns across Google Ads, Meta (Facebook & Instagram) Ads, and YouTube to drive lead generation and sales.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Influencer Marketing', 
                description: 'Data-driven influencer marketing campaigns, creator partnerships, and brand collaborations for maximum reach and engagement.' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'AI Tool Integration & Automation', 
                description: 'Custom AI workflow automation, chatbot development, and generative AI tool integration to increase business efficiency.' 
              } 
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { 
            '@type': 'Question', 
            name: 'How much does a website cost in Delhi?', 
            acceptedAnswer: { 
              '@type': 'Answer', 
              text: 'At BrandNest, website packages start from ₹25,000 for landing pages to ₹2,00,000+ for full e-commerce or SaaS platforms. We offer transparent pricing with no hidden costs.' 
            } 
          },
          { 
            '@type': 'Question', 
            name: 'How long does it take to build a website?', 
            acceptedAnswer: { 
              '@type': 'Answer', 
              text: 'A standard business website takes 2–3 weeks. Complex full-stack applications take 4–8 weeks. AI tools help us deliver 3x faster than traditional agencies.' 
            } 
          },
          { 
            '@type': 'Question', 
            name: 'Do you work with startups?', 
            acceptedAnswer: { 
              '@type': 'Answer', 
              text: 'Yes! We love working with startups. We offer flexible payment plans and MVP-focused development to help early-stage companies launch quickly.' 
            } 
          },
          { 
            '@type': 'Question', 
            name: 'What makes BrandNest different?', 
            acceptedAnswer: { 
              '@type': 'Answer', 
              text: 'We are an AI-first agency. Every project — from websites to video ads — uses cutting-edge AI tools. This means faster delivery, lower cost, and higher quality for our clients.' 
            } 
          },
        ]
      }
    ]
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroThree />
      <TrustBar />
      
      {/* 1. What we do */}
      <Services />
      
      {/* 2. PROOF: Our Best Work (Moved up!) */}
      <DemosTeaser />
      <Portfolio />
      
      {/* 3. Who we serve & How we do it better */}
      <Industries />
      <AISection />
      <WhyUs />
      <Process />
      
      {/* 4. Social Proof & Team */}
      <Testimonials />
      <FounderTeaser />
      
      {/* 5. The Offer / Pricing (Moved down to build value first) */}
      <PricingSection />
      <FAQ />
      
      {/* 6. Closing */}
      <ConsultationSection />
      <CTABanner />
      <Footer />
    </>
  )
}

