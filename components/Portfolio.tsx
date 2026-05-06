'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { useState } from 'react'
import DetailModal from './DetailModal'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Littiwale',
    subtitle: 'Cloud Kitchen Website',
    problem: 'Cloud kitchen startup needed a professional online presence to attract customers and enable online ordering.',
    solution: 'Built full-stack e-commerce website with real-time order tracking, payment integration (Razorpay), and AI-powered recommendation engine.',
    result: '200% increase in online orders within 3 months. Average order value increased by 35%.',
    image: 'bg-gradient-to-br from-orange-600 to-red-600',
    color: '#FF5C00'
  },
  {
    id: 2,
    title: 'Chaiwale',
    subtitle: 'Café Website – Rohini, Delhi',
    problem: 'Local café wanted to increase foot traffic and build online presence for delivery orders.',
    solution: 'Created responsive website with Swiggy/Zomato integration, Instagram feed display, reservation system, and mobile app landing page.',
    result: '150% increase in delivery orders. 45% of new customers discovered via online presence.',
    image: 'bg-gradient-to-br from-amber-500 to-orange-600',
    color: '#FF7A2E'
  },
  {
    id: 3,
    title: 'AI Job Search Tool',
    subtitle: 'Career Intelligence Platform',
    problem: 'Job seekers struggled to find relevant opportunities with poor match rates and time-consuming applications.',
    solution: 'Developed AI-powered job matching platform using GPT-4 and Claude API. Auto-generates tailored cover letters, tracks applications, and analyzes job trends.',
    result: '100+ active users. 3.5× faster job search process. 65% increase in interview callback rates for users.',
    image: 'bg-gradient-to-br from-blue-600 to-purple-600',
    color: '#3B82F6'
  },
  {
    id: 4,
    title: 'AI Influencer Campaign Tool',
    subtitle: 'Marketing Automation Platform',
    problem: 'Brands and agencies wasted time manually managing influencer campaigns with poor ROI tracking.',
    solution: 'Built AI platform that identifies micro-influencers, automates outreach, generates campaign briefs using AI, and provides real-time ROI analytics.',
    result: '200+ campaigns managed. 40% reduction in campaign setup time. 3× improvement in ROI tracking accuracy.',
    image: 'bg-gradient-to-br from-pink-600 to-rose-600',
    color: '#EC4899'
  },
  {
    id: 5,
    title: 'Surprise Planner',
    subtitle: 'Romantic Event Planning Platform',
    problem: 'Couples and loved ones struggled to plan memorable special occasions - anniversaries, proposals, birthdays. Manual coordination across vendors, budgeting confusion, and no way to capture and share those special moments on social media.',
    solution: 'Built a full-stack event planning platform with 500+ pre-vetted vendor marketplace, real-time couple collaboration dashboard, AI-powered social media integration for viral content, automated video montage creation, and budget tracking. Features romantic templates for anniversaries, proposals, girlfriend birthdays, and husband-wife reconciliation surprises.',
    result: '500+ events planned. 4.8/5 rating. 60% repeat customers. 80+ active couples monthly. Hundreds of memorable moments created and shared.',
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
    color: '#9333EA',
    romanticFeatures: [
      'Wife surprise & reconciliation planning',
      'Girlfriend birthday special packages',
      'Romantic dinner coordination',
      'Proposal planning with expert guidance',
      'Anniversary celebration templates',
      'Viral content creation tools (TikTok, Instagram Reels)',
      'AI video montage from friends/family',
      'Social media calendar & hashtag generator',
      'Couples collaboration dashboard',
      'Vendor comparison & booking',
      'Budget management & expense tracking',
      'Event countdown & sharing features'
    ]
  },
  {
    id: 6,
    title: 'Multi-Vendor Marketplace',
    subtitle: 'E-Commerce Platform',
    problem: 'Small sellers needed a united platform to sell alongside established retailers with low overhead costs.',
    solution: 'Developed scalable multi-vendor marketplace with vendor dashboard, commission management, real-time inventory sync, automated payouts, and dispute resolution.',
    result: '150+ active vendors. 45% efficiency improvement. Strong vendor retention & satisfaction.',
    image: 'bg-gradient-to-br from-green-600 to-emerald-600',
    color: '#059669'
  }
]

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
          </div>
        )}
      </DetailModal>
    </>
  )
}
