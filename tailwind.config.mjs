/** @type {import('tailwindcss').Config} */
export default {
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}', // make sure this covers your services file
],
  theme: {
    extend: {
      colors: {
        "aesthetic-bg": "#F9F8F6",
        "aesthetic-text": "#2C2C2C",
        "aesthetic-card": "rgba(255, 255, 255, 0.6)",
        "aesthetic-accent": "#E3D7C9",
      },
    },
  },
  plugins: [],
};