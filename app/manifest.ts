import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BrandNest Digital Agency',
    short_name: 'BrandNest',
    description: 'AI Websites, Marketing & Branding for Startups. Starting ₹25k.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#FF5C00',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
