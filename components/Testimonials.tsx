'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Rajesh Patel',
    company: 'TechVenture Startup',
    text: 'BrandNest built our website in 2 weeks. The quality is exceptional, and their team is incredibly responsive.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    company: 'Sharma Fashion Brands',
    text: 'Their video ads tripled our Instagram engagement. The ROI has been amazing. Highly recommend!',
    rating: 5
  },
  {
    name: 'Amit Kumar',
    company: 'Digital Marketing Agency',
    text: 'We partner with BrandNest for client projects. Their AI integration and automation capabilities are industry-leading.',
    rating: 5
  },
  {
    name: 'Neha Singh',
    company: 'E-Commerce Store Owner',
    text: 'From concept to launch, the entire experience was smooth. They truly care about results.',
    rating: 5
  }
]

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF5C00] text-[#FF5C00]" />
                ))}
              </div>
              <p className="text-[14px] text-[#F5F5F5] leading-[1.8] mb-6">
                {`"`}{testimonial.text}{`"`}
              </p>
              <div>
                <p className="font-display text-[14px] font-semibold text-[#F5F5F5]">
                  {testimonial.name}
                </p>
                <p className="text-[12px] text-[rgba(245,245,245,0.5)]">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
