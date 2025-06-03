// tailwind.config.js

import colors from 'tailwindcss/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgba(46, 16, 101, 0.3)',
          medium: colors.zinc[200],
          dark: colors.violet[950],
        },
        secondary: {
          light: colors.orange[50],
          dark: colors.orange[500],
          500: colors.amber[500],
        },
        ternary: {
          light: colors.zinc[100],
          medium: colors.zinc[400],
          dark: colors.orange[600],
        },
      },
    },
  },
  plugins: [],
}
