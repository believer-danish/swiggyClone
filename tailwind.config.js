/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        myanim: {
          "0%": { color: "red" },
          "50%": { color: "yelllow" },
          "100%": { color: "green" },
        },
      },
      animation: {
        myanim: "myanim 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
