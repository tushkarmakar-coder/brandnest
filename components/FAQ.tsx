'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How much does a website cost in Delhi?',
    a: 'At BrandNest, website packages start from ₹25,000 for landing pages to ₹2,00,000+ for full e-commerce or SaaS platforms. We offer transparent pricing with no hidden costs.'
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website takes 2–3 weeks. Complex full-stack applications take 4–8 weeks. AI tools help us deliver 3x faster than traditional agencies.'
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes! We love working with startups. We offer flexible payment plans and MVP-focused development to help early-stage companies launch quickly.'
  },
  {
    q: 'What makes BrandNest different?',
    a: 'We are an AI-first agency. Every project — from websites to video ads — uses cutting-edge AI tools. This means faster delivery, lower cost, and higher quality for our clients.'
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, we offer maintenance and support packages. Whether it\'s updates, security patches, or feature enhancements, we\'ve got you covered.'
  },
  {
    q: 'Can you help with video marketing?',
    a: 'Absolutely. We create professional brand videos, YouTube ads, and commercial content using AI-enhanced production workflows.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#111111] py-[100px] px-6 md:py-[120px]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">Questions?</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] leading-[1.1]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <motion.button
              key={idx}
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-6 hover:border-[#FF5C00] transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[15px] font-semibold text-[#F5F5F5] text-left">
                  {faq.q}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-[#FF5C00] transition-transform flex-shrink-0 ${open === idx ? 'rotate-180' : ''}`}
                />
              </div>
              {open === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.8] mt-4"
                >
                  {faq.a}
                </motion.p>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
