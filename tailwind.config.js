const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        surface: '#1A1A1A',
        border: '#FF5C00',
        text: '#F5F5F5',
        muted: 'rgba(245,245,245,0.5)',
        accent: '#FF5C00',
        'accent-light': '#FF7A2E',
        dark: '#111111',
        'dark-2': '#1A1A1A',
        'dark-surface': '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        ticker: 'ticker 24s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    },
  ],
}

module.exports = config
