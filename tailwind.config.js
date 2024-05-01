/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#228B22',   // Example custom main color - green
        'dark-green': '#0e390e',  // Example custom - dark green
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity'
      }
    },
  },
  plugins: [],
}