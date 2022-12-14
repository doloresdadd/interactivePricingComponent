/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        softCyan: "hsl(174, 77%, 80%)",
        strongCyan: "hsl(174, 86%, 45%)",
        lightGrayishRed: "hsl(14, 92%, 95%)",
        lightRed: "hsl(15, 100%, 70%)",
        paleBlue: "hsl(226, 100%, 87%)",
        veryPaleBlue: "hsl(230, 100%, 99%)",
        lightGrayishBlue: "hsl(224, 65%, 95%)",
        lightGrayishBlue2: "hsl(223, 50%, 87%)",
        grayishBlue: "hsl(225, 20%, 60%)",
        darkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: () => ({
        bgPattern: "url('../images/bg-pattern.svg')",
        patternCircles: "url('../images/pattern-circles.svg')",
      }),
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "150%": "40%",
      16: "4rem",
    },
  },

  plugins: [],
};
