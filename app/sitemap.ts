import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brandnestagency.vercel.app'

  const locales = ['', '/hi']
  
  // Define all static pages that exist in both locales
  const pages = [
    '',
    '/pricing',
    '/blog',
    '/founders',
    '/disclaimer',
    '/privacy-policy',
    '/refund-policy',
    '/terms',
  ]

  const staticRoutes = locales.flatMap(locale => 
    pages.map(page => ({
      url: `${baseUrl}${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: (page === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: page === '' ? 1.0 : (page === '/founders' ? 0.9 : 0.8),
    }))
  )

  const blogRoutes = locales.flatMap(locale => 
    blogPosts.map(post => ({
      url: `${baseUrl}${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: post.slug === 'build-b2b-marketplace-india' ? 0.9 : 0.7,
    }))
  )

  return [...staticRoutes, ...blogRoutes]
}

