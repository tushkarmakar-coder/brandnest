'use client'
import { useState } from 'react'
import { Bot, User, Mic, Play, CheckCircle2, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InterviewCrackTool() {
  const [started, setStarted] = useState(false)
  const [recording, setRecording] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [answer, setAnswer] = useState('')
  const [copied, setCopied] = useState(false)

  const handleStart = () => setStarted(true)

  const handleSimulateQuestion = () => {
    setRecording(true)
    setTimeout(() => {
      setRecording(false)
      setAnalyzing(true)
      setTimeout(() => {
        setAnalyzing(false)
        setAnswer("When answering 'What is your biggest weakness?', focus on a real technical or soft skill you are actively improving. \n\nExample: 'I used to struggle with delegating tasks because I wanted to ensure everything was perfect. However, I've learned that trusting my team and using tools like Jira helps improve overall productivity.'")
      }, 1500)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(answer)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-slate-50 text-slate-900 h-full w-full flex flex-col font-sans relative overflow-hidden">
      {/* Banner */}
      <div className="bg-indigo-600 text-white text-xs font-semibold py-2 px-4 text-center z-10 sticky top-0">
        ✨ Custom AI Tool built by BrandNest. Full source code / Git clone available upon request for interested clients.
      </div>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="text-indigo-400" />
              <h2 className="font-bold">InterviewCrack AI</h2>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>

          {!started ? (
            <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-slate-50">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Play size={28} className="ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Ace Your Next Interview</h3>
              <p className="text-slate-500 mb-8 max-w-sm">Real-time AI assistance for live interviews. Analyzes questions and provides optimized answers instantly.</p>
              <button 
                onClick={handleStart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all transform hover:scale-105"
              >
                Start Session
              </button>
            </div>
          ) : (
            <div className="flex-grow flex flex-col p-6 bg-slate-50">
              <div className="flex-grow overflow-y-auto space-y-6 mb-6 pr-2">
                
                {/* Simulated Interivew Question */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-slate-600" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-700">
                    &quot;So, tell me about a time you had to deal with a difficult situation at work and what is your biggest weakness?&quot;
                  </div>
                </div>

                {/* AI Processing / Answer */}
                {analyzing && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-2xl rounded-tr-none shadow-sm border border-indigo-100 text-sm text-indigo-800 flex items-center gap-2">
                       <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                       Generating response...
                    </div>
                  </motion.div>
                )}

                {answer && (
                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md text-sm whitespace-pre-wrap relative group">
                       {answer}
                       <button 
                         onClick={handleCopy}
                         className="absolute -top-3 -left-3 bg-white text-slate-800 p-1.5 rounded-full shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
                       >
                         {copied ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                       </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleSimulateQuestion}
                  disabled={recording || analyzing || !!answer}
                  className={`flex-grow py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors
                    ${recording ? 'bg-red-100 text-red-600 border border-red-200' : 
                      (analyzing || answer) ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 
                      'bg-white border-2 border-indigo-100 text-indigo-600 hover:bg-indigo-50 shadow-sm'
                    }`}
                >
                  {recording ? (
                    <><div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" /> Listening to interviewer...</>
                  ) : (
                    <><Mic size={18} /> Simulate Interview Question</>
                  )}
                </button>
                {answer && (
                  <button 
                    onClick={() => setAnswer('')}
                    className="px-4 py-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
