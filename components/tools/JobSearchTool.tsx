'use client'
import { useState } from 'react'
import { Search, MapPin, Briefcase, IndianRupee, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function JobSearchTool() {
  const [searchTerm, setSearchTerm] = useState('')
  const [applied, setApplied] = useState<number | null>(null)

  const jobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp India', location: 'Remote', salary: '₹18L - ₹25L', type: 'Full-time' },
    { id: 2, title: 'Growth Marketer', company: 'StartupX', location: 'Bangalore', salary: '₹12L - ₹16L', type: 'Full-time' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignNest', location: 'Delhi NCR', salary: '₹8L - ₹14L', type: 'Contract' },
    { id: 4, title: 'Backend Engineer (Node.js)', company: 'InnovateIO', location: 'Remote', salary: '₹15L - ₹22L', type: 'Full-time' },
    { id: 5, title: 'Product Manager', company: 'BuildFast', location: 'Mumbai', salary: '₹20L - ₹30L', type: 'Full-time' },
  ]

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleApply = (id: number) => {
    setApplied(id)
    setTimeout(() => setApplied(null), 3000)
  }

  return (
    <div className="bg-[#1A1A1A] text-white h-full w-full flex flex-col font-sans relative overflow-hidden">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold py-2 px-4 text-center z-10 sticky top-0">
        🚀 LIVE DEMO: This is a demo with placeholder data. We build fully functional applications like this with real data and backend integrations.
      </div>

      <div className="p-6 md:p-10 flex-grow overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Find Your Dream Job</h1>
            <p className="text-zinc-400 text-sm md:text-base">Search through thousands of live opportunities across India.</p>
          </div>

          <div className="bg-[#222] p-2 rounded-xl border border-zinc-800 flex items-center mb-10 shadow-lg">
            <Search className="text-zinc-500 ml-3" size={20} />
            <input 
              type="text" 
              placeholder="Search by role or company..." 
              className="bg-transparent border-none outline-none flex-grow text-white px-4 py-3 placeholder:text-zinc-600 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors">
              Search
            </button>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? filteredJobs.map((job, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={job.id} 
                className="bg-[#222] border border-zinc-800 rounded-xl p-5 hover:border-blue-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><IndianRupee size={14} /> {job.salary}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleApply(job.id)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 justify-center min-w-[140px]
                    ${applied === job.id 
                      ? 'bg-green-600/20 text-green-400 border border-green-600/50' 
                      : 'bg-[#111] text-white hover:bg-blue-600 border border-zinc-700 hover:border-blue-600'
                    }`}
                >
                  {applied === job.id ? 'Applied!' : 'Apply Now'}
                  {applied !== job.id && <Send size={14} />}
                </button>
              </motion.div>
            )) : (
              <div className="text-center py-10 text-zinc-500 text-sm">No jobs found matching your search.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
