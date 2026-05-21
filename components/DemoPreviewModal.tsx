'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Maximize2, Monitor, Smartphone } from 'lucide-react'
import { useState } from 'react'
import JobSearchTool from './tools/JobSearchTool'
import InfluencerTool from './tools/InfluencerTool'
import CheatingDaddyTool from './tools/CheatingDaddyTool'
import InterviewCrackTool from './tools/InterviewCrackTool'

export type DemoType = 'iframe' | 'tool-job' | 'tool-influencer' | 'tool-cheating' | 'tool-interview' | 'simulated-image'

interface DemoPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  type: DemoType
  url?: string
  simulatedImage?: string
}

export default function DemoPreviewModal({
  isOpen,
  onClose,
  title,
  type,
  url,
  simulatedImage
}: DemoPreviewModalProps) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')

  const renderContent = () => {
    switch (type) {
      case 'tool-job':
        return <JobSearchTool />
      case 'tool-influencer':
        return <InfluencerTool />
      case 'tool-cheating':
        return <CheatingDaddyTool />
      case 'tool-interview':
        return <InterviewCrackTool />
      case 'iframe':
        return (
          <iframe 
            src={url} 
            className="w-full h-full border-none bg-white"
            title={`Preview of ${title}`}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        )
      case 'simulated-image':
        return (
          <div className="w-full h-full overflow-y-auto bg-zinc-900 flex flex-col items-center p-4">
             {/* If we had actual screenshots, we'd use them here. For now, a stylish placeholder */}
             <div className="w-full max-w-4xl bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border border-zinc-700 mt-10">
               <div className="bg-zinc-900 border-b border-zinc-700 p-3 flex items-center gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="mx-auto bg-zinc-800 text-zinc-400 text-xs px-4 py-1 rounded-full flex items-center gap-2">
                   🔒 {url || 'brandnest.preview.app'}
                 </div>
               </div>
               <div className="p-20 text-center text-zinc-500 flex flex-col items-center justify-center min-h-[500px]">
                 <Maximize2 size={48} className="mb-4 opacity-50" />
                 <h3 className="text-xl font-bold text-white mb-2">High-Fidelity Simulated Preview</h3>
                 <p className="max-w-md mx-auto text-sm">
                   This client website restricts live embedding for security reasons. 
                   In a real scenario, this would display a full-page scrollable screenshot of the site.
                 </p>
               </div>
             </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-[101] flex flex-col bg-[#111] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
          >
            {/* Toolbar */}
            <div className="h-14 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-4 select-none shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-4">
                  <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-zinc-400 font-medium text-sm hidden sm:block">{title}</span>
                <span className="bg-[#FF5C00]/20 text-[#FF5C00] text-[10px] uppercase font-bold px-2 py-0.5 rounded ml-2">Preview Mode</span>
              </div>

              <div className="flex items-center gap-4">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#FF5C00] hover:text-white transition-colors text-sm font-medium bg-[#FF5C00]/10 hover:bg-[#FF5C00] px-3 py-1.5 rounded-lg border border-[#FF5C00]/20"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:block">Open Live Site</span>
                  </a>
                )}

                {/* Device Toggle */}
                <div className="hidden sm:flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                  <button 
                    onClick={() => setDevice('desktop')}
                    className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                  >
                    <Monitor size={16} />
                  </button>
                  <button 
                    onClick={() => setDevice('mobile')}
                    className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                  >
                    <Smartphone size={16} />
                  </button>
                </div>

                <div className="w-px h-6 bg-zinc-800 hidden sm:block"></div>

                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800"
                >
                  <X size={16} /> Close Preview
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-hidden bg-black flex items-center justify-center">
              <div 
                className={`transition-all duration-500 ease-in-out h-full ${
                  device === 'mobile' 
                    ? 'w-full max-w-[400px] border-x border-zinc-800 shadow-2xl' 
                    : 'w-full'
                }`}
              >
                {renderContent()}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
