import { FAQAccordion } from '@/components/ui/FAQAccordion'
import type { FAQ } from '@/content/faqs'

interface FAQSectionProps {
  faqs: FAQ[]
  heading?: string
  subtext?: string
  dark?: boolean
}

export function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  subtext,
  dark = false,
}: FAQSectionProps) {
  return (
    <section className={`py-16 px-4 ${dark ? 'bg-navy' : 'bg-off-white'}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
            {heading}
          </h2>
          {subtext && (
            <p className={`text-base ${dark ? 'text-blue-200' : 'text-slate-gray'}`}>{subtext}</p>
          )}
        </div>
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  )
}
