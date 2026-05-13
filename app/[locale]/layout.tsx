import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
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
    default: 'BrandNest | AI-Powered Digital Agency',
    template: '%s | BrandNest'
  },
  description: 'BrandNest is an AI-powered digital agency building B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders. Based in Noida, serving pan-India & global. Starting ₹25,000.',
  keywords: [
    "AI-powered digital agency India",
    "marketplace development agency India",
    "B2B marketplace development Noida",
    "multi-vendor platform development India",
    "custom dashboard development Delhi",
    "restaurant website development India",
    "Swiggy-style ordering platform",
    "WareXhub marketplace",
    "cloud kitchen website India",
    "SaaS development Noida",
    "website development agency Noida",
    "web development company Delhi NCR"
  ],
  openGraph: {
    title: 'BrandNest | AI-Powered Digital Agency',
    description: 'BrandNest is an AI-powered digital agency building B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders. Starting ₹25,000.',
    url: 'https://brandnestagency.vercel.app',
    siteName: 'BrandNest',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'BrandNest - AI-Powered Digital Agency' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'BrandNest | AI-Powered Digital Agency', 
    description: 'AI-powered digital agency building B2B marketplaces, multi-vendor platforms, SaaS dashboards, and full-stack websites for Indian founders.',
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  alternates: { 
    canonical: 'https://brandnestagency.vercel.app',
    languages: {
      'en': 'https://brandnestagency.vercel.app/',
      'hi': 'https://brandnestagency.vercel.app/hi/',
    },
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
              "@type": "ProfessionalService",
              "name": "BrandNest",
              "description": "B2B Marketplace & Platform Development Agency India",
              "url": "https://brandnestagency.vercel.app",
              "telephone": "+917894935653",
              "email": "brandnest.team@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "areaServed": "India",
              "priceRange": "₹₹",
              "sameAs": [
                "https://instagram.com/brandnest",
                "https://linkedin.com/company/brandnest"
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#FAFAF8]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
