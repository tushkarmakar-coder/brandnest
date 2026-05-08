'use client'
import { motion } from 'framer-motion'
import { Zap, BarChart3, Cpu } from 'lucide-react'

export default function AISection() {
  return (
    <section id="ai" className="bg-[#111111] py-[100px] px-6 md:py-[120px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">The BrandNest Advantage</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] mb-4 leading-[1.1]">
            Expert-Led, AI-Accelerated Workflow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Zap,
              title: '3× Faster Development',
              desc: 'AI speeds up the boilerplate, while our developers focus on logic, deep audits, and perfect UI/UX.'
            },
            {
              icon: BarChart3,
              title: 'Data-Driven ROI',
              desc: 'AI-optimized campaigns analyzed by our marketing experts deliver 2x better results with lower spend.'
            },
            {
              icon: Cpu,
              title: 'Infinite Scalability',
              desc: 'AI handles repetitive tasks, freeing our human experts to solve your complex business challenges.'
            }
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#1A1A1A] border border-[rgba(255,92,0,0.15)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-[#FF5C00]" />
                </div>
                <h3 className="font-display text-[26px] font-semibold text-[#F5F5F5] mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.8]">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-8"
        >
          <p className="text-[14px] text-[#F5F5F5] leading-[1.9] mb-6">
            <strong>The Human Edge:</strong> While we use cutting-edge AI like Claude, ChatGPT-4, and Midjourney to accelerate our work, every line of code, every pixel, and every ad campaign is <strong>audited and perfected by our expert developers and designers</strong> for a premium, professional look.
          </p>
          <a href="#consultation" className="inline-block bg-[#FF5C00] text-[#111] px-8 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-colors">
            Get Your Perfect Website →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
