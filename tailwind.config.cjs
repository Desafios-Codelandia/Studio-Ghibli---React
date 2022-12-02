/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        esquerdo: "#628E75",
        direito: "#1A4855",
        botaoFundo: "#658E76"
      },
      height: {
        meu1: "720px"
      },
      animation: {
        bounce: 'bounce 10s infinite',
      }
    },
  },
  plugins: [],
}