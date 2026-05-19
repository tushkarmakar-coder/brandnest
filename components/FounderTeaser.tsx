"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FounderTeaser = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#111111]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #FF5C00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Soft Orange Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5C00]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        
        {/* Floating Particles (Static simulation for now, could be animated) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-[#FF5C00] rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* LEFT SIDE: Illustrated Founder Duo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[500px] lg:w-1/2"
          >
            <div className="relative w-full mx-auto min-h-[400px] sm:min-h-[500px] aspect-[4/5]">
              {/* Premium Glow Base */}
              <div className="absolute -inset-4 bg-[#FF5C00]/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Luxury Glass Frame */}
              <motion.div 
                whileHover={{ 
                  rotate: 0, 
                  scale: 1.05,
                  y: -15,
                  boxShadow: "0 50px 100px -20px rgba(255, 92, 0, 0.2)"
                }}
                initial={{ rotate: -3 }}
                className="relative z-10 w-full h-full p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-[40px] border border-white/10 overflow-hidden group transition-all duration-700"
              >
                {/* Internal Glow Edge */}
                <div className="absolute inset-0 border border-[#FF5C00]/20 rounded-[40px] pointer-events-none" />
                
                <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                  <Image
                    src="/images/founders/duo1.webp"
                    alt="BrandNest Founders"
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Subtle Grain Overlay instead of heavy vignette */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Story Teaser Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-[#FF5C00] uppercase bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20">
                <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full animate-ping" />
                Our Story
              </div>

              <h2 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
                From Freelancing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF7A2E]">
                  To Building Brands.
                </span>
              </h2>

              <p className="mb-10 text-lg text-gray-400 leading-relaxed max-w-lg">
                What started with one laptop eventually became BrandNest — a
                premium digital agency where robust Engineering meets elite Influencer 
                strategy to help businesses scale authentically.
              </p>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12">
                {[
                  { label: "50+ Projects", icon: "💎" },
                  { label: "AI Tools", icon: "⚡" },
                  { label: "Startup Sites", icon: "🌐" },
                  { label: "Growth Systems", icon: "🔥" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FF5C00]/30 group-hover:bg-[#FF5C00]/5 transition-all">
                      <span className="text-lg">{stat.icon}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/founders">
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(255, 92, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 overflow-hidden rounded-2xl bg-[#FF5C00] text-white font-bold text-lg transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Journey
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderTeaser;
