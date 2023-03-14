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
      dark: {
        DEFAULT: "#344054",
      },
      white: "#FFFFFF",
      light: {
        DEFAULT: "#F9FAFB",
        200: "#EAECF0",
      },
      gray: {
        100: "#667085",
        200: "#D0D5DD",
      },
      purple: {
        100: "#6941C6",
        200: "#D6BBFB",
        light: "#F9F5FF",
      },
      green: {
        DEFAULT: "#027A48",
        light: "#ECFDF3",
      },
    },
  },
  plugins: [],
};
