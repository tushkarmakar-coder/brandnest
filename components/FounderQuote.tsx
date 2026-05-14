"use client";

import { motion } from "framer-motion";

const FounderQuote = () => {
  return (
    <section className="py-40 bg-[#111111] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF5C00]/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Quote Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.2, y: 0 }}
            viewport={{ once: true }}
            className="text-[120px] font-serif leading-none mb-4 text-[#FF5C00] select-none"
          >
            &ldquo;
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-12 leading-[1.1] tracking-tight">
            Different strengths.<br />
            One mission — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-orange-400">your growth. 🚀</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-gray-400 mb-20 italic font-medium"
          >
            &ldquo;Let&apos;s build something amazing together.&rdquo;
          </motion.p>
          
          <div className="relative inline-block group">
            {/* Pulsing button background */}
            <div className="absolute -inset-4 bg-[#FF5C00]/20 rounded-[32px] blur-2xl group-hover:bg-[#FF5C00]/40 transition-all animate-pulse" />
            
            <motion.a
              href="/#consultation"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-16 py-6 bg-[#FF5C00] text-white font-black text-2xl rounded-2xl transition-all shadow-2xl shadow-[#FF5C00]/30 flex items-center gap-4 group overflow-hidden inline-flex"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg 
                className="w-8 h-8 relative z-10 transition-transform group-hover:translate-x-2" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </motion.a>
          </div>
          
          {/* Animated particles around CTA */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
                x: [0, (i % 2 === 0 ? 40 : -40) * Math.random()],
                y: [0, -60 * Math.random()],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="absolute w-2 h-2 bg-[#FF5C00] rounded-full blur-[1px] pointer-events-none"
              style={{
                left: '50%',
                bottom: '100px',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderQuote;
