/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#4c6ef5',
          600: '#3b5bdb',
          700: '#364fc7',
          800: '#2b3da4',
          900: '#1e2b78',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #1a1b26, #1a1b26)',
      },
    },
  },
  plugins: [],
};