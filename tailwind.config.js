/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111315',
          soft: '#3A3F45',
          muted: '#5D636B',
          faint: '#9198A1',
        },
        paper: {
          DEFAULT: '#FAFAF8',
          raised: '#FFFFFF',
          sunken: '#F0F0EC',
        },
        line: {
          DEFAULT: '#E4E4DF',
          strong: '#D1D1C9',
        },
        accent: {
          DEFAULT: '#33475B',
          dark: '#20303F',
          light: '#EEF0F2',
          soft: '#5B7083',
        },
        signal: {
          DEFAULT: '#3E8F63',
          light: '#E9F5EE',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 24, 28, 0.04), 0 8px 24px -12px rgba(20, 24, 28, 0.10)',
        cardHover: '0 2px 4px rgba(20, 24, 28, 0.06), 0 16px 32px -12px rgba(20, 24, 28, 0.14)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        blink: 'blink 1.8s ease-in-out infinite',
        bounceY: 'bounceY 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
