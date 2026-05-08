import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'


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
    default: 'Marketplace & Platform Development Agency India | BrandNest',
    template: '%s | BrandNest'
  },
  description: 'BrandNest builds B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders. Based in Noida, serving pan-India & global. Starting ₹25,000.',
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
    title: 'Marketplace & Platform Development Agency India | BrandNest',
    description: 'BrandNest builds B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders. Starting ₹25,000.',
    url: 'https://brandnestagency.vercel.app',
    siteName: 'BrandNest',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrandNest - Website Development & AI Agency India' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Marketplace & Platform Development Agency India', 
    description: 'B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders.',
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
  verification: { google: 'googledb9e7856a7c5812f' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-[#FAFAF8]">
        <Navbar />
        {children}
        <WhatsAppFloat />

      </body>
    </html>
  )
}
