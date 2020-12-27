module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "rgb(21, 32, 43)",
      },
      animation: {
        wiggle: "wiggle 1s infinite",
        orbit: "orbit 5s linear infinite",
        "-orbit": "orbit 5s -2.5s linear infinite",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
  plugins: [],
};
