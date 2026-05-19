'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { useState } from 'react'
import DetailModal from './DetailModal'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Littiwale — Cloud Kitchen Platform',
    subtitle: 'Full Digital Ecosystem (Web + SMM + Ads) — Barbil, Odisha',
    problem: 'Cloud kitchen ko apna ordering system chahiye tha aur online sales badhane ke liye effective marketing aur sales strategy ki zarurat thi.',
    solution: 'Phase 1: Professional website with menu & Razorpay. Phase 2: Full-stack ordering platform. Phase 3: Integrated Social Media Marketing (SMM) and AI commercial ads to drive direct traffic and bypass commissions.',
    result: '3x increase in online orders within 3 months. Zero-commission revenue model successfully implemented. Sales strategy optimized for local market growth.',
    badge: 'Phase 2 In Progress 🔄',
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
    color: '#FF5C00'
  },
  {
    id: 2,
    title: 'Chaiwale',
    subtitle: 'Café Website + SMM + Commercial Ads — Rohini, Delhi',
    problem: 'Local café wanted to increase foot traffic and delivery sales through targeted online marketing and professional branding.',
    solution: 'Created responsive website with delivery integrations. Implemented aggressive Social Media Marketing (SMM) and produced high-converting AI commercial ads to capture local attention.',
    result: '38% total sales growth. 2.4x increase in delivery orders. Instagram reach up 3.1x in first month via targeted AI ads.',
    image: 'bg-gradient-to-br from-amber-500 to-orange-600',
    color: '#FF7A2E'
  },
  {
    id: 3,
    title: 'Desi Chulha',
    subtitle: 'Restaurant Website + AI Commercial Ad — Kendujhar, Odisha',
    problem: 'Traditional dhaba-style restaurant wanted modern online presence while keeping authentic desi brand identity intact.',
    solution: 'Built mobile-first restaurant website with full menu, online enquiry system, and Google Maps integration. Produced AI-powered commercial ad capturing authentic Indian flavours and atmosphere.',
    result: 'Brand reach increased 3x in first month via AI commercial ad. Online enquiries up 74%. Featured in local Odisha food blogs.',
    image: 'bg-gradient-to-br from-red-600 to-orange-700',
    color: '#D32F2F'
  },
  {
    id: 4,
    title: 'AI Influencer Campaign Tool',
    subtitle: 'Marketing Automation Platform',
    problem: 'Brands and agencies wasted time manually managing influencer campaigns with poor ROI tracking.',
    solution: 'Built AI platform that identifies micro-influencers, automates outreach, generates campaign briefs using AI, and provides real-time ROI analytics.',
    result: '200+ campaigns managed. 43% reduction in campaign setup time. 3.2x improvement in ROI tracking accuracy.',
    image: 'bg-gradient-to-br from-pink-600 to-rose-600',
    color: '#EC4899'
  },
  {
    id: 5,
    title: 'Surprise Planner',
    subtitle: 'Digital Surprises, Lovey-Dovey Websites & Animated Stories',
    problem: 'People wanted unique, emotional alternatives to traditional gifts—like personalized digital surprises for birthdays and anniversaries—but lacked the technical skills to create them.',
    solution: 'We crafted custom "lovey-dovey" websites, cute animated love story videos, and personalized digital surprise links designed to create unforgettable, emotional moments.',
    result: '50+ personalized digital surprises delivered successfully. 100% emotional impact and tears of joy. Highly loved and shared among couples.',
    image: 'bg-gradient-to-br from-pink-500 to-rose-500',
    color: '#E11D48',
    romanticFeatures: [
      'Custom Lovey-Dovey Websites',
      'Cute Animated Love Story Videos',
      'Personalized Birthday Surprise Links',
      'Interactive Relationship Timelines',
      'Digital Memory Vaults',
      'Secret QR Code Reveals'
    ]
  },
  {
    id: 6,
    title: 'WareXhub — B2B Multi-Vendor Marketplace',
    subtitle: 'E-Commerce Platform',
    problem: 'Small sellers needed a unified B2B platform with buyer/seller identity protection to prevent direct bypass deals.',
    solution: 'Full-stack marketplace: vendor dashboards, commission management, real-time inventory sync, buyer/seller identity protection, admin approval workflows, automated payouts, dispute resolution, DEV/UAT deployment.',
    result: '150+ active vendors onboarded. 41% operational efficiency improvement. End-to-end delivered: frontend, backend, admin panel, deployment.',
    image: 'bg-gradient-to-br from-green-600 to-emerald-600',
    color: '#059669',
    techStack: 'React / Next.js • Node.js • PostgreSQL • Razorpay • AWS / Vercel',
    quote: 'The platform handles deal flow end-to-end — buyer and seller details stay protected to prevent direct bypass.'
  },
  {
    id: 7,
    title: 'FireSlab & Innmotek',
    subtitle: 'Website Development, Redesign & Maintenance',
    problem: 'Both businesses required a unified digital strategy, performance-focused website redesigns, and the integration of automated workflows to scale operations efficiently.',
    solution: 'Delivered end-to-end digital transformation. Redesigned their platforms for optimal user experience, integrated custom AI tools, and deployed robust business automation workflows.',
    result: 'Streamlined multi-brand operations with significantly reduced manual effort. Delivered high-performing, maintainable platforms with top-tier quality and fast turnaround.',
    image: 'bg-gradient-to-br from-indigo-600 to-blue-600',
    color: '#4F46E5'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const selectedItem = PORTFOLIO_ITEMS.find(item => item.id === selectedProject)

  return (
    <>
      <section id="work" className="bg-[#111111] py-[110px] px-6 md:py-[120px] border-t border-[rgba(255,92,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-5 flex items-center gap-3 font-medium">
              <span className="w-7 h-px bg-[#FF5C00]" />
              Our Track Record
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold text-[#F5F5F5] leading-[1.05] tracking-tight max-w-[700px]">
              Selected Work That Drives Real Business <em className="italic text-transparent" style={{ WebkitTextStroke: '1.5px #F5F5F5' }}>Results</em>
            </h2>
            <p className="text-[13px] text-[rgba(245,245,245,0.5)] mt-6 max-w-[600px] leading-[1.8]">
              From SaaS platforms to local businesses, we build solutions that generate revenue and scale operations.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-[rgba(255,92,0,0.1)] bg-[#1A1A1A] hover:border-[rgba(255,92,0,0.3)] transition-all duration-300"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 ${item.image} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Top accent line */}
                <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#FF5C00] font-medium">Project #{String(item.id).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-[24px] font-bold text-[#F5F5F5] mb-1 group-hover:text-[#FF5C00] transition-colors duration-300">{item.title}</h3>
                    <p className="text-[12px] text-[rgba(245,245,245,0.4)]">{item.subtitle}</p>
                  </div>

                  {/* Problem, Solution, Result */}
                  <div className="space-y-4 flex-grow mb-6">
                    <div>
                      <p className="text-[10px] tracking-[0.08em] uppercase text-[#FF5C00] font-semibold mb-2">Problem</p>
                      <p className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.6]">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.08em] uppercase text-[#FF5C00] font-semibold mb-2">Solution</p>
                      <p className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.6]">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.08em] uppercase text-[#FF5C00] font-semibold mb-2">Result</p>
                      <p className="text-[13px] text-[#FF7A2E] leading-[1.6] font-medium">{item.result}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    onClick={() => setSelectedProject(item.id)}
                    className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#FF7A2E] font-semibold cursor-pointer group/cta opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn More
                    <ArrowUpRight size={14} className="group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-12 rounded-lg border border-[rgba(255,92,0,0.15)] bg-[rgba(255,92,0,0.02)] backdrop-blur-sm"
          >
            <p className="text-[13px] text-[rgba(245,245,245,0.6)] mb-6">
              Have a project in mind? Let{`'`}s build something remarkable together.
            </p>
            <a href="#consultation" className="inline-flex items-center gap-2 bg-[#FF5C00] text-[#111] px-10 py-3.5 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,92,0,0.3)]">
              Start Your Project
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal - Open for all projects */}
      <DetailModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedProject(null)}
        title={selectedItem?.title || ''}
        description={selectedItem?.subtitle}
        detailedContent={selectedItem?.romanticFeatures ? undefined : selectedItem?.solution}
        romanticFeatures={selectedItem?.romanticFeatures}
        results={selectedItem?.result?.split('. ').filter(r => r.trim())}
      >
        {selectedItem && (
          <div className="space-y-6">
            {/* Problem */}
            <div>
              <h3 className="text-lg font-bold text-[#FF5C00] mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-[#FF5C00]" />
                The Challenge
              </h3>
              <p className="text-[rgba(245,245,245,0.7)] leading-relaxed">{selectedItem.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-lg font-bold text-[#FF5C00] mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-[#FF5C00]" />
                Our Solution
              </h3>
              <p className="text-[rgba(245,245,245,0.7)] leading-relaxed">{selectedItem.solution}</p>
            </div>

            {/* Romantic Features (for Surprise Planner) */}
            {selectedItem.romanticFeatures && (
              <div>
                <h3 className="text-lg font-bold text-[#FF5C00] mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-[#FF5C00]" />
                  💕 Special Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedItem.romanticFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[rgba(245,245,245,0.7)]">
                      <Check size={16} className="text-[#FF5C00] flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {selectedItem.techStack && (
              <div>
                <h3 className="text-sm font-bold text-[#FF5C00] mb-2 uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.techStack.split(' • ').map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[rgba(255,92,0,0.1)] border border-[rgba(255,92,0,0.2)] rounded-full text-[11px] text-[#F5F5F5]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <h3 className="text-lg font-bold text-[#FF5C00] mb-3 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-[#FF5C00]" />
                📊 Results Achieved
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedItem.result.split('. ').map((result, idx) => (
                  <div key={idx} className="bg-[rgba(255,92,0,0.05)] border border-[rgba(255,92,0,0.1)] rounded-lg p-3">
                    <p className="text-sm text-[rgba(245,245,245,0.7)]">{result.trim()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            {selectedItem.quote && (
              <div className="mt-8 p-6 bg-[rgba(255,92,0,0.03)] border-l-4 border-[#FF5C00] italic">
                <p className="text-[15px] text-[rgba(245,245,245,0.8)] leading-relaxed">
                  &quot;{selectedItem.quote}&quot;
                </p>
              </div>
            )}

          </div>
        )}
      </DetailModal>
    </>
  )
}
