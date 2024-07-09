import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-dm-sans)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        l3: {
          50: '#fbfcea',
          100: '#f9f9c8',
          200: '#f5f193',
          300: '#efe355',
          400: '#e9d432',
          500: '#d8ba1a',
          600: '#ba9214',
          700: '#956b13',
          800: '#7c5517',
          900: '#69461a',
          950: '#3d250b',
        },
      },
    },
  },
  plugins: [headlessuiPlugin, require('@tailwindcss/forms')],
} satisfies Config
