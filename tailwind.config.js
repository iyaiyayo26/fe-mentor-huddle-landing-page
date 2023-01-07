/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Violet-ext": "hsl(257, 40%, 49%)",
        "Soft-Magenta": "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
