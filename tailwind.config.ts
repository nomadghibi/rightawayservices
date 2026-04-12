import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16324F',
          light: '#1d3f63',
          dark: '#0f2338',
        },
        'service-blue': {
          DEFAULT: '#245C8F',
          light: '#2d72b0',
          dark: '#1b4870',
        },
        accent: {
          DEFAULT: '#F28C28',
          light: '#f5a550',
          dark: '#d97706',
        },
        charcoal: '#1F2937',
        'off-white': '#F8FAFC',
        'slate-gray': '#64748B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
