export function America250Celebration() {
  return (
    <div className="relative mb-5 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-navy/20 backdrop-blur-sm">
      <span className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-red-500/35 via-white/20 to-blue-600/30" />
      <span className="absolute inset-x-0 top-0 h-px bg-white/35" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/20" />

      <span className="relative inline-flex items-center gap-2 text-white">
        <span className="inline-flex items-center gap-1 text-red-200">
          <span className="animate-shimmer-slow">★</span>
          <span className="animate-shimmer-slow [animation-delay:0.35s]">★</span>
          <span className="animate-shimmer-slow [animation-delay:0.7s]">★</span>
        </span>
        <span className="tracking-[0.2em] uppercase text-[0.65rem] text-white/85">America 250</span>
      </span>

      <span className="relative hidden h-5 w-px bg-white/25 sm:block" />

      <span className="relative flex items-center gap-1">
        <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.55)] animate-float-slow" />
        <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)] animate-float-slow [animation-delay:0.9s]" />
        <span className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.55)] animate-float-slow [animation-delay:1.8s]" />
      </span>

      <span className="relative hidden sm:inline-flex items-center gap-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/80">
        <span className="text-red-200">Red</span>
        <span>•</span>
        <span className="text-blue-200">White</span>
        <span>•</span>
        <span className="text-red-200">Blue</span>
      </span>
    </div>
  )
}
