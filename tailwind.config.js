/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const myClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 7s infinite",
        blob: "blob 7s infinite",
        passing: "passing 13s linear infinite",
        torch: "torch 3s infinite",
        skewed: "skewed 4s linear infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "scale(1) translate(0px, 0px)",
          },
          "33%": {
            transform: "scale(0.9) translate(30px, -50px)",
          },
          "66%": {
            transform: "scale(1.1) translate(-20px, 20px)",
          },
          "100%": {
            transform: "scale(1) translate(0px, 0px)",
          },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "25%": {
            transform: "translate(-50px, 0px)",
          },
          "50%": {
            transform: "translate(-50px, 30px)",
          },
          "75%": {
            transform: "translate(0px, 30px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
        passing: {
          "0%": {
            left: " 2000px ",
            top: "30px",
          },
          "20%": {
            left: " 1600px ",
            top: "30px",
          },
          "40%": {
            left: " 1200px ",
            top: "30px",
          },
          "60%": {
            left: "800px",
            top: "30px",
          },
          "80%": {
            left: "400px",
            top: "30px",
          },
          "100%": {
            left: "-70px",
            top: "30px",
          },
        },
        torch: {
          from: {
            backgroundPosition: "-270% 0",
          },
          to: {
            backgroundPosition: "320% 0",
          },
        },
        skewed: {
          "0%": {
            transform: "skewY(6deg)",
          },
          "25%": {
            transform: "skewY(0deg)",
          },
          "50%": {
            transform: "skewY(-6deg)",
          },
          "75%": {
            transform: "skewY(0deg)",
          },
          "100%": {
            transform: "skewY(6deg)",
          },
        },
        glow: {
          from: {
            top: "20rem",
          },
          to: {
            top: "-20rem",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), myClass],
};
