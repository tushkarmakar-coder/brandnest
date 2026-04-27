'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const WHY_US = [
  { title: 'AI-First Approach', desc: 'Every project uses cutting-edge AI tools — faster delivery, lower costs, higher quality.' },
  { title: '30-Day Results Guarantee', desc: 'We deliver results within 30 days or offer free revisions. No hidden clauses.' },
  { title: 'End-to-End Solutions', desc: 'From websites to videos to ads — everything under one roof. No juggling agencies.' },
  { title: 'India Experts', desc: 'Pan-India presence, 24/7 support. We understand your market deeply.' },
  { title: '24-Hour Response Time', desc: 'Dedicated account manager. You get a response within 24 hours, always.' },
  { title: 'Transparent Pricing', desc: 'No hidden fees. Fixed packages starting ₹25K. Pay only for what you need.' }
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#111111] py-[100px] px-6 md:py-[120px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">Why Choose BrandNest</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] mb-4 leading-[1.1]">
            Why {`We're`} Different
          </h2>
          <p className="text-[15px] text-[rgba(245,245,245,0.5)] max-w-[520px] mx-auto leading-[1.8]">
            We {`don't`} just build websites. We build results. Your growth is our success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 size={24} className="text-[#FF5C00]" />
              </div>
              <div>
                <h3 className="font-display text-[18px] font-semibold text-[#F5F5F5] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
