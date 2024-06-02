/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(3.7rem, 1fr))",
      },
    },
  },
  plugins: [],
};
