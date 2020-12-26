module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "rgb(21, 32, 43)",
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
