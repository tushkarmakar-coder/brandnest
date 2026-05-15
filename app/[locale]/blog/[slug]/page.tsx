import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/blog'
import BlogPostClient from './BlogPostClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { slug, locale } }: { params: { slug: string, locale: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  const baseUrl = 'https://brandnestagency.vercel.app'
  
  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `${baseUrl}${locale === 'en' ? '' : '/hi'}/blog/${slug}`,
      languages: {
        'en': `${baseUrl}/blog/${slug}`,
        'hi': `${baseUrl}/hi/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      url: `${baseUrl}${locale === 'en' ? '' : '/hi'}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return <BlogPostClient slug={slug} />
}
