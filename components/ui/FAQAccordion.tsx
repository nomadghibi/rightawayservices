'use client'

import { useState } from 'react'
import type { FAQ } from '@/content/faqs'

interface FAQAccordionProps {
  faqs: FAQ[]
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-charcoal">{faq.question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-off-white flex items-center justify-center transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3 text-navy" fill="none" viewBox="0 0 10 6">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-gray leading-relaxed text-sm pr-10">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white px-6">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
