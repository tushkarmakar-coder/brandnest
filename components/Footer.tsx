import Link from 'next/link'
import Logo from './Logo'
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Phone, Mail, MapPin } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'AI Tools', href: '#ai' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SUPPORT_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap.xml' },
]

const SERVICES_LINKS = [
  { label: 'Website Development', href: '#services' },
  { label: 'Video Production', href: '#services' },
  { label: 'Commercial Ads', href: '#services' },
  { label: 'AI Integration', href: '#services' },
  { label: 'Brand Identity', href: '#services' },
  { label: 'SEO & Content', href: '#services' },
]

const SOCIALS = [
  { icon: Instagram, href: 'https://instagram.com/brandnest', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/brandnest', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/brandnest', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@brandnest', label: 'YouTube' },
  { icon: Facebook, href: 'https://facebook.com/brandnest', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F5F5F5]">
      {/* Top CTA Strip */}
      <div className="border-b border-[rgba(255,92,0,0.1)]">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[28px] font-semibold text-[#F5F5F5]">
              Ready to build something <span className="text-[#FF5C00]">remarkable?</span>
            </p>
            <p className="text-[13px] text-[rgba(245,245,245,0.45)] mt-1 font-body">Free consultation — no commitment, no spam.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#consultation" className="bg-[#FF5C00] text-[#111] px-7 py-3 text-[13px] font-semibold tracking-wide hover:bg-[#FF7A2E] transition-colors whitespace-nowrap">
              Get Free Quote →
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi BrandNest, I'd like a consultation.`}
              target="_blank" rel="noopener noreferrer"
              className="border border-[rgba(255,92,0,0.3)] text-[#FF7A2E] px-7 py-3 text-[13px] tracking-wide hover:border-[#FF5C00] hover:text-[#F5F5F5] transition-colors whitespace-nowrap"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-12">

          {/* Column 1 — Logo + About + Social */}
          <div>
            <div className="logo-masked mb-4">
              <Logo size="lg" />
            </div>
            <p className="text-[13px] text-[rgba(245,240,232,0.45)] leading-[1.9] font-body mb-6 max-w-[260px]">
              India{`'`}s premium AI-powered digital agency. Our professional developers build full-stack websites with hosting & deployment. We create AI-enhanced videos, run performance ads, and build AI tools — all under one roof.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 border border-[rgba(255,92,0,0.25)] flex items-center justify-center text-[rgba(245,245,245,0.5)] hover:border-[#FF5C00] hover:text-[#FF5C00] transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 text-[10px] text-[rgba(245,245,245,0.3)] tracking-[0.1em] uppercase border border-[rgba(255,92,0,0.15)] px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] font-medium mb-6 font-body">Quick Links</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[rgba(245,245,245,0.5)] hover:text-[#FF7A2E] transition-colors font-body">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] font-medium mb-6 font-body">Our Services</p>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[rgba(245,245,245,0.5)] hover:text-[#FF7A2E] transition-colors font-body">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] font-medium mb-6 font-body">Support</p>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[rgba(245,245,245,0.5)] hover:text-[#FF7A2E] transition-colors font-body">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact Info */}
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#FF5C00] font-medium mb-6 font-body">Contact Info</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#FF5C00] mt-0.5 flex-shrink-0" />
                <span className="text-[13px] text-[rgba(245,245,245,0.5)] leading-[1.7] font-body">
                  Noida, India<br />(Serving Pan India and Global Remotely)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#FF5C00] flex-shrink-0" />
                <a href="https://wa.me/917894935653" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[rgba(245,245,245,0.5)] hover:text-[#FF7A2E] transition-colors font-body">
                  WhatsApp: 7894935653
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#FF5C00] flex-shrink-0" />
                <a href="mailto:brandnest.team@gmail.com" className="text-[13px] text-[rgba(245,245,245,0.5)] hover:text-[#FF7A2E] transition-colors font-body">
                  brandnest.team@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(255,92,0,0.1)]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[rgba(245,245,245,0.3)] font-body">
            © {new Date().getFullYear()} BrandNest. All rights reserved.
          </p>
          <p className="text-[12px] text-[rgba(245,245,245,0.3)] font-body">
            AI-Powered. Brand-Obsessed. India.
          </p>
          <p className="text-[12px] text-[rgba(245,245,245,0.3)] font-body">
            Made with {`♥`} in India
          </p>
        </div>
      </div>
    </footer>
  )
}
