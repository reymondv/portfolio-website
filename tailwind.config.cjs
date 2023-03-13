/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6308',
        sub: '#00ec47',
        comment: '#8E8E8E',
      },
      gridTemplateColumns: {
        // Auto fill grid column
        'auto': 'repeat(auto-fit, minmax(100px, 1fr))',
      }
    },
  },
  plugins: [],
}