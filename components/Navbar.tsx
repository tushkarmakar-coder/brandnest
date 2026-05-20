'use client'
import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()
  const pathname = usePathname()

  const t = useTranslations('Sections')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 border-b border-[rgba(255,107,43,0.08)] backdrop-blur-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/#services" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">Services</Link>
          <Link href="/demos" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap font-bold">Demos</Link>
          <Link href="/#work" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">Our Work</Link>
          <Link href="/#why" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">Why Us</Link>
          <Link href="/founders" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">Our Story</Link>
          <Link href="/pricing" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">Pricing</Link>
          <a href="https://linktr.ee/thebrandnestofficial" target="_blank" rel="noopener noreferrer" className="text-[12px] sm:text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors whitespace-nowrap">{t('links')}</a>
          
          <LanguageSwitcher />

          <a href="https://wa.me/917894935653" target="_blank" rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-5 sm:px-6 py-2 text-[11px] sm:text-[12px] font-semibold rounded-[8px] hover:opacity-90 transition-opacity whitespace-nowrap">
            💬 WhatsApp
          </a>

          <Link href="/#consultation"
            className="bg-[#FF5C00] text-[#111] px-5 sm:px-6 py-2 text-[11px] sm:text-[12px] font-semibold hover:bg-[#FF7A2E] transition-colors whitespace-nowrap">
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#FF5C00] flex-shrink-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[rgba(255,92,0,0.08)] bg-[rgba(17,17,17,0.98)] overflow-x-hidden">
          <div className="px-4 sm:px-6 py-6 space-y-4">
            <Link href="/#services" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">Services</Link>
            <Link href="/demos" onClick={() => setIsOpen(false)} className="block text-[13px] text-[#FF5C00] font-bold hover:text-[#FF7A2E] transition-colors">Demos</Link>
            <Link href="/#work" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">Our Work</Link>
            <Link href="/#why" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">Why Us</Link>
            <Link href="/founders" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">Our Story</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">Pricing</Link>
            <a href="https://linktr.ee/thebrandnestofficial" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-[13px] text-[rgba(245,245,245,0.6)] hover:text-[#FF5C00] transition-colors">{t('links')} (Linktree)</a>
            
            <div className="py-2">
              <LanguageSwitcher />
            </div>

            <a href="https://wa.me/917894935653" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block bg-[#25D366] text-white px-5 sm:px-6 py-3 text-[13px] font-semibold rounded-[8px] hover:opacity-90 transition-opacity text-center shadow-lg">
              💬 WhatsApp
            </a>

            <Link href="/#consultation" onClick={() => setIsOpen(false)} className="block bg-[#FF5C00] text-[#111] px-5 sm:px-6 py-3 text-[13px] font-semibold hover:bg-[#FF7A2E] transition-colors text-center shadow-lg">
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
