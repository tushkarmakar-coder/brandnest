'use client'
import { motion } from 'framer-motion'
import LeadForm from './LeadForm'

export default function ConsultationSection() {
  return (
    <section id="consultation" className="bg-[#111111] py-[100px] px-6 md:py-[140px] border-t border-[rgba(255,92,0,0.1)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#FF5C00] mb-5 flex items-center gap-3 font-medium">
            <span className="w-7 h-px bg-[#FF5C00]" />
            Get Started
          </p>
          <h2 className="font-display text-[clamp(36px,5vw,62px)] font-extrabold text-[#F5F5F5] leading-[1.05] tracking-tight max-w-[560px] mb-4">
            Free Consultation
          </h2>
          <p className="text-[15px] text-[rgba(245,245,245,0.5)] max-w-[520px] leading-[1.8]">
            Talk to our strategy team about your project. We{`'`}ll share ideas, timeline, and investment. Zero pressure, pure value.
          </p>
        </motion.div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#FF5C00] font-semibold mb-3">What You Get</p>
              <ul className="space-y-4">
                {[
                  'Custom project roadmap',
                  'AI optimization strategy',
                  'Competitive analysis',
                  'Investment breakdown',
                  'Timeline estimate'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-[rgba(245,245,245,0.65)]">
                    <span className="w-5 h-5 border border-[#FF5C00] flex items-center justify-center text-[#FF5C00] text-[9px] flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#FF5C00] font-semibold mb-3">Timeline</p>
              <p className="text-[13px] text-[rgba(245,245,245,0.65)] leading-[1.8]">
                We call you within <strong>2 hours</strong> of form submission (business hours) to confirm your needs and discuss your project in detail.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-10 rounded-sm">
              <p className="font-display text-[24px] font-semibold text-[#F5F5F5] mb-2">Tell Us About Your Project</p>
              <p className="text-[12px] text-[rgba(245,245,245,0.4)] mb-8 font-body">
                Share details so we can give you the most relevant insights.
              </p>
              <LeadForm />
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-12 border-t border-[rgba(255,92,0,0.1)] text-center"
        >
          <p className="text-[13px] text-[rgba(245,245,245,0.5)] mb-4">Prefer instant chat?</p>
          <a
            href={`https://wa.me/917894935653?text=Hi BrandNest, I'd like a consultation about our project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#FF5C00] text-[#FF5C00] px-8 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#FF5C00] hover:text-[#111] transition-colors"
          >
            <span>💬</span>
            Message on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
