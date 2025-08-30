/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F37021',
          dark: '#e05a1a',
        },
        secondary: '#000000',
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        gray: {
          light: '#f8f9fa',
          DEFAULT: '#4e535a',
        },
        border: '#e9ecef',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        light: '0 2px 10px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 20px rgba(0, 0, 0, 0.15)',
        heavy: '0 8px 30px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #F37021 0%, #e05a1a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      },
    },
  },
  plugins: [],
}
