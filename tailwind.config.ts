import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      fontFamily: {
        main: ['var(--font-copperplate-gothic-light)'],
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
        ovo: ['var(--font-ovo)'],
        poppins: ['var(--font-poppins)'],
        'copperplate-gothic-bold': ['var(--font-copperplate-gothic-bold)'],
        'copperplate-gothic-light': ['var(--font-copperplate-gothic-light)'],
      },
      colors: {
        'gray-500': 'var(--color-gray-500)',
        'blue-400': 'var(--color-blue-400)',
        'blue-500': 'var(--color-blue-500)',
        'yellow-500': 'var(--color-yellow-500)',
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
