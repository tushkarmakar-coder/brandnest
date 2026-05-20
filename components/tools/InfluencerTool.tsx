'use client'
import { useState } from 'react'
import { Users, Instagram, Heart, PlaySquare, MailCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InfluencerTool() {
  const [requested, setRequested] = useState<number | null>(null)
  
  const influencers = [
    { id: 1, name: '@fashion_diva', followers: '124K', engagement: '4.8%', niche: 'Fashion & Lifestyle', cost: '₹15,000' },
    { id: 2, name: '@tech_guru_in', followers: '342K', engagement: '3.2%', niche: 'Technology', cost: '₹25,000' },
    { id: 3, name: '@foodie_delhi', followers: '89K', engagement: '6.1%', niche: 'Food & Travel', cost: '₹8,000' },
    { id: 4, name: '@fitness_freak', followers: '210K', engagement: '5.4%', niche: 'Health & Fitness', cost: '₹18,000' },
  ]

  const handleRequest = (id: number) => {
    setRequested(id)
    setTimeout(() => setRequested(null), 3000)
  }

  return (
    <div className="bg-[#FAF9F6] text-[#111] h-full w-full flex flex-col font-sans relative overflow-hidden">
      {/* Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold py-2 px-4 text-center z-10 sticky top-0">
        🚀 LIVE DEMO: This is a demo with placeholder data. We build fully functional applications like this with real data and backend integrations.
      </div>

      <div className="p-6 md:p-10 flex-grow overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-2">Campaign Manager</h1>
              <p className="text-zinc-500 text-sm">Find and collaborate with top creators for your brand.</p>
            </div>
            <div className="bg-white shadow-sm border border-zinc-200 rounded-lg p-3 flex gap-4 mt-4 md:mt-0 text-sm">
              <div>
                <p className="text-xs text-zinc-500 font-medium">Budget Left</p>
                <p className="font-bold text-green-600">₹50,000</p>
              </div>
              <div className="w-px bg-zinc-200"></div>
              <div>
                <p className="text-xs text-zinc-500 font-medium">Active Collabs</p>
                <p className="font-bold">2</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencers.map((inf, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                key={inf.id} 
                className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-24 bg-gradient-to-br from-pink-100 to-orange-100 relative">
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full p-1 shadow-sm">
                    <div className="w-full h-full bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
                      <Users size={24} />
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-5 px-5 text-center">
                  <h3 className="font-bold text-lg">{inf.name}</h3>
                  <p className="text-xs text-pink-600 font-medium mb-4">{inf.niche}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                    <div className="bg-zinc-50 rounded p-2 border border-zinc-100">
                      <p className="text-zinc-500 mb-1 flex items-center justify-center gap-1"><Users size={12}/> Followers</p>
                      <p className="font-bold">{inf.followers}</p>
                    </div>
                    <div className="bg-zinc-50 rounded p-2 border border-zinc-100">
                      <p className="text-zinc-500 mb-1 flex items-center justify-center gap-1"><Heart size={12}/> Eng.</p>
                      <p className="font-bold text-green-600">{inf.engagement}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-4 border-t border-zinc-100 pt-3">
                    <span className="text-zinc-500">Est. Cost:</span>
                    <span className="font-bold">{inf.cost}</span>
                  </div>

                  <button 
                    onClick={() => handleRequest(inf.id)}
                    className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2
                      ${requested === inf.id 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-black text-white hover:bg-zinc-800'
                      }`}
                  >
                    {requested === inf.id ? (
                      <><MailCheck size={16} /> Request Sent</>
                    ) : (
                      <><Instagram size={16} /> Send Brief</>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
