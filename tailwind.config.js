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
      borderColor: "#314158",
      "theme-backdrop": "#020618",
      "theme-stroke": "#314158",
      "theme-background": "#0F172B",
      "theme-foreground": "#90A1B9",
      "theme-heading-foreground": "#F8FAFC",
      foreground: "#90A1B9",
      "primitive-slate-600": "#45556C",
      "primitive-slate-800": "#1D293D",
      "primitive-slate-950": "#020618",
    },
  },
  plugins: [],
};
