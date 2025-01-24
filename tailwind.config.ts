import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-montserrat)'],
        montserrat: ['var(--font-montserrat)'],
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
