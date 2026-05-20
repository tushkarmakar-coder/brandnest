'use client'
import { useState } from 'react'
import { ShieldAlert, MapPin, PhoneCall, AlertTriangle, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CheatingDaddyTool() {
  const [analyzing, setAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setShowResults(true)
    }, 2500)
  }

  return (
    <div className="bg-[#0A0A0A] text-white h-full w-full flex flex-col font-mono relative overflow-hidden">
      {/* Banner */}
      <div className="bg-zinc-900 border-b border-red-900/50 text-red-500 text-xs font-semibold py-2 px-4 text-center z-10 sticky top-0 uppercase tracking-widest flex items-center justify-center gap-2">
        <EyeOff size={14} /> Concept Demo: Digital Trust Monitor
      </div>

      <div className="p-6 md:p-10 flex-grow overflow-y-auto flex items-center justify-center">
        <div className="max-w-md w-full">
          {!showResults ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111] p-8 rounded-2xl border border-zinc-800 shadow-2xl text-center"
            >
              <div className="w-20 h-20 bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-900/50">
                <ShieldAlert className="text-red-500" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">TrustScan™</h2>
              <p className="text-zinc-500 text-sm mb-8">Enter phone number to run behavioral pattern analysis.</p>

              <input 
                type="text" 
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-[#050505] border border-zinc-800 rounded-lg px-4 py-3 text-center text-lg mb-6 focus:border-red-500 outline-none transition-colors"
                defaultValue="+91 98765 43210"
              />

              <button 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {analyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" />
                    Analyzing Patterns...
                  </>
                ) : (
                  'Run Diagnostics'
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#111] p-6 rounded-2xl border border-red-900/30 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <h3 className="font-bold text-lg text-red-500 flex items-center gap-2">
                  <AlertTriangle size={18} /> High Risk Detected
                </h3>
                <span className="text-xs bg-red-950 text-red-400 px-2 py-1 rounded">Score: 84/100</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-[#050505] p-3 rounded border border-zinc-800/50 flex items-start gap-3">
                  <PhoneCall size={16} className="text-zinc-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-300">Late Night Calls</p>
                    <p className="text-xs text-zinc-500">4 calls after 1:00 AM to unsaved number.</p>
                  </div>
                </div>
                <div className="bg-[#050505] p-3 rounded border border-zinc-800/50 flex items-start gap-3">
                  <MapPin size={16} className="text-zinc-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-300">Location Anomaly</p>
                    <p className="text-xs text-zinc-500">GPS turned off at &quot;Taj Hotel&quot; vicinity for 3 hrs.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowResults(false)}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors"
              >
                Reset Scanner
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
