'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  detailedContent?: string
  deliverables?: string[]
  whyChoose?: string[]
  romanticFeatures?: string[]
  results?: string[]
  packages?: Array<{ name: string; price: string; desc: string }>
  faq?: Array<{ q: string; a: string }>
}

export default function DetailModal({
  isOpen,
  onClose,
  title,
  description,
  children,
  detailedContent,
  deliverables,
  whyChoose,
  romanticFeatures,
  results,
  packages,
  faq,
}: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div className="bg-[#1A1A1A] border border-[rgba(255,92,0,0.3)] rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-[#1A1A1A] border-b border-[rgba(255,92,0,0.2)] p-6 flex items-center justify-between backdrop-blur-sm">
                <h2 className="font-display text-[26px] font-bold text-[#F5F5F5]">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[rgba(255,92,0,0.1)] rounded-lg transition-colors text-[#F5F5F5]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 text-[#F5F5F5]">
                {children || (
                  <div className="space-y-8">
                    {/* Detailed Content */}
                    {detailedContent && (
                      <div className="prose prose-invert max-w-none">
                        {detailedContent.split('\n').map((line, idx) => (
                          <p key={idx} className="text-sm leading-relaxed text-[rgba(245,245,245,0.7)]">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Why Choose */}
                    {whyChoose && whyChoose.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">Why Choose Us</h3>
                        <ul className="space-y-2">
                          {whyChoose.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[rgba(245,245,245,0.7)]">
                              <span className="text-[#FF5C00] font-bold">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Romantic Features */}
                    {romanticFeatures && romanticFeatures.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">💕 Special Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {romanticFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[rgba(245,245,245,0.7)]">
                              <span className="text-[#FF5C00]">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Deliverables */}
                    {deliverables && deliverables.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">📦 Deliverables</h3>
                        <ul className="space-y-2">
                          {deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[rgba(245,245,245,0.7)]">
                              <span className="text-[#FF5C00]">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    {results && results.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">📊 Results</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[rgba(245,245,245,0.7)]">
                              <span className="text-[#FF7A2E] font-bold">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Packages */}
                    {packages && packages.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">💰 Packages</h3>
                        <div className="space-y-3">
                          {packages.map((pkg, idx) => (
                            <div key={idx} className="bg-[rgba(255,92,0,0.05)] border border-[rgba(255,92,0,0.1)] rounded-lg p-4">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-[#F5F5F5]">{pkg.name}</h4>
                                <span className="text-[#FF5C00] font-bold">{pkg.price}</span>
                              </div>
                              <p className="text-xs text-[rgba(245,245,245,0.6)]">{pkg.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQ */}
                    {faq && faq.length > 0 && (
                      <div>
                        <h3 className="text-lg font-bold text-[#FF5C00] mb-4">❓ FAQ</h3>
                        <div className="space-y-3">
                          {faq.map((item, idx) => (
                            <div key={idx} className="bg-[rgba(255,92,0,0.05)] border border-[rgba(255,92,0,0.1)] rounded-lg p-4">
                              <h4 className="font-semibold text-[#F5F5F5] mb-2 text-sm">{item.q}</h4>
                              <p className="text-xs text-[rgba(245,245,245,0.6)]">{item.a}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer gradient */}
              <div className="sticky bottom-0 h-12 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
