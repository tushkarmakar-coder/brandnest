'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import DemoPreviewModal, { DemoType } from './DemoPreviewModal'
import { DEMOS_DATA } from '@/lib/demosData'

export default function DemoGallery() {
  const [activeDemo, setActiveDemo] = useState<typeof DEMOS_DATA[0] | null>(null)

  return (
    <>
      <section className="bg-[#0A0A0A] py-32 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#FF5C00] mb-4 font-bold">
                Experience The Build
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-orange-400">Demo Gallery</span>
              </h1>
              <p className="text-zinc-400 text-lg">
                Explore our recent client projects, bespoke AI tools, and enterprise platforms. 
                Click any card to open the interactive preview.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMOS_DATA.map((demo, idx) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveDemo(demo)}
                className="group cursor-pointer bg-[#111] border border-zinc-800 hover:border-[#FF5C00]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,92,0,0.15)] flex flex-col h-full"
              >
                <div className={`h-56 w-full ${demo.image} relative overflow-hidden flex items-center justify-center shrink-0`}>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {demo.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded-sm border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF5C00] transition-colors">{demo.title}</h3>
                  <p className="text-xs text-[#FF5C00] font-medium mb-4 uppercase tracking-wider">{demo.subtitle}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">{demo.description}</p>
                  
                  <div className="text-xs font-bold text-white flex items-center gap-2 mt-auto">
                    <span className="w-6 h-px bg-zinc-700 group-hover:w-10 group-hover:bg-[#FF5C00] transition-all"></span>
                    LAUNCH PREVIEW
                  </div>
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
