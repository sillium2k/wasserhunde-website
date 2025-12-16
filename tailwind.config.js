/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          blue: '#0A4D68',
          DEFAULT: '#0A4D68',
        },
        petrol: {
          DEFAULT: '#088395',
          light: '#0a9fb5',
          dark: '#066b7c',
        },
        sand: {
          DEFAULT: '#E8DCC4',
          light: '#f0e8d8',
          dark: '#d4c8b0',
        },
        earth: {
          DEFAULT: '#C4A57B',
          light: '#d4b58b',
          dark: '#b4956b',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'elevation-1': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
