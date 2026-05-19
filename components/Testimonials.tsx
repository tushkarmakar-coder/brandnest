'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "BrandNest built our entire digital ecosystem for the cloud kitchen—including the website, Razorpay integration, SMM, and AI ads. Online orders grew by 200% in 3 months. Their sales strategy and technical support are amazing.",
    name: "Manju Karmakar",
    role: "Owner, Littiwale — Cloud Kitchen, Barbil, Odisha",
    initials: "MK",
    service: "Full Digital Ecosystem (Web + Ads + SMM)",
    rating: 5,
    link: "https://www.instagram.com/littiwaleofficial",
    linkLabel: "@littiwaleofficial"
  },
  {
    quote: "We used to only get walk-in customers. BrandNest built our website and managed our social media marketing and commercial ads, increasing online footfall and delivery orders by 45%.",
    name: "Shubham Sharma",
    role: "Owner, Chaiwale Café — Rohini, Delhi",
    initials: "SS",
    service: "Web Dev + SMM + Commercial Ads",
    rating: 5,
    link: "https://www.instagram.com/chaiwaleofficial",
    linkLabel: "@chaiwaleofficial"
  },
  {
    quote: "BrandNest created the entire brand identity and website for Desi Chulha. Their custom AI-powered commercial ad tripled our organic reach in the very first month.",
    name: "Desi Chulha Owner",
    role: "Owner, Desi Chulha — Restaurant, Kendujhar, Odisha",
    initials: "DC",
    service: "AI Commercial Ad + Website",
    rating: 5,
    link: null,
    linkLabel: null
  },
  {
    quote: "The AI influencer campaign tool completely automated my workflow—from outreach and brief generation to real-time ROI tracking. Work flows 3x faster, and my clients are highly impressed.",
    name: "Simran Sharma",
    role: "Influencer & Content Creator",
    initials: "SS",
    service: "AI Tools Development",
    rating: 5,
    link: "https://www.instagram.com/yourtrendygirl",
    linkLabel: "@yourtrendygirl"
  },
  {
    quote: "BrandNest did an outstanding job for both FireSlab and Innmotek—delivering AI tools, automation workflows, and digital strategy all in one go. Delivery was fast and the quality was top-notch.",
    name: "Gaurav Agarwal",
    role: "Founder, FireSlab & Innmotek",
    initials: "GA",
    service: "Website Development, Redesign & Maintenance",
    rating: 5,
    link: null,
    linkLabel: null
  },
  {
    quote: "BrandNest flawlessly delivered the entire B2B marketplace for WareXhub end-to-end, including vendor dashboards, commission systems, buyer/seller protection, admin panels, and DEV/UAT deployment.",
    name: "Rohit Karmakar",
    role: "Founder & CEO, WareXhub",
    initials: "RK",
    service: "Marketplace Development",
    rating: 5,
    link: null,
    linkLabel: null
  },
  {
    quote: "BrandNest shot a premium commercial ad campaign for Kashmiri Organic Nuts featuring an incredible brand collaboration. Visually stunning, fast turnaround, and the aesthetics were spot on. We saw a massive boost in reach and growth.",
    name: "Brand Team",
    role: "Kashmiri Organic Nuts",
    initials: "KN",
    service: "Commercial Ads & Brand Collab",
    rating: 5,
    link: "https://www.instagram.com/reel/DN7jMkjEqY7/?igsh=dXA3YWNtdWdrOHQw",
    linkLabel: "Watch Reel"
  },
  {
    quote: "For our anniversary, I reached out to BrandNest to surprise my husband. They transformed our entire love story into a cute, animated video/reel. We both broke into happy tears watching it—it was such a beautiful and emotional surprise!",
    name: "Divya Jain",
    role: "Anniversary Surprise Client",
    initials: "DJ",
    service: "Cute Animated Love Story Video",
    rating: 5,
    link: "https://www.instagram.com/reel/DU5RGN_ksou/?igsh=MXQ3MTVhNXU2MXQzbw==",
    linkLabel: "Watch Surprise Reel"
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
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#FF5C00] opacity-70 hover:opacity-100 transition-opacity mt-1 block"
                    >
                      {testimonial.linkLabel} ↗
                    </a>
                  )}
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
