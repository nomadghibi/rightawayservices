'use client'

import { useState } from 'react'
import { services } from '@/content/services'

const emailjsConfig = {
  serviceId: 'service_a6thti8',
  templateId: 'template_p9th8gb',
  publicKey: '9WXKK8L_FzYxHq0A2',
}

interface FormState {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  service: '',
  message: '',
}

interface EstimateFormProps {
  compact?: boolean
}

export function EstimateForm({ compact = false }: EstimateFormProps) {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const selectedService = services.find((item) => item.slug === form.service)?.name || 'Other / Not Sure'

      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjsConfig.serviceId,
          template_id: emailjsConfig.templateId,
          user_id: emailjsConfig.publicKey,
          template_params: {
            name: form.name,
            phone: form.phone,
            email: form.email || 'Not provided',
            city: form.city || 'Not provided',
            service: selectedService,
            message: form.message || 'No additional details provided',
            reply_to: form.email || 'rightawayservices2010@gmail.com',
          },
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        const errorText = await res.text().catch(() => '')
        console.error('EmailJS request failed', res.status, errorText)
        setStatus('error')
      }
    } catch (error) {
      console.error('EmailJS submission failed', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <svg className="w-10 h-10 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-semibold text-green-800 text-lg mb-1">Request Received!</h3>
        <p className="text-green-700 text-sm">
          Thanks — we&rsquo;ll be in touch shortly. For urgent needs, call us directly.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-service-blue focus:border-transparent'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(321) 555-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-charcoal mb-1">
            Your City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            placeholder="Palm Bay, FL"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
          Tell Us More About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe the repair or job you need help with..."
          className={inputClass}
        />
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base"
      >
        {status === 'submitting' ? 'Sending...' : 'Request Free Estimate'}
      </button>
      <p className="text-xs text-slate-gray text-center">
        No spam. No obligation. We&rsquo;ll respond within one business day.
      </p>
    </form>
  )
}
