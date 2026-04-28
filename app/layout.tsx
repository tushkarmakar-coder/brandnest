import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://brandnestagency.vercel.app'),
  title: {
    default: 'Website Development Company in India | AI Digital Agency | BrandNest',
    template: '%s | BrandNest'
  },
  description: 'BrandNest is a leading AI-powered digital agency in India offering website development, AI tools, influencer marketing and performance ads. Serving Pan India & Global Clients from Delhi, Noida, Gurgaon.',
  keywords: [
    'website development company India',
    'digital marketing agency India',
    'AI agency India',
    'web development Delhi',
    'Noida website company',
    'performance marketing India',
    'AI digital agency',
    'web development Gurgaon',
    'website builder India',
    'e-commerce development India',
    'full stack web development',
    'SaaS development India',
    'influencer marketing agency India',
    'AI tools development',
    'custom web solutions India'
  ],
  openGraph: {
    title: 'Website Development Company in India | AI Digital Agency | BrandNest',
    description: 'BrandNest — Leading AI-powered digital agency in India. Full-stack websites, AI tools, influencer marketing & performance ads.',
    url: 'https://brandnestagency.vercel.app',
    siteName: 'BrandNest',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrandNest - Website Development & AI Agency India' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Website Development Company in India | AI Digital Agency', 
    description: 'Premium web development, AI tools, influencer marketing & performance ads.',
    images: ['/og-image.jpg'] 
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
    icon: '/logo.png',
    apple: '/logo.png',
  },
  alternates: { canonical: 'https://brandnestagency.vercel.app' },
  verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#FAFAF8]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
