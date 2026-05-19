"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FounderHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#111111]">
      {/* Cinematic Background with Parallax Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, #FF5C00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5C00]/10 rounded-full blur-[150px]" 
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
        
        {/* Floating cinematic particles with randomized parallax */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-[#FF5C00]/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, x: 10 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-[0.2em] text-[#FF5C00] uppercase bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20 cursor-default"
              >
                <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full animate-ping" />
                The Journey
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
                Built From <span className="text-[#FF5C00] relative">Hustle.
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-1 bg-[#FF5C00]/30 -z-10"
                  />
                </span><br />
                Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-orange-400">Together.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
                From freelancing late nights to building a full-service digital agency. 
                BrandNest is the synergy of robust Engineering and elite Influencer strategy — 
                a mission to empower businesses with technical excellence and authentic brand growth.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <motion.a 
                  href="/#consultation"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px -15px rgba(255, 92, 0, 0.5)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#FF5C00] text-white font-black rounded-2xl transition-all shadow-xl shadow-[#FF5C00]/20 relative overflow-hidden group inline-block"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.a>
                <motion.a 
                  href="/#services"
                  whileHover={{ 
                    scale: 1.05, 
                    background: "rgba(255, 255, 255, 0.1)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 transition-all backdrop-blur-md inline-block"
                >
                  View Services
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Illustration & Floating UI */}
          {/* Right Side: Illustration */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative min-h-[400px] sm:min-h-[500px] aspect-[3/4] max-w-[500px] mx-auto"
            >
              {/* Premium Luxury Frame for Hero (Cleaned of all overlaps) */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.01 }}
                className="relative w-full h-full p-1 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden group"
              >
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#111]">
                  <Image 
                    src="/images/founders/duo2.webp"
                    alt="BrandNest Founders"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHero;
