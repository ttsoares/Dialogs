/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      modBlue: "hsl(238, 40%, 52%)",
      softRed: "hsl(358, 79%, 66%)",
      lightGB: "hsl(239, 57%, 85%)",
      paleRed: "hsl(357, 100%, 86%)",
      darkBlue: "hsl(212, 24%, 26%)",
      grayBlue: "hsl(211, 10%, 45%)",
      lightGray: "hsl(223, 19%, 93%)",
      vlGray: "hsl(228, 33%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
});
