/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0 0 36px white",
      },
    },
  },
  plugins: [require("tailwindcss-animated") ],
};
