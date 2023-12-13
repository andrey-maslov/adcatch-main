/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        // Set a default font family for the entire document
        sans: ['PT Sans', 'Arial', 'sans-serif'],

        // Set font families for specific elements (headers in this case)
        heading: ['Bebas Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF3D00', // Your custom primary color
          hover: '#882201',
          // Add more states if needed (active, focus, etc.)
        },
      },
    },
  },
  plugins: [],
}

