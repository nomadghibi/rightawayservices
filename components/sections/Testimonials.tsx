import { TestimonialCard, testimonials } from '@/components/ui/TestimonialCard'

interface TestimonialsProps {
  heading?: string
}

export function Testimonials({ heading = 'What Our Customers Say' }: TestimonialsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">{heading}</h2>
          <p className="text-slate-gray max-w-xl mx-auto">
            Real feedback from homeowners and property managers across the Space Coast.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
