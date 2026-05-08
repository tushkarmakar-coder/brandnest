'use client'

import { useEffect } from 'react'
import HeroThree from '@/components/HeroThree'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyUs from '@/components/WhyUs'
import AISection from '@/components/AISection'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PricingSection from '@/components/PricingSection'
import ConsultationSection from '@/components/ConsultationSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import Industries from '@/components/Industries'


export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://brandnestagency.vercel.app/#business',
        name: 'BrandNest',
        description: 'AI-powered digital agency — website development, video production, commercial ads and AI integration. India.',
        url: 'https://brandnestagency.vercel.app',
        telephone: '+91-7894935653',
        email: 'brandnest.team@gmail.com',
        address: { 
          '@type': 'PostalAddress', 
          addressLocality: 'Noida', 
          addressRegion: 'Uttar Pradesh', 
          addressCountry: 'IN' 
        },
        geo: { '@type': 'GeoCoordinates', latitude: '28.6139', longitude: '77.2090' },
        openingHours: 'Mo-Sa 09:00-19:00',
        priceRange: '₹₹',
        areaServed: ['Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'India'],
        sameAs: [
          'https://instagram.com/brandnest', 
          'https://linkedin.com/company/brandnest', 
          'https://twitter.com/brandnest'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services',
          itemListElement: [
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Website Development', 
                description: 'Full stack React and Next.js website development' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Video Production', 
                description: 'AI-enhanced brand films and commercial video ads' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Commercial Ads', 
                description: 'Google, Meta and YouTube performance campaigns' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'AI Integration', 
                description: 'Custom AI tools, chatbots and workflow automation' 
              } 
            },
            { 
              '@type': 'Offer', 
              itemOffered: { 
                '@type': 'Service', 
                name: 'Influencer Marketing', 
                description: 'Data-driven influencer partnerships and campaign management' 
              } 
            },
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
      <Services />
      <Industries />

      <PricingSection />
      <Portfolio />
      <WhyUs />
      <AISection />
      <Process />
      <Testimonials />
      <FAQ />
      <ConsultationSection />
      <CTABanner />
      <Footer />
    </>
  )
}
