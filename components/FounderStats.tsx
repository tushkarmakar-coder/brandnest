"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const FounderStats = () => {
  const stats = [
    { label: "Projects Delivered", value: 50, suffix: "+", icon: "🚀" },
    { label: "Years Experience", value: 3, suffix: "+", icon: "🔥" },
    { label: "Pan India Reach", value: 100, suffix: "%", icon: "🇮🇳" },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: "💎" },
  ];

  return (
    <section className="py-24 bg-[#111111] relative">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[40px] flex flex-col items-center text-center backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-[#FF5C00]/30 hover:shadow-[0_20px_50px_-20px_rgba(255,107,43,0.2)]">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-[#FF5C00]/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                >
                  {stat.icon}
                </motion.div>
                
                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
                
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-[#FF5C00]/5 rounded-[40px] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderStats;
