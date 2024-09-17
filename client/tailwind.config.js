/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'cl':'30px',
        'nl':'15px',
      },
      colors: {
        'light-black': '#000000B3',
        'custom-brown':'#676000',
      },
    },
  },
  plugins: [],
}
