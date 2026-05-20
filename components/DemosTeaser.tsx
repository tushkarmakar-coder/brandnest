'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import DemoPreviewModal, { DemoType } from './DemoPreviewModal'
import { DEMOS_DATA } from '@/lib/demosData'

export default function DemosTeaser() {
  const [activeDemo, setActiveDemo] = useState<typeof DEMOS_DATA[0] | null>(null)
  
  const featuredDemos = DEMOS_DATA.filter(d => d.isFeatured)

  return (
    <>
      <section id="demos" className="bg-[#111] py-24 px-6 border-t border-zinc-800 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF5C00]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#FF5C00] mb-4 flex items-center gap-3 font-semibold">
                <span className="w-8 h-[2px] bg-[#FF5C00]" />
                Live Experiences
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-orange-400">Products</span> In Action
              </h2>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Link href="/demos" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all group">
                View Full Demo Gallery
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDemos.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveDemo(demo)}
                className="group cursor-pointer bg-[#1A1A1A] border border-zinc-800 hover:border-[#FF5C00]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,92,0,0.1)]"
              >
                <div className={`h-48 w-full ${demo.image} relative overflow-hidden flex items-center justify-center`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {demo.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded-sm border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5C00] transition-colors">{demo.title}</h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">{demo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      <DemoPreviewModal
        isOpen={!!activeDemo}
        onClose={() => setActiveDemo(null)}
        title={activeDemo?.title || ''}
        type={activeDemo?.type as DemoType}
        url={activeDemo?.url}
      />
    </>
  )
}
