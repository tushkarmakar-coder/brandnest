'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  Globe, 
  UserCheck, 
  Layers, 
  Zap, 
  Crown, 
  ShieldCheck, 
  Mail, 
  Server, 
  Lock,
  ArrowRight,
  Video,
  PlayCircle,
  Megaphone,
  Instagram,
  Target,
  Clock
} from 'lucide-react'
import Footer from '@/components/Footer'

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('web')

  const categories = [
    { 
      id: 'web', 
      label: 'Web Development', 
      icon: <Globe className="w-4 h-4" />,
      badges: ['Domain & Hosting Included', 'Professional Mailboxes', 'Turnkey Deployment']
    },
    { 
      id: 'video', 
      label: 'Video Production', 
      icon: <Video className="w-4 h-4" />,
      badges: ['4K Export Quality', 'Stock Media Access', 'Pro Sound Design']
    },
    { 
      id: 'marketing', 
      label: 'Ads & Marketing', 
      icon: <Target className="w-4 h-4" />,
      badges: ['Target Audience Research', 'Performance Analytics', 'Creative Ad Copy']
    }
  ]

  const webPlans = [
    {
      name: "Static Website",
      price: "₹25,000",
      description: "Fast, lightweight, and perfect for displaying information without complex logic.",
      features: [
        "Up to 5 Pages",
        "Fully Responsive Design",
        "SEO Optimization",
        "Contact Form Integration",
        "Lightning Fast Loading"
      ],
      icon: <Globe className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Ideal for Portfolios",
      bonus: null,
      examples: null
    },
    {
      name: "Login + Registration",
      price: "₹70,000",
      description: "Interactive websites with user authentication and personalized experiences.",
      features: [
        "Everything in Static",
        "User Authentication (OTP/Email)",
        "Member Dashboard",
        "Database Integration",
        "Secure User Data Storage"
      ],
      icon: <UserCheck className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Community Ready",
      bonus: null,
      examples: null
    },
    {
      name: "Full Stack (Mid)",
      price: "₹1.5L+",
      description: "Dynamic applications with advanced content management and admin panels.",
      features: [
        "Everything in Login+Reg",
        "Custom CMS (Admin Panel)",
        "Dynamic Service Modules",
        "Real-time Data Updates",
        "Blog/Resources System"
      ],
      icon: <Layers className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Scale Ready",
      examples: "Blogs, Corporate Sites, Real Estate Portals",
      bonus: null
    },
    {
      name: "Full Stack (Medium)",
      price: "₹3L+",
      description: "Robust e-commerce or service platforms with complex workflows.",
      features: [
        "Everything in Mid",
        "Payment Gateway Integration",
        "Order/Service Management",
        "Advanced Analytics Dashboard",
        "Custom User Roles/Permissions"
      ],
      icon: <Zap className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Commerce Driven",
      examples: "E-commerce Stores, Marketplace MVPs, Booking Engines",
      bonus: "1 Month Free Maintenance"
    },
    {
      name: "Full Stack (Premium)",
      price: "₹5L+",
      description: "Enterprise-grade solutions with custom AI and massive scalability.",
      features: [
        "Everything in Medium",
        "AI Agent Integration",
        "Custom Workflow Automation",
        "High-Scale Architecture",
        "White-glove 24/7 Support"
      ],
      icon: <Crown className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Enterprise Class",
      examples: "Custom SaaS, AI Platforms, ERP Solutions",
      bonus: "3 Months Free Maintenance"
    }
  ]

  const videoPlans = [
    {
      name: "Reels & Shorts",
      price: "₹3,999",
      description: "High-impact short-form content designed to go viral and grab attention.",
      features: [
        "Up to 60 Seconds",
        "Dynamic Viral Captions",
        "Sound Design & SFX",
        "Color Grading",
        "Fast 24-48 Hour Delivery"
      ],
      icon: <Instagram className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Social Growth",
      bonus: null,
      examples: null
    },
    {
      name: "Professional Editing",
      price: "₹9,999+",
      description: "Long-form YouTube videos, interviews, and professional brand stories.",
      features: [
        "Up to 15 Minutes",
        "Advanced Motion Graphics",
        "Professional Sound Mixing",
        "Stock Footage Selection",
        "Cinematic Transitions"
      ],
      icon: <PlayCircle className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Brand Authority",
      bonus: null,
      examples: null
    },
    {
      name: "Premium Commercial",
      price: "₹24,999+",
      description: "High-end commercials and product ads with AI-enhanced production.",
      features: [
        "TV/Cinema Quality",
        "AI Voiceovers & FX",
        "Complex VFX Integration",
        "Full Scriptwriting",
        "Unlimited Revisions"
      ],
      icon: <Video className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Performance Ad",
      bonus: null,
      examples: null
    }
  ]

  const marketingPlans = [
    {
      name: "Basic SMM",
      price: "₹19,999/mo",
      description: "Essential social media presence to keep your brand active and professional.",
      features: [
        "12 Custom Posts/mo",
        "Content Strategy",
        "Caption & Hashtag Research",
        "Profile Optimization",
        "Monthly Progress Report"
      ],
      icon: <Instagram className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Essential",
      bonus: null,
      examples: null
    },
    {
      name: "Commercial Ad Setup",
      price: "₹14,999",
      description: "Launch high-ROI ad campaigns on Meta or Google with expert precision.",
      features: [
        "Target Audience Research",
        "Ad Copywriting",
        "2 Premium Ad Creatives",
        "Pixel & Tracking Setup",
        "Campaign Launch Support"
      ],
      icon: <Megaphone className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Performance",
      bonus: null,
      examples: null
    },
    {
      name: "Full Growth Engine",
      price: "₹49,999/mo",
      description: "Comprehensive marketing strategy for rapid brand scaling and lead generation.",
      features: [
        "Daily Content Production",
        "Full Ad Management",
        "Lead Magnet Creation",
        "Influencer Outreach",
        "Weekly Strategy Syncs"
      ],
      icon: <Zap className="w-8 h-8 text-[#FF5C00]" />,
      tag: "Scale Focused",
      bonus: null,
      examples: null
    }
  ]

  const maintenance = [
    { tier: "Mid", price: "₹30,000/mo" },
    { tier: "Medium", price: "₹50,000/mo" },
    { tier: "Premium", price: "₹1,00,000/mo" }
  ]

  const getCurrentPlans = () => {
    switch (activeCategory) {
      case 'web': return webPlans
      case 'video': return videoPlans
      case 'marketing': return marketingPlans
      default: return webPlans
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-12 bg-[#111111] text-[#F5F5F5] font-inter hero-grid-bg">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-syne font-extrabold text-[#F5F5F5] mb-6 leading-tight">
            Our <span className="text-[#FF5C00]">Pricing</span>
          </h1>
          <p className="text-xl text-[rgba(245,245,245,0.6)] max-w-2xl mx-auto mb-12 font-medium">
            Strategic pricing for brands that don&apos;t settle for average. 
            Choose your category to explore our packages.
          </p>

          {/* Category Switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-[#1A1A1A] rounded-[2rem] w-fit mx-auto border border-[rgba(255,92,0,0.1)] shadow-2xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 text-sm tracking-wide ${activeCategory === cat.id ? 'bg-[#FF5C00] text-[#111] shadow-lg shadow-[#FF5C00]/20' : 'text-[rgba(245,245,245,0.4)] hover:text-white'}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[rgba(245,245,245,0.4)]">
            {categories.find(c => c.id === activeCategory)?.badges.map((badge, bIdx) => (
              <motion.span 
                key={`${activeCategory}-${badge}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: bIdx * 0.1 }}
                className="flex items-center gap-2 border border-[rgba(255,92,0,0.15)] px-4 py-2 rounded-full"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {getCurrentPlans().map((plan, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative flex flex-col p-10 rounded-[2.5rem] border ${plan.name.includes('Premium') || plan.name.includes('Growth') ? 'border-[#FF5C00] bg-[#1A1A1A] shadow-2xl' : 'border-[rgba(255,92,0,0.08)] bg-[#1A1A1A]/40 backdrop-blur-sm hover:border-[rgba(255,92,0,0.2)]'}`}
              >
                {plan.bonus && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5C00] text-[#111] px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {plan.bonus}
                  </div>
                )}
                
                <div className="mb-8 p-5 bg-[#111] border border-[rgba(255,92,0,0.1)] rounded-3xl w-fit text-[#FF5C00]">
                  {plan.icon}
                </div>

                <div className="mb-3">
                  <span className="text-[10px] font-black uppercase text-[#FF5C00] tracking-[0.2em] opacity-80">{plan.tag}</span>
                  <h3 className="text-2xl font-syne font-bold text-[#F5F5F5] mt-2">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-extrabold text-[#F5F5F5]">{plan.price}</span>
                  <span className="text-[rgba(245,245,245,0.3)] text-xs font-bold uppercase tracking-widest">{plan.price.includes('/') ? '' : 'start'}</span>
                </div>

                <p className="text-[rgba(245,245,245,0.5)] text-sm mb-10 leading-[1.8] font-medium">
                  {plan.description}
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#FF5C00]" />
                      </div>
                      <span className="text-[13px] text-[rgba(245,245,245,0.7)] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.examples && (
                  <div className="mb-10 p-5 bg-[#111]/50 rounded-2xl border border-[rgba(255,92,0,0.05)]">
                    <p className="text-[10px] font-black text-[rgba(255,92,0,0.4)] uppercase tracking-widest mb-3">Project Examples</p>
                    <p className="text-[12px] text-[rgba(245,245,245,0.4)] italic leading-relaxed font-medium">{plan.examples}</p>
                  </div>
                )}

                <button className={`w-full py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 ${plan.name.includes('Premium') || plan.name.includes('Growth') ? 'bg-[#FF5C00] text-[#111] hover:bg-[#FF7A2E] shadow-xl shadow-[#FF5C00]/20' : 'bg-transparent border border-[rgba(255,92,0,0.2)] text-[#F5F5F5] hover:bg-[#FF5C00] hover:text-[#111] hover:border-[#FF5C00]'}`}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Maintenance & Turnkey Section */}
      <section className="py-32 border-t border-[rgba(255,92,0,0.1)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-syne font-bold mb-10 leading-tight">
                Ongoing <span className="text-[#FF5C00]">Maintenance</span>
              </h2>
              <p className="text-[rgba(245,245,245,0.5)] text-lg mb-12 font-medium leading-[1.8]">
                Peak performance requires constant care. Our maintenance plans cover security audits, 
                bug fixes, and core updates to ensure your digital asset never stops growing.
              </p>

              <div className="space-y-4">
                {maintenance.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-8 rounded-3xl border border-[rgba(255,92,0,0.1)] bg-[#1A1A1A]/50 backdrop-blur-md">
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#FF5C00] tracking-widest opacity-80">{item.tier} Tier</span>
                      <h4 className="text-xl font-bold mt-2">Active Support</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 p-5 bg-[#FF5C00]/5 border border-[#FF5C00]/10 rounded-2xl">
                  <div className="bg-[#FF5C00] p-1.5 rounded-full">
                    <Check className="w-3 h-3 text-[#111]" />
                  </div>
                  <p className="text-[#FF5C00] font-bold text-sm">3 Months Free Maintenance for Premium (Premium)</p>
                </div>
                <div className="flex items-center gap-4 p-5 bg-[#FF5C00]/5 border border-[#FF5C00]/10 rounded-2xl opacity-80">
                  <div className="bg-[#FF5C00] p-1.5 rounded-full">
                    <Check className="w-3 h-3 text-[#111]" />
                  </div>
                  <p className="text-[#FF5C00] font-bold text-sm">1 Month Free Maintenance for Medium (Commerce driven projects)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-[rgba(255,92,0,0.1)] rounded-[4rem] p-16 shadow-3xl"
            >
              <h3 className="text-4xl font-syne font-bold mb-12 text-center">Turnkey <span className="text-[#FF5C00]">Solutions</span></h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-2xl flex items-center justify-center text-[#FF5C00]">
                    <Globe size={24} />
                  </div>
                  <h5 className="text-lg font-bold">Domain Management</h5>
                  <p className="text-sm text-[rgba(245,245,245,0.4)] leading-relaxed">Full setup of your custom TLD (.com, .in, .ai) with DNS management.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-2xl flex items-center justify-center text-[#FF5C00]">
                    <Server size={24} />
                  </div>
                  <h5 className="text-lg font-bold">Premium Hosting</h5>
                  <p className="text-sm text-[rgba(245,245,245,0.4)] leading-relaxed">High-performance edge hosting on Vercel/AWS for 99.9% uptime.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-2xl flex items-center justify-center text-[#FF5C00]">
                    <Mail size={24} />
                  </div>
                  <h5 className="text-lg font-bold">Business Email</h5>
                  <p className="text-sm text-[rgba(245,245,245,0.4)] leading-relaxed">Professional email IDs (you@company.com) for team communication.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF5C00]/10 border border-[#FF5C00]/20 rounded-2xl flex items-center justify-center text-[#FF5C00]">
                    <Lock size={24} />
                  </div>
                  <h5 className="text-lg font-bold">Enterprise Security</h5>
                  <p className="text-sm text-[rgba(245,245,245,0.4)] leading-relaxed">SSL certification, firewalls, and regular vulnerability scanning.</p>
                </div>
              </div>
              <div className="mt-16 text-center">
                <div className="inline-block px-8 py-4 bg-[#111] border border-[rgba(255,92,0,0.1)] rounded-2xl">
                  <p className="text-[13px] text-[rgba(245,245,245,0.6)] italic">
                    &quot;We handle everything from start to finish, so you can focus entirely on growing your business.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5C00]/5 blur-[120px] -mr-64 -mt-64 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF5C00]/5 blur-[120px] -ml-64 -mb-64 rounded-full"></div>
      </section>

      {/* Portfolio CTA */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center border-t border-[rgba(255,92,0,0.1)]">
        <h2 className="text-4xl md:text-6xl font-syne font-bold mb-8">Ready to <span className="text-[#FF5C00]">scale?</span></h2>
        <p className="text-[rgba(245,245,245,0.5)] mb-12 max-w-xl mx-auto text-lg font-medium">
          Join the league of high-performance brands. Let&apos;s build your digital future today.
        </p>
        <Link href="/#work" className="inline-flex items-center gap-3 bg-[#FF5C00] text-[#111] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#FF7A2E] transition-all shadow-xl shadow-[#FF5C00]/20">
          View Our Work <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}

export default PricingPage
