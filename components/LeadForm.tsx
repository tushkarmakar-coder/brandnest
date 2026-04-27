'use client'
import { useState } from 'react'

const SERVICES = ['Website Development', 'Video Production', 'Commercial Ads', 'AI Integration', 'Brand Identity', 'Full Package', 'Not Sure Yet']

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMsg(data.message)
        setForm({ name: '', phone: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
        setMsg(data.error)
      }
    } catch {
      setStatus('error')
      setMsg('Network error. Please WhatsApp us.')
    }
  }

  if (status === 'success') return (
    <div className="text-center py-8">
      <div className="w-12 h-12 border border-[#FF5C00] flex items-center justify-center text-[#FF5C00] text-xl mx-auto mb-4">✓</div>
      <p className="font-display text-[18px] font-semibold text-[#F5F5F5]">Request Received!</p>
      <p className="text-[13px] text-[rgba(245,245,245,0.5)] mt-2">{msg}</p>
    </div>
  )

  const inputClass = "w-full border border-[rgba(255,92,0,0.2)] bg-[#1A1A1A] text-[#F5F5F5] px-3.5 py-2.5 text-[13px] focus:outline-none focus:border-[#FF5C00] transition-colors placeholder:text-[rgba(255,92,0,0.4)]"
  const labelClass = "block text-[10px] tracking-[0.1em] uppercase text-[rgba(245,245,245,0.5)] mb-1.5 font-medium"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            required
            type="text"
            placeholder="Rahul Sharma"
            value={form.name}
            onChange={e => update('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input
            required
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input
          type="text"
          placeholder="Your company name"
          value={form.company}
          onChange={e => update('company', e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label className={labelClass}>Service Needed</label>
        <select
          value={form.service}
          onChange={e => update('service', e.target.value)}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
      {!compact && (
        <div>
          <label className={labelClass}>Message</label>
          <textarea
            rows={3}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={e => update('message', e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#FF5C00] text-[#111] py-3.5 text-[13px] font-semibold tracking-[0.04em] hover:bg-[#FF7A2E] transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Get Free Consultation →'}
      </button>
      {status === 'error' && <p className="text-orange-500 text-[12px] text-center">{msg}</p>}
      <p className="text-[11px] text-[rgba(245,245,245,0.4)] text-center">🔒 No spam · We call within 2 hours · 100% confidential</p>
    </form>
  )
}
