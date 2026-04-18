/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9EC',
        linen: '#F5EFE6',
        peach: '#E8B4A0',
        'peach-dark': '#D9A18C',
        sage: '#9CAE98',
        olive: '#5D6B5E',
        charcoal: '#4A4543',
        'warm-gray': '#6B6663',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
