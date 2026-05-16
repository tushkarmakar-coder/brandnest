import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';


const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://brandnestagency.vercel.app'),
  title: {
    default: "BrandNest Digital Agency | AI Powered Marketing | Website Development ₹25k",
    template: "%s | BrandNest"
  },
  description: "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Websites, SEO, Ads & AI Tools. Grow your business online fast.",
  applicationName: 'BrandNest',
  appleWebApp: {
    title: 'BrandNest',
    statusBarStyle: 'default',
    capable: true,
  },
  keywords: [
    // Requested Headlines
    "BrandNest Digital Agency",
    "AI Powered Marketing",
    "Website Development ₹25k",
    "Grow Your Business Online",
    "SEO & Google Ads Experts",
    "Build Website In 30 Days",
    "Delhi NCR Digital Agency",
    "Start Your Online Business",
    
    // Core Branding
    "BrandNest",
    "Brandnest AI",
    "Brandnest digital agency",
    "India's first AI powered digital agency",
    "AI automation agency India",
    
    // Website Development
    "website developer India",
    "web development company Delhi NCR",
    "custom website development",
    "Next.js developer India",
    "B2B marketplace development",
    "multi-vendor platform development",
    "SaaS dashboard development",
    
    // Marketing & Ads
    "performance marketing agency India",
    "Google ads management",
    "Facebook ads agency",
    "commercial video production",
    "lead generation services",
    "web developer near me",
    "digital marketing agency near me",
    "video editor near me",
    "AI solutions for business",
    "website maker in India",
    "cheap website development India"
  ],
  openGraph: {
    title: "BrandNest Digital Agency | AI Powered Marketing",
    description: "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Grow your business online fast.",
    url: 'https://brandnestagency.vercel.app',
    siteName: 'BrandNest',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: "BrandNest Digital Agency" }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image', 
    title: "BrandNest Digital Agency | AI Powered Marketing", 
    description: "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Websites, SEO, Ads & AI Tools.",
    images: ['/logo.png'] 
  },
  robots: {
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: { google: 'googledb9e7856a7c5812f' },
}

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://brandnestagency.vercel.app/#website",
                  "url": "https://brandnestagency.vercel.app/",
                  "name": "BrandNest Digital Agency",
                  "alternateName": [
                    "BrandNest",
                    "Brandnest AI",
                    "Brandnest Digital"
                  ],
                  "description": "AI Websites, Marketing & Branding for Startups. Starting ₹25k. Grow your business online fast.",
                  "publisher": {
                    "@id": "https://brandnestagency.vercel.app/#organization"
                  },
                  "potentialAction": [{
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://brandnestagency.vercel.app/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }]
                },
                {
                  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
                  "@id": "https://brandnestagency.vercel.app/#organization",
                  "name": "BrandNest Digital Agency",
                  "url": "https://brandnestagency.vercel.app/",
                  "logo": "https://brandnestagency.vercel.app/logo.png",
                  "image": "https://brandnestagency.vercel.app/logo.png",
                  "description": "BrandNest is a premium digital agency & India's first AI-powered web development company delivering world-class B2B marketplaces, multi-vendor platforms, SaaS dashboards, custom websites, commercial video ads, and performance marketing for founders in India and globally across the world.",
                  "telephone": "+917894935653",
                  "email": "brandnest.team@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sec-16B, Noida Extension",
                    "addressLocality": "Greater Noida",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "201308",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "28.5996",
                    "longitude": "77.4475"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "Australia" },
                    { "@type": "Country", "name": "Singapore" },
                    { "@type": "Place", "name": "Worldwide" }
                  ],
                  "priceRange": "₹25,000 - ₹5,000,000",
                  "sameAs": [
                    "https://instagram.com/thebrandnestofficial",
                    "https://linkedin.com/company/brandnest",
                    "https://linktr.ee/thebrandnestofficial"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Agency Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Development",
                          "description": "Full-stack website development, B2B marketplaces, and e-commerce platforms."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Video Production",
                          "description": "Commercial ads, brand films, and AI-enhanced video editing."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Performance Marketing",
                          "description": "Google Ads, Meta Ads, and ROI-focused digital advertising."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Automation",
                          "description": "Custom AI chatbots, workflow automation, and business AI tools."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Influencer Marketing",
                          "description": "Data-driven influencer campaigns and creator partnerships."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "Service",
                  "name": "Website Development India",
                  "serviceType": "Web Design & Development",
                  "provider": { "@id": "https://brandnestagency.vercel.app/#organization" },
                  "areaServed": { "@type": "Country", "name": "India" },
                  "description": "Professional website development services near you. We build marketplaces, SaaS, and business sites."
                },
                {
                  "@type": "Service",
                  "name": "Video Editing & Production",
                  "serviceType": "Multimedia Production",
                  "provider": { "@id": "https://brandnestagency.vercel.app/#organization" },
                  "areaServed": { "@type": "Country", "name": "India" },
                  "description": "High-quality video editing and commercial ad production services near me."
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#111111]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
