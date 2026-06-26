/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#0a0f1c',
        'portfolio-card': '#111827',
        'portfolio-accent': '#06b6d4', // Cyan 500
        'portfolio-accent-hover': '#0891b2', // Cyan 600
        'portfolio-text': '#e2e8f0', // Slate 200
        'portfolio-text-muted': '#94a3b8', // Slate 400
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
