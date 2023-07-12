/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      textColor: "#8CA5B5",
      borderColor: "#1e2d3d",
    },
    screens: {
      lg: {
        max: "1024px",
      },
      md: {
        max: "700px",
      },
    },
  },
  plugins: [],
};
