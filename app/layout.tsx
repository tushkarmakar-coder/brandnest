import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

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
    default: 'BrandNest | AI-Powered Digital Agency — Websites, Video & Ads India',
    template: '%s | BrandNest'
  },
  description: 'BrandNest is a premium AI-powered digital agency across India. Professional developers build full-stack websites with hosting & deployment, AI-enhanced video ads, performance campaigns & AI tools. Free consultation.',
  keywords: [
    'digital marketing agency Delhi',
    'website development company Noida',
    'AI digital agency India',
    'video production agency India',
    'commercial ads agency Delhi',
    'full stack web development Delhi',
    'best marketing agency Noida',
    'AI integration agency India',
    'website development agency India',
    'performance marketing agency India',
    'Next.js development agency Delhi',
    'brand identity agency Noida'
  ],
  openGraph: {
    title: 'BrandNest | AI-Powered Digital Agency — India',
    description: 'Premium digital agency — full-stack websites, AI video production, commercial ads & AI tools.',
    url: 'https://brandnestagency.vercel.app',
    siteName: 'BrandNest',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrandNest Digital Agency India' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'BrandNest | AI-Powered Digital Agency', 
    description: 'Websites, video ads & AI tools. India.',
    images: ['/og-image.jpg'] 
  },
  robots: { 
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      'max-image-preview': 'large' 
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
      <body className="bg-[#FAFAF8]">{children}</body>
    </html>
  )
}
