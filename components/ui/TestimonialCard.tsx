interface Testimonial {
  name: string
  location: string
  text: string
  stars?: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const stars = testimonial.stars ?? 5

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-charcoal text-sm leading-relaxed mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
        <p className="text-slate-gray text-xs">{testimonial.location}</p>
      </div>
    </div>
  )
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jere F.',
    location: 'Palm Bay, FL',
    text: "Right Away Services lives up to its name. Jamel made contact within a day of my inquiry and came to evaluate the jobs within another day. The quotes were very reasonable and he started work within the week. Jamel takes pride in his work and is very resourceful — meticulous and expert. I would highly recommend Right Away Services.",
    stars: 5,
  },
  {
    name: 'Ron G.',
    location: 'Space Coast, FL',
    text: "Jamel and his team did a fantastic job. We have a large high-end beachside home with very high ceilings so I was apprehensive of hiring just anyone. They took their time to make sure the job was done right and really exceeded my expectations. The price was quite fair for the scope of work. I would definitely recommend them without reservations.",
    stars: 5,
  },
  {
    name: 'Gary F.',
    location: 'Palm Bay, FL',
    text: "Jamel provided excellent interior painting service at a very good price. He showed up on time, moved and covered furniture and flooring, removed switch and outlet plates and replaced them after painting. Cleaned up everything as if he was never there.",
    stars: 5,
  },
  {
    name: 'Sandy S.',
    location: 'Palm Bay, FL',
    text: "Very pleased with Jamel and his crew. They were efficient, prompt, skilled, and fairly priced. I would use them again.",
    stars: 5,
  },
]
