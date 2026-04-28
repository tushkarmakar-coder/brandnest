'use client'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section id="consultation" className="bg-[#111111] py-[60px] px-6 border-y border-[rgba(255,92,0,0.1)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-[42px] font-extrabold text-[#F5F5F5] mb-6 leading-[1.1]">
            Ready to transform your brand?
          </h2>
          <p className="text-[15px] text-[rgba(245,245,245,0.5)] max-w-[500px] mx-auto mb-8 leading-[1.8]">
            Get a free strategy consultation. {`We'll`} assess your needs and show you exactly how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#consultation" className="bg-[#FF5C00] text-[#111] px-10 py-4 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-colors">
              Get Free Consultation →
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi BrandNest, I'd like a consultation.`}
              target="_blank" rel="noopener noreferrer"
              className="border border-[#FF5C00] text-[#FF5C00] px-10 py-4 text-[13px] font-semibold tracking-wide hover:bg-[#FF5C00] hover:text-[#111] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-[12px] text-[rgba(245,245,245,0.4)] mt-6">
            ✓ No commitment · ✓ Free strategy session · ✓ Actionable insights
          </p>
        </motion.div>
      </div>
    </section>
  )
}
