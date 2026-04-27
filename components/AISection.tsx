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
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">AI-Powered Difference</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] mb-4 leading-[1.1]">
            The Power of AI at Every Step
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Zap,
              title: '3× Faster',
              desc: 'AI automation reduces development time from weeks to days.'
            },
            {
              icon: BarChart3,
              title: '2× Better ROI',
              desc: 'AI-optimized campaigns deliver better results with lower ad spend.'
            },
            {
              icon: Cpu,
              title: '∞ Scalability',
              desc: 'AI tools handle complex tasks, freeing our team for strategy.'
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
            <strong>Our AI Stack:</strong> We use Claude, ChatGPT-4, Midjourney, RunwayML, Adobe Firefly, and custom AI models to automate content creation, video editing, copywriting, and campaign optimization. This {`isn't`} just faster — {`it's`} smarter.
          </p>
          <a href="#consultation" className="inline-block bg-[#FF5C00] text-[#111] px-8 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-colors">
            Discover How AI Can Help You →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
