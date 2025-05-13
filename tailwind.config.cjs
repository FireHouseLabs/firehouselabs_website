/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: colors.stone,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              '&:hover': {
                color: colors.stone[600],
              },
            },
            strong: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
              'margin-bottom': '1.5rem',
            },
            h2: {
              color: 'inherit',
              'margin-top': '2rem',
              'margin-bottom': '1rem',
            },
            h3: {
              color: 'inherit',
              'margin-top': '1.5rem',
              'margin-bottom': '0.75rem',
            },
            h4: {
              color: 'inherit',
              'margin-top': '1.25rem',
              'margin-bottom': '0.5rem',
            },
            p: {
              color: 'inherit',
              'margin-bottom': '1.25rem',
            },
            li: {
              color: 'inherit',
              'margin-bottom': '0.5rem',
            },
            ul: {
              'margin-bottom': '1.25rem',
            },
            ol: {
              'margin-bottom': '1.25rem',
            },
            code: {
              color: colors.stone[800],
              'background-color': colors.stone[100],
              padding: '0.25rem 0.4rem',
              'border-radius': '0.25rem',
              'font-size': '0.875em',
            },
            pre: {
              'background-color': colors.stone[100],
              padding: '1rem',
              'border-radius': '0.5rem',
              'margin-bottom': '1.5rem',
            },
            'pre code': {
              color: 'inherit',
              'background-color': 'transparent',
              padding: 0,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
