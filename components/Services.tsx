'use client'
import { motion } from 'framer-motion'
import { Code2, Video, Zap, Sparkles, BarChart2, Globe } from 'lucide-react'

const SERVICES = [
  { num: '01', icon: Code2, title: 'Full Stack Web Development', description: 'Custom websites fully functional and operational with hosting, deployment, SEO, and 24/7 support.' },
  { num: '02', icon: Video, title: 'AI-Enhanced Video Production', description: 'Brand films, commercials, YouTube ads — AI-accelerated workflow, 4K delivery.' },
  { num: '03', icon: Zap, title: 'AI-Powered Commercial Ads', description: 'Google, Meta & YouTube campaigns with AI optimization for maximum ROI.' },
  { num: '04', icon: Sparkles, title: 'AI Tools & Automation', description: 'Custom GPT-4 / Claude chatbots, workflow automation, and intelligent analytics.' },
  { num: '05', icon: BarChart2, title: 'SEO & Performance', description: 'Technical SEO, Core Web Vitals, content strategy to rank and convert.' },
  { num: '06', icon: Globe, title: 'Brand Identity & UI/UX', description: 'Logo, visual identity, Figma design systems — cohesive brand from day one.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-[110px] px-6 md:py-[120px] border-t border-[rgba(255,92,0,0.1)]">
      <div className="max-w-7xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-5 flex items-center gap-3 font-medium">
            <span className="w-7 h-px bg-[#FF5C00]" />
            What We Offer
          </p>
          <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold text-[#F5F5F5] leading-[1.05] tracking-tight max-w-[560px]">
            Services Built for{' '}
            <em className="italic text-transparent" style={{ WebkitTextStroke: '1.5px #F5F5F5' }}>Growth</em>
          </h2>
        </motion.div>

        {/* 3-col bordered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[rgba(255,92,0,0.1)]" style={{ gap: '1px', background: 'rgba(255,92,0,0.1)' }}>
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-[#111111] p-10 group hover:bg-[#161616] transition-colors relative overflow-hidden"
              >
                {/* top orange line on hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF5C00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <p className="text-[11px] tracking-[0.1em] text-[rgba(245,245,245,0.22)] mb-6 font-display">{svc.num}</p>
                <Icon size={22} className="text-[#FF5C00] mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-[19px] font-bold text-[#F5F5F5] mb-3 leading-snug tracking-tight">{svc.title}</h3>
                <p className="text-[13px] text-[rgba(245,245,245,0.42)] leading-[1.8]">{svc.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[rgba(255,92,0,0.1)] border-t-0" style={{ gap: '1px', background: 'rgba(255,92,0,0.1)' }}>
          {[['50+','Projects Delivered'],['3×','Faster with AI'],['98%','Client Satisfaction'],['24h','Response Time']].map(([num, label]) => (
            <div key={label} className="bg-[#111111] px-8 py-10 text-center">
              <p className="font-display text-[46px] font-extrabold text-[#FF5C00] leading-none mb-2 tracking-tight">{num}</p>
              <p className="text-[11px] text-[rgba(245,245,245,0.35)] tracking-[0.1em] uppercase">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
