import { Metadata } from 'next'
import { blogPosts } from '@/lib/blog'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Latest Articles on Web Development, AI & Digital Marketing | BrandNest',
  description: 'Read articles on website development, AI tools, influencer marketing, and digital strategies for Indian businesses. SEO tips, startup growth, and agency insights.',
  keywords: ['digital marketing blog', 'web development articles', 'AI insights', 'startup growth tips'],
  alternates: {
    canonical: 'https://brandnestagency.vercel.app/blog',
    languages: {
      'en': 'https://brandnestagency.vercel.app/blog',
      'hi': 'https://brandnestagency.vercel.app/hi/blog',
    },
  },
  openGraph: {
    title: 'BrandNest Blog - Web Dev, AI & Marketing Insights',
    description: 'Expert articles on website development, AI tools, digital marketing, and business growth.',
    url: 'https://brandnestagency.vercel.app/blog',
    type: 'website',
  },
}


export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#111111] pt-32 pb-20 px-6 border-b border-[rgba(255,92,0,0.1)]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-6 inline-flex items-center gap-2 border border-[rgba(255,92,0,0.3)] px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
            Our Insights
          </p>
          <h1 className="font-display text-[clamp(42px,6vw,64px)] font-extrabold text-[#F5F5F5] leading-[1.1] mb-6 tracking-tight">
            Insights on Web Development,<br />
            <span className="text-[#FF5C00]">AI & Digital Growth</span>
          </h1>
          <p className="text-[15px] text-[rgba(245,245,245,0.6)] max-w-[600px] mx-auto leading-[1.8]">
            Expert articles to help you build better websites, leverage AI, and scale your business faster. Updated weekly.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group h-full flex flex-col cursor-pointer">
                  {/* Card */}
                  <div className="flex-grow p-8 rounded-lg border border-[rgba(255,92,0,0.1)] bg-[#1A1A1A] hover:border-[rgba(255,92,0,0.3)] hover:bg-[#161616] transition-all duration-300 relative overflow-hidden">
                    
                    {/* Top glow */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#FF5C00] font-semibold border border-[rgba(255,92,0,0.3)] px-3 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-[20px] font-bold text-[#F5F5F5] mb-3 leading-[1.3] group-hover:text-[#FF5C00] transition-colors line-clamp-3">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[13px] text-[rgba(245,245,245,0.5)] mb-6 leading-[1.7] line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-[rgba(245,245,245,0.4)] mb-6 pb-6 border-b border-[rgba(255,92,0,0.1)]">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('en-IN')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[12px] tracking-[0.08em] uppercase text-[#FF7A2E] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-20 px-6 border-t border-[rgba(255,92,0,0.1)]">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-lg border border-[rgba(255,92,0,0.15)] bg-[rgba(255,92,0,0.02)] backdrop-blur-sm">
          <h2 className="font-display text-[36px] font-bold text-[#F5F5F5] mb-4">
            Need Expert Guidance?
          </h2>
          <p className="text-[14px] text-[rgba(245,245,245,0.6)] mb-8 max-w-[600px] mx-auto leading-[1.8]">
            Our team of specialists can help you implement these strategies, build your website, leverage AI, and scale your business.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#FF5C00] text-[#111] px-10 py-3.5 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
            Get Free Consultation
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
