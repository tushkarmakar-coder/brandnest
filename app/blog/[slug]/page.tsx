'use client'

import { useParams } from 'next/navigation'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Clock, Calendar, User, ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug)
      if (foundPost) {
        setPost(foundPost)
        const related = getRelatedPosts(slug)
        setRelatedPosts(related)
      }
      setLoading(false)
    }
  }, [slug])

  if (loading) {
    return (
      <div className="bg-[#111111] min-h-screen flex items-center justify-center">
        <div className="text-[#FF5C00]">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-[#111111] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-[36px] font-bold text-[#F5F5F5] mb-4">Article Not Found</h1>
          <p className="text-[14px] text-[rgba(245,245,245,0.6)] mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#FF7A2E] hover:text-[#FF5C00] transition-colors">
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb & Back */}
      <div className="bg-[#111111] border-b border-[rgba(255,92,0,0.1)] px-6 py-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] text-[#FF7A2E] hover:text-[#FF5C00] transition-colors uppercase tracking-wide mb-4">
            <ArrowLeft size={14} />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#111111] py-16 px-6 border-b border-[rgba(255,92,0,0.1)]">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] tracking-[0.1em] uppercase text-[#FF5C00] font-semibold border border-[rgba(255,92,0,0.3)] px-3 py-1 rounded">
              {post.category}
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold text-[#F5F5F5] mb-6 leading-[1.2] tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[rgba(245,245,245,0.5)] pb-8 border-b border-[rgba(255,92,0,0.1)]">
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#FF5C00]" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#FF5C00]" />
              {new Date(post.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#FF5C00]" />
              {post.readTime} read
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#111111] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <article className="prose-invert prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-[#F5F5F5] prose-headings:tracking-tight prose-p:text-[rgba(245,245,245,0.6)] prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#FF5C00] prose-a:hover:text-[#FF7A2E] prose-a:transition-colors prose-strong:text-[#F5F5F5] prose-strong:font-semibold prose-ul:text-[rgba(245,245,245,0.6)] prose-li:mb-3 prose-code:text-[#FF5C00] prose-code:bg-[rgba(255,92,0,0.1)] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-blockquote:border-[#FF5C00] prose-blockquote:text-[rgba(245,245,245,0.6)]">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/^#/gm, '#').replace(/\n/g, '\n') }} />
          </article>

          {/* Article Footer CTA */}
          <div className="mt-12 p-8 rounded-lg border border-[rgba(255,92,0,0.15)] bg-[rgba(255,92,0,0.02)] backdrop-blur-sm">
            <h3 className="font-display text-[24px] font-bold text-[#F5F5F5] mb-3">Ready to implement these strategies?</h3>
            <p className="text-[13px] text-[rgba(245,245,245,0.6)] mb-6">
              Get expert guidance from our team. We'll help you build the right solutions for your business.
            </p>
            <a href="#consultation" className="inline-flex items-center gap-2 bg-[#FF5C00] text-[#111] px-9 py-3.5 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
              Get Free Consultation
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#111111] py-16 px-6 border-t border-[rgba(255,92,0,0.1)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-[32px] font-bold text-[#F5F5F5] mb-12 tracking-tight">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="p-6 rounded-lg border border-[rgba(255,92,0,0.1)] bg-[#1A1A1A] hover:border-[rgba(255,92,0,0.3)] hover:bg-[#161616] transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                      
                      {/* Top glow */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#FF5C00] font-semibold mb-3">
                        {relatedPost.category}
                      </span>
                      
                      <h3 className="font-display text-[18px] font-bold text-[#F5F5F5] mb-2 leading-[1.3] group-hover:text-[#FF5C00] transition-colors line-clamp-3">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-[12px] text-[rgba(245,245,245,0.5)] mb-4 flex-grow line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[11px] text-[#FF7A2E] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#111111] py-16 px-6 border-t border-[rgba(255,92,0,0.1)]">
        <div className="max-w-4xl mx-auto text-center p-12 rounded-lg border border-[rgba(255,92,0,0.15)] bg-[rgba(255,92,0,0.02)]">
          <h2 className="font-display text-[36px] font-bold text-[#F5F5F5] mb-4">
            Start Your Next Project Today
          </h2>
          <p className="text-[14px] text-[rgba(245,245,245,0.6)] mb-8 max-w-[600px] mx-auto">
            BrandNest specializes in building websites, AI tools, and digital marketing strategies that drive real business results.
          </p>
          <a href="#consultation" className="inline-flex items-center gap-2 bg-[#FF5C00] text-[#111] px-10 py-3.5 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
            Get Free Consultation
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
