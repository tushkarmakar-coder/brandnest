'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Globe, Video, Target, Crown } from 'lucide-react'

const PricingSection = () => {
  const previews = [
    {
      name: "Static Website",
      price: "₹25,000",
      icon: <Globe className="w-6 h-6 text-[#FF5C00]" />,
      desc: "Perfect for business portfolios."
    },
    {
      name: "Video Editing",
      price: "₹3,999",
      icon: <Video className="w-6 h-6 text-[#FF5C00]" />,
      desc: "High-engagement viral reels."
    },
    {
      name: "Commercial Ads",
      price: "₹14,999",
      icon: <Target className="w-6 h-6 text-[#FF5C00]" />,
      desc: "Performance ad campaign setup."
    },
    {
      name: "Custom Solution",
      price: "Custom",
      icon: <Crown className="w-6 h-6 text-[#FF5C00]" />,
      desc: "Enterprise grade bespoke systems."
    }
  ]

  return (
    <section id="pricing-preview" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase text-[#FF5C00] tracking-[0.3em]"
          >
            Investment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-syne font-bold mt-4 mb-6"
          >
            Transparent <span className="text-[#FF5C00]">Pricing</span>
          </motion.h2>
          <p className="text-[rgba(245,245,245,0.5)] max-w-xl mx-auto text-sm font-medium">
            No hidden costs. No surprises. Just high-performance digital solutions tailored to your brand&apos;s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {previews.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] border border-[rgba(255,92,0,0.08)] bg-[#1A1A1A]/40 backdrop-blur-sm group hover:border-[#FF5C00]/30 transition-all"
            >
              <div className="mb-6 w-12 h-12 bg-[#111] border border-[rgba(255,92,0,0.1)] rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black">{item.price}</span>
                <span className="text-[rgba(245,245,245,0.3)] text-[10px] font-bold uppercase tracking-widest">Start</span>
              </div>
              <p className="text-[rgba(245,245,245,0.4)] text-sm mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-[#FF5C00] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/pricing"
            className="inline-flex items-center gap-3 bg-[#FF5C00] text-[#111] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#FF7A2E] transition-all shadow-xl shadow-[#FF5C00]/20"
          >
            View All Plans & Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-grid-bg opacity-30 pointer-events-none"></div>
    </section>
  )
}

export default PricingSection
