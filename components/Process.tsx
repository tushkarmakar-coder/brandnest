'use client'
import { motion } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We understand your business, goals, and audience.' },
  { num: '02', title: 'Design & Prototyping', desc: 'We design beautiful, conversion-focused experiences.' },
  { num: '03', title: 'AI-Powered Development', desc: 'We build fast using AI automation and best practices.' },
  { num: '04', title: 'Testing & Optimization', desc: 'We test rigorously and optimize for performance.' },
  { num: '05', title: 'Launch & Support', desc: 'We deploy with confidence and provide ongoing support.' },
  { num: '06', title: 'Growth & Scale', desc: 'We monitor, analyze, and continuously improve results.' }
]

export default function Process() {
  return (
    <section className="bg-[#111111] py-[100px] px-6 md:py-[120px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">Our Process</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] mb-4 leading-[1.1]">
            How We Work
          </h2>
          <p className="text-[15px] text-[rgba(245,245,245,0.5)] max-w-[520px] mx-auto leading-[1.8]">
            A proven, transparent process designed to deliver results fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-8"
            >
              <div className="text-[48px] font-display font-bold text-[#FF5C00] mb-4 opacity-30">
                {step.num}
              </div>
              <h3 className="font-display text-[20px] font-semibold text-[#F5F5F5] mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.7]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
