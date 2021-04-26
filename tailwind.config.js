const purge = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  purge: {
    enabled: purge,
    content: ["./build/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
