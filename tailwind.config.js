/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados del colegio (basados en el diseño azul del logo)
        primary: {
          50: '#e8f0f9',
          100: '#d1e1f3',
          200: '#a3c4e7',
          300: '#75a6db',
          400: '#4788cf',
          500: '#1961a8', // Azul principal del colegio
          600: '#154e86',
          700: '#103a65',
          800: '#0c2743',
          900: '#081322',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#d7d7d7',
          300: '#c3c3c3',
          400: '#afafaf',
          500: '#9b9b9b',
          600: '#7c7c7c',
          700: '#5d5d5d',
          800: '#3e3e3e',
          900: '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
