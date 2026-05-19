"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FounderProfiles = () => {
  return (
    <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle, #FF5C00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5C00]/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF5C00] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">The Leadership</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Meet The <span className="text-[#FF5C00]">Founders</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="relative z-10 h-full bg-[#1A1A1A] border border-white/10 rounded-[48px] p-8 md:p-14 overflow-hidden transition-all duration-500 hover:border-[#FF5C00]/40 hover:shadow-[0_40px_80px_-20px_rgba(255,92,0,0.15)]">
              <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                
            {/* Image Section with 3D Float */}
            <div className="relative w-full max-w-[240px] min-h-[320px] aspect-[3/4] flex-shrink-0 mx-auto md:mx-0">
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
                className="relative w-full h-full perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00] to-orange-600 rounded-[32px] rotate-6 group-hover:rotate-12 transition-transform opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-[32px] overflow-hidden border-2 border-white/10 group-hover:border-[#FF5C00]/40 transition-colors shadow-2xl">
                  <Image 
                    src="/images/founders/tushar.webp"
                    alt="Tushar Karmakar"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </motion.div>
            </div>

                {/* Info Section */}
                <div className="flex-1">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black text-[#FF5C00] bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full animate-pulse" />
                    The Engineer & Creator 🛠️
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight group-hover:text-[#FF5C00] transition-colors">Tushar Karmakar</h3>
                  <p className="text-lg font-bold text-orange-400/80 mb-6">Co-Founder</p>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-medium">
                    An Engineer by profession and a creator by passion. Tushar leads the technical development at BrandNest while also driving the agency&apos;s Video Creation and high-end cinematic Edits, perfectly blending robust engineering with visual storytelling.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                    {["Engineering", "Web Dev", "Video Creation", "Cinematic Edits", "Full Stack"].map((skill, i) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 92, 0, 0.2)" }}
                        className="px-4 py-2 bg-white/5 rounded-xl text-xs font-black text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simran Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="relative z-10 h-full bg-[#1A1A1A] border border-white/10 rounded-[48px] p-8 md:p-14 overflow-hidden transition-all duration-500 hover:border-[#FF5C00]/40 hover:shadow-[0_40px_80px_-20px_rgba(255,92,0,0.15)]">
              <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
                
                {/* Image Section with 3D Float */}
                <div className="relative w-full max-w-[240px] min-h-[320px] aspect-[3/4] flex-shrink-0 mx-auto md:mx-0">
                  <motion.div 
                    whileHover={{ rotateY: -15, rotateX: -5, scale: 1.05 }}
                    className="relative w-full h-full perspective-1000"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00] to-orange-600 rounded-[32px] -rotate-6 group-hover:-rotate-12 transition-transform opacity-20 blur-xl" />
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden border-2 border-white/10 group-hover:border-[#FF5C00]/40 transition-colors shadow-2xl">
                      <Image 
                        src="/images/founders/simran.webp"
                        alt="Simran Sharma"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Info Section */}
                <div className="flex-1">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black text-[#FF5C00] bg-[#FF5C00]/10 rounded-full border border-[#FF5C00]/20"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full animate-pulse" />
                    The Creative Force & Influencer 👑
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight group-hover:text-[#FF5C00] transition-colors">Simran Sharma</h3>
                  <p className="text-lg font-bold text-orange-400/80 mb-6">Founder</p>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-medium">
                    A professional Influencer and creative strategist. Simran brings her deep understanding of the creator economy to BrandNest, specializing in Influencer Marketing, Brand Styling, and high-impact Growth Strategy to ensure every brand looks premium and scales fast.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                    {["Influencer Marketing", "Brand Styling", "Strategy", "Looks & Aesthetic", "Growth"].map((skill, i) => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 92, 0, 0.2)" }}
                        className="px-4 py-2 bg-white/5 rounded-xl text-xs font-black text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderProfiles;
