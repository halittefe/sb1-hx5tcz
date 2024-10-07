/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD',
        secondary: '#FFDD44',
        accent: {
          blue: '#007ACC',
          red: '#FF0000',
        },
        neutral: {
          white: '#FFFFFF',
          black: '#000000',
          lightGray: '#F0F0F0',
          darkGray: '#303030',
        },
      },
    },
  },
  plugins: [],
}