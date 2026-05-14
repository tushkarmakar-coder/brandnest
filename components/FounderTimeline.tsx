"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "DEC 2024",
    tag: "The Foundation",
    title: "Engineering Excellence",
    description: "One laptop and a passion for technology. Tushar started building robust B2B marketplaces, AI tools, and full-stack systems — creating the technical foundation of what was to come.",
    number: "01",
    visual: "⚙️",
    gradient: "from-orange-500/10 to-transparent"
  },
  {
    year: "MAY 2025",
    tag: "The Growth",
    title: "Real Impact. Real Scale.",
    description: "50+ projects delivered. From complex SaaS dashboards to commercial AI ads, every line of code was focused on solving real-world business problems.",
    number: "02",
    visual: "📈",
    gradient: "from-orange-600/10 to-transparent"
  },
  {
    year: "DEC 2025",
    tag: "The Synergy",
    title: "The Influencer Partnership",
    description: "Behind every great tech is a great strategy. Simran joined as the creative force, bringing her Influencer background and brand strategy to turn tech into a premium brand experience.",
    number: "03",
    visual: "👑",
    gradient: "from-[#FF5C00]/10 to-transparent"
  },
  {
    year: "JAN 2026",
    tag: "The Legacy",
    title: "BrandNest Was Born",
    description: "The perfect synergy of Engineering and Influencer Marketing. A shared vision to help businesses scale with elite tech and authentic storytelling.",
    number: "04",
    visual: "🏢",
    gradient: "from-orange-400/10 to-transparent"
  }
];

const FounderTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-[#111111] overflow-hidden relative">
      <div className="container px-6 mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF5C00] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block animate-pulse">The Evolution</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-orange-400">Story</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-sm"
          >
            A journey of passion, persistence, and partnership that shaped the BrandNest vision.
          </motion.p>
        </div>

        {/* Story Cards Container */}
        <div 
          ref={containerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-6 overflow-visible"
        >
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -15 }}
              className="relative flex-1 group"
            >
              {/* Card Content */}
              <div className="relative h-full bg-[#1A1A1A] border border-white/10 rounded-[32px] p-8 md:p-10 overflow-hidden transition-all duration-500 group-hover:border-[#FF5C00]/40 group-hover:bg-[#111111] shadow-2xl group-hover:shadow-[#FF5C00]/10">
                {/* Number Background */}
                <div className="absolute -top-10 -right-10 text-[180px] font-black text-white/[0.02] leading-none select-none group-hover:text-[#FF5C00]/[0.05] transition-colors">
                  {item.number}
                </div>
                
                {/* Visual Glow */}
                <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-[#FF5C00]/10 group-hover:border-[#FF5C00]/20 transition-all duration-500">
                      {item.visual}
                    </div>
                    <div className="text-right">
                      <p className="text-[#FF5C00] font-black text-sm mb-1">{item.year}</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.tag}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-6 flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Phase {item.number}</span>
                    <motion.div 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-5 h-5 text-[#FF5C00]/40 group-hover:text-[#FF5C00] transition-colors"
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderTimeline;
