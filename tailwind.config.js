/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        love: {
          dark: '#1C060A',
          darker: '#0F0305',
          deep: '#3A0913',
          burgundy: '#5C0D1E',
          red: '#8B0A25',
          crimson: '#B80D34',
          rose: '#D84B6B',
          softpink: '#F4ACB7',
          blush: '#FFE5EC',
          cream: '#FFFDD0',
          paper: '#FAF0E6',
          gold: '#D4AF37',
          warmgold: '#F3E5AB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Dancing Script"', '"Great Vibes"', 'Caveat', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(216, 75, 107, 0.4)' },
          '100%': { boxShadow: '0 0 35px rgba(216, 75, 107, 0.8), 0 0 60px rgba(212, 175, 55, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
