'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Globe, Video, Target, Crown } from 'lucide-react'

const PRICING_DATA = [
  { package: "Landing Page / Brochure Site", price: "₹25,000 – ₹45,000", timeline: "1–2 weeks" },
  { package: "Restaurant / Local Business Website", price: "₹35,000 – ₹60,000", timeline: "2–3 weeks" },
  { package: "E-Commerce Website", price: "₹60,000 – ₹1,20,000", timeline: "3–5 weeks" },
  { package: "Admin Panel / Dashboard", price: "₹80,000 – ₹1,50,000", timeline: "4–6 weeks" },
  { package: "Multi-Vendor Marketplace", price: "₹1,50,000 – ₹4,00,000", timeline: "8–16 weeks" },
  { package: "Full SaaS Platform", price: "₹2,00,000 – ₹6,00,000", timeline: "12–24 weeks" },
];

import { useTranslations } from 'next-intl'

const PricingSection = () => {
  const t = useTranslations('Sections')
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
            className="text-4xl md:text-6xl font-syne font-bold mt-4 mb-6 text-[#F5F5F5]"
          >
            {t('pricing').split('Pricing')[0]} <span className="text-[#FF5C00]">{t('pricing').includes('Pricing') ? 'Pricing' : ''}</span>
            {t('pricing').split('Pricing')[1] || ''}
          </motion.h2>
          <p className="text-[rgba(245,245,245,0.5)] max-w-xl mx-auto text-sm font-medium">
            No hidden costs. No surprises. Just high-performance digital solutions tailored to your brand&apos;s growth.
          </p>
        </div>

        {/* Market Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] rounded-3xl"
          >
            <p className="text-[10px] font-black uppercase text-[#FF5C00] mb-4 tracking-widest">Pricing</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[rgba(245,245,245,0.4)] text-xs mb-1">Traditional Agency</p>
                <p className="text-xl font-bold line-through opacity-50">₹50,000+</p>
              </div>
              <div className="text-right">
                <p className="text-[#FF5C00] text-xs font-bold mb-1">BrandNest</p>
                <p className="text-3xl font-black">₹25,000+</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] rounded-3xl"
          >
            <p className="text-[10px] font-black uppercase text-[#FF5C00] mb-4 tracking-widest">Timeline</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[rgba(245,245,245,0.4)] text-xs mb-1">Market Avg</p>
                <p className="text-xl font-bold opacity-50">4-8 Weeks</p>
              </div>
              <div className="text-right">
                <p className="text-[#FF5C00] text-xs font-bold mb-1">BrandNest</p>
                <p className="text-3xl font-black">1-2 Weeks</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-[#FF5C00] rounded-3xl"
          >
            <p className="text-[10px] font-black uppercase text-[#111] mb-4 tracking-widest">The Edge</p>
            <p className="text-[#111] font-bold text-lg leading-snug">
              AI-First workflow delivers 3x speed at 50% lower cost.
            </p>
          </motion.div>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[rgba(255,92,0,0.2)]">
                <th className="py-6 px-4 text-[10px] uppercase tracking-widest text-[#FF5C00] font-black">Category</th>
                <th className="py-6 px-4 text-[10px] uppercase tracking-widest text-[#FF5C00] font-black opacity-50">Market Price</th>
                <th className="py-6 px-4 text-[10px] uppercase tracking-widest text-[#FF5C00] font-black">BrandNest Price</th>
                <th className="py-6 px-4 text-[10px] uppercase tracking-widest text-[#FF5C00] font-black">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {[
                { package: "Landing Page / Business Site", market: "₹50,000+", price: "₹25,000+", timeline: "1 Week" },
                { package: "E-Commerce / B2B Marketplace", market: "₹1,20,000+", price: "₹60,000+", timeline: "3-5 Weeks" },
                { package: "SaaS / Admin Dashboard", market: "₹1,80,000+", price: "₹80,000+", timeline: "4-6 Weeks" },
                { package: "Reels & Video Editing", market: "₹8,000+", price: "₹3,999+", timeline: "48 Hours" },
                { package: "Commercial Video Ads", market: "₹50,000+", price: "₹24,999+", timeline: "1 Week" },
                { package: "Performance Ad Campaigns", market: "₹30,000+", price: "₹14,999+", timeline: "Ongoing" },
              ].map((item, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-[rgba(255,92,0,0.05)] hover:bg-[rgba(255,92,0,0.02)] transition-colors group"
                >
                  <td className="py-6 px-4 text-[#F5F5F5] font-bold text-sm md:text-base group-hover:text-[#FF5C00] transition-colors">{item.package}</td>
                  <td className="py-6 px-4 text-[rgba(245,245,245,0.3)] font-bold text-sm md:text-base line-through">{item.market}</td>
                  <td className="py-6 px-4 text-[#F5F5F5] font-black text-sm md:text-base">{item.price}</td>
                  <td className="py-6 px-4 text-[rgba(245,245,245,0.5)] text-xs md:text-sm font-medium">{item.timeline}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <p className="text-[rgba(245,245,245,0.4)] text-[13px] font-medium mb-8 max-w-2xl mx-auto">
            &quot;{t('pricingNote')}&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#consultation"
              className="inline-flex items-center gap-3 bg-[#FF5C00] text-[#111] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#FF7A2E] transition-all shadow-xl shadow-[#FF5C00]/20"
            >
              Start Free Consultation →
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-3 border border-[rgba(255,92,0,0.3)] text-[#FF5C00] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[rgba(255,92,0,0.05)] transition-all"
            >
              View Full Price List <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-grid-bg opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default PricingSection
