/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#000000",
      },
      white: "#FFFFFF",
      light: {
        DEFAULT: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
