'use client'
import { motion } from 'framer-motion'
import { Code2, Video, Zap, Sparkles, BarChart2, Globe, Users } from 'lucide-react'
import { useState } from 'react'
import DetailModal from './DetailModal'
import { SERVICE_DETAILS } from '@/lib/serviceDetails'

const SERVICES = [
  { num: '01', icon: Globe, title: 'Website & Online Store Development', description: 'B2B marketplaces, multi-vendor platforms, buyer/seller dashboards, admin panels with approval workflows. End-to-end IndiaMART-style solutions.' },
  { num: '02', icon: Code2, title: 'Professional Business Websites', description: 'Custom websites fully functional and operational with hosting, deployment, SEO, and 24/7 support. ✓ Custom Food Ordering Platforms — Zero Swiggy/Zomato Commission' },
  { num: '03', icon: Video, title: 'Video Production & Reels', description: 'Brand films, commercials, YouTube ads — AI-accelerated workflow, 4K delivery.' },
  { num: '04', icon: Zap, title: 'ADs Created through AI Tools', description: 'Google, Meta & YouTube campaigns with AI optimization for maximum ROI.' },
  { num: '05', icon: Sparkles, title: 'AI Tools & Business Automation', description: 'Custom GPT-4 / Claude chatbots, workflow automation, and intelligent analytics.' },
  { num: '06', icon: Users, title: 'Influencer Marketing Campaigns', description: 'Data-driven influencer partnerships, campaign management, content creation, and ROI tracking.' },
  { num: '07', icon: BarChart2, title: 'SEO & Google Ranking', description: 'Technical SEO, Core Web Vitals, content strategy to rank and convert.' },
  { num: '08', icon: Globe, title: 'Brand Identity & UI/UX', description: 'Logo, visual identity, Figma design systems — cohesive brand from day one.' },
]


import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Sections')
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)
  const selectedService = SERVICE_DETAILS.find(s => s.id === selectedServiceId)

  return (
    <>
      <section id="services" className="bg-[#111111] py-[110px] px-6 md:py-[120px] border-t border-[rgba(255,92,0,0.1)]">
        <div className="max-w-7xl mx-auto">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-5 flex items-center gap-3 font-medium">
              <span className="w-7 h-px bg-[#FF5C00]" />
              What We Offer
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold text-[#F5F5F5] leading-[1.05] tracking-tight max-w-[560px]">
              {t('services').split('Growth')[0]}
              <em className="italic text-transparent" style={{ WebkitTextStroke: '1.5px #F5F5F5' }}>{t('services').includes('Growth') ? 'Growth' : ''}</em>
              {t('services').split('Growth')[1] || ''}
            </h2>
          </motion.div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[rgba(255,92,0,0.1)]" style={{ gap: '1px', background: 'rgba(255,92,0,0.1)' }}>
            {SERVICES.map((svc, idx) => {
              const Icon = svc.icon
              const serviceDetail = SERVICE_DETAILS.find(s => s.title === svc.title)
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  className="bg-[#111111] p-10 group hover:bg-[#161616] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at top right, rgba(255,92,0,0.15) 0%, transparent 80%)'
                  }} />

                  {/* Top orange line on hover */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                  <p className="text-[11px] tracking-[0.1em] text-[rgba(245,245,245,0.22)] mb-6 font-display relative z-10">{svc.num}</p>
                  <Icon size={24} className="text-[#FF5C00] mb-5 group-hover:text-[#FF7A2E] transition-colors relative z-10" strokeWidth={1.5} />
                  <h3 className="font-display text-[19px] font-bold text-[#F5F5F5] mb-3 leading-snug tracking-tight relative z-10 group-hover:text-white transition-colors">{svc.title}</h3>
                  <p className="text-[13px] text-[rgba(245,245,245,0.42)] leading-[1.8] mb-6 relative z-10 group-hover:text-[rgba(245,245,245,0.55)] transition-colors">{svc.description}</p>

                  {/* Learn More / See Live Example Link */}
                  {svc.num === '01' ? (
                    <a
                      href="#work"
                      className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#FF7A2E] font-semibold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                    >
                      See Live Example →
                    </a>
                  ) : (
                    <div
                      onClick={() => serviceDetail && setSelectedServiceId(serviceDetail.id)}
                      className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#FF7A2E] font-semibold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                    >
                      Learn More →
                    </div>
                  )}
                </motion.div>

              )
            })}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,92,0,0.1)] border-t-0" style={{ gap: '1px', background: 'rgba(255,92,0,0.1)' }}>
            {[['50+', 'Projects Delivered'], ['₹25K–₹2L', 'Project Budgets'], ['Pan India', '& Global'], ['⭐ 4.9', 'Google Rating']].map(([num, label]) => (
              <div key={label} className="bg-[#111111] px-2 sm:px-4 md:px-8 py-8 md:py-10 flex flex-col justify-center items-center text-center hover:bg-[#161616] transition-colors">
                <p className="font-display text-[26px] sm:text-[32px] md:text-[46px] font-extrabold text-[#FF5C00] leading-[1.1] mb-2 tracking-tight whitespace-nowrap">{num}</p>
                <p className="text-[10px] sm:text-[11px] text-[rgba(245,245,245,0.35)] tracking-[0.05em] sm:tracking-[0.1em] uppercase">{label}</p>
              </div>
            ))}
          </div>

          {/* Pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-10 rounded-lg border border-[rgba(255,92,0,0.15)] bg-[rgba(255,92,0,0.02)] backdrop-blur-sm text-center"
          >
            <p className="font-display text-[32px] font-bold text-[#F5F5F5] mb-4">
              <span className="text-[#FF5C00]">Starting from ₹25,000</span>
            </p>
            <p className="text-[13px] text-[rgba(245,245,245,0.6)] mb-6 max-w-[500px] mx-auto">
              Custom solutions tailored to your business goals. From websites to AI tools, we deliver premium results at competitive prices.
            </p>
            <a href="#consultation" className="inline-flex items-center gap-2 bg-[#FF5C00] text-[#111] px-9 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
              Get Custom Quote
            </a>
          </motion.div>

        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <DetailModal
          isOpen={!!selectedServiceId}
          onClose={() => setSelectedServiceId(null)}
          title={selectedService.title}
          description={selectedService.description}
          detailedContent={selectedService.detailedContent}
          deliverables={selectedService.deliverables}
          whyChoose={selectedService.whyChoose}
          packages={selectedService.packages}
          faq={selectedService.faq}
        >
          {/* Fallback content if needed */}
          <div className="space-y-6">
            {selectedService.detailedContent && (
              <div className="prose prose-invert max-w-none">
                <div className="text-[#F5F5F5] text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedService.detailedContent}
                </div>
              </div>
            )}
          </div>
        </DetailModal>
      )}
    </>
  )
}
