'use client'
import { motion } from 'framer-motion'
import { Store, Utensils, ShoppingBag, Calendar, Layout, Briefcase } from 'lucide-react'

const VERTICALS = [
  {
    icon: Store,
    title: 'B2B Marketplaces',
    description: 'IndiaMART-style platforms, wholesale, trade portals'
  },
  {
    icon: Utensils,
    title: 'Food & Restaurant',
    description: 'Cloud kitchens, cafés, multi-outlet chains'
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Multi-vendor stores, D2C brands, inventory systems'
  },
  {
    icon: Calendar,
    title: 'Event & Hospitality',
    description: 'Booking platforms, wedding/event planning'
  },
  {
    icon: Layout,
    title: 'SaaS & Tools',
    description: 'AI-powered job boards, campaign tools, dashboards'
  },
  {
    icon: Briefcase,
    title: 'Local Business',
    description: 'Professional websites for SMBs, retail, services'
  }
]

export default function Industries() {
  return (
    <section id="industries" className="bg-[#111111] py-[110px] px-6 md:py-[120px] border-t border-[rgba(255,92,0,0.1)]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-16 text-center"
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-5 font-medium">Industries We Serve</p>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] font-extrabold text-[#F5F5F5] leading-[1.1] tracking-tight">
            Tailored Solutions for Every <em className="italic text-transparent" style={{ WebkitTextStroke: '1.5px #F5F5F5' }}>Sector</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERTICALS.map((v, idx) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111111] p-8 rounded-xl border border-[rgba(255,92,0,0.1)] hover:border-[#FF5C00]/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255,92,0,0.08) 0%, transparent 70%)'
                }} />

                <div className="w-12 h-12 rounded-lg bg-[rgba(255,92,0,0.05)] flex items-center justify-center mb-6 group-hover:bg-[#FF5C00] transition-colors duration-300 relative z-10">
                  <Icon size={24} className="text-[#FF5C00] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[18px] font-bold text-[#F5F5F5] mb-3 relative z-10 group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-[13px] text-[rgba(245,245,245,0.45)] leading-relaxed relative z-10 group-hover:text-[rgba(245,245,245,0.6)] transition-colors">{v.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
