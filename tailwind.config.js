/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        screens:{
          'sm' : '300px',
          'md' : '500px',
          'lg' : '700px',
          'xl' : '1100px',
          '2xl': '1300px',
          '3xl' : '1500px'
        },
    },
  },
  plugins: [],
}