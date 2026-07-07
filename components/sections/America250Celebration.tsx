export function America250Celebration() {
  return (
    <div className="relative mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
      <span className="inline-flex items-center gap-1 text-accent">
        <span className="animate-shimmer-slow">★</span>
        <span className="animate-shimmer-slow [animation-delay:0.4s]">★</span>
        <span className="animate-shimmer-slow [animation-delay:0.8s]">★</span>
      </span>
      <span>America 250 Celebration</span>
      <span className="absolute -left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/70 animate-float-slow" />
      <span className="absolute -right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/70 animate-float-slow [animation-delay:1.2s]" />
    </div>
  )
}
