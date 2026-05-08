'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "BrandNest ne hamare cloud kitchen ka poora digital setup kiya — website, Razorpay, SMM aur AI ads sab. 3 mahine mein online orders 200% badh gaye. Sales badhane ki strategy aur technical support amazing hai.",
    name: "Manju Karmakar",
    role: "Owner, Littiwale — Cloud Kitchen, Barbil, Odisha",
    initials: "MK",
    service: "Full Digital Ecosystem (Web + Ads + SMM)",
    rating: 5
  },
  {
    quote: "Pehle sirf walk-ins the. BrandNest ne website banayi aur social media marketing/commercial ads se online footfall aur delivery orders 45% badha di. Sales grow karne ka inka approach aur execution bilkul perfect hai.",
    name: "Shubham Sharma",
    role: "Owner, Chaiwale Café — Rohini, Delhi",
    initials: "SS",
    service: "Web Dev + SMM + Commercial Ads",
    rating: 5
  },
  {
    quote: "Desi Chulha ka brand identity aur website dono BrandNest ne banaye. AI commercial ad ne humara reach 3x kar diya pehle month mein hi. Authentic Indian feel perfectly capture hua.",
    name: "Desi Chulha Owner",
    role: "Owner, Desi Chulha — Restaurant, Kendujhar, Odisha",
    initials: "DC",
    service: "AI Commercial Ad + Website",
    rating: 5
  },
  {
    quote: "AI influencer campaign tool ne mera kaam completely automate kar diya. Outreach, ROI tracking, brief generation — sab kuch. 3x faster workflow aur clients bhi zyada impress hote hain.",
    name: "Simran Sharma",
    role: "Influencer & Founder, AI Influencer Campaign Tool",
    initials: "SS",
    service: "AI Tools Development",
    rating: 5
  },
  {
    quote: "WareXhub ka poora B2B marketplace — vendor dashboards, commission system, buyer/seller protection, admin approval panel, DEV/UAT deployment — BrandNest ne end-to-end flawlessly deliver kiya.",
    name: "Rohit Karmakar",
    role: "Founder & CEO, WareXhub",
    initials: "RK",
    service: "Marketplace Development",
    rating: 5
  }
];

import { useTranslations } from 'next-intl'

export default function Testimonials() {
  const t = useTranslations('Sections')
  return (
    <section className="bg-[#111111] py-[100px] px-6 md:py-[120px] border-t border-[rgba(255,92,0,0.1)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] mb-4 font-medium">Client Love</p>
          <h2 className="font-display text-[48px] font-extrabold text-[#F5F5F5] mb-4 leading-[1.1]">
            {t('testimonials').split('Clients')[0]} <span className="text-[#FF5C00]">{t('testimonials').includes('Clients') ? 'Clients' : ''}</span> {t('testimonials').split('Clients')[1] || ''}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#FF5C00] text-[#FF5C00]" />
                ))}
              </div>
              <p className="text-[14px] text-[#F5F5F5] leading-[1.8] mb-8 flex-grow italic">
                {`"`}{testimonial.quote}{`"`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,92,0,0.1)] border border-[rgba(255,92,0,0.2)] flex items-center justify-center text-[#FF5C00] font-bold text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-display text-[14px] font-bold text-[#F5F5F5]">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-[rgba(245,245,245,0.4)] font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-[10px] text-[#FF5C00] uppercase tracking-wider font-bold mt-1">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
