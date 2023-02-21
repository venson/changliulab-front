module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./submodules/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./src/**/*.{html,js}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/*.js",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      aspectRatio: {
        "16/6": "16 / 6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("daisyui"),
    require("tw-elements/dist/plugin"),
    // require("@tailwindcss/forms")
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
  // daisyui: {
  //   styled: true,
  //   themes: true,
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: "",
  //   darkTheme: "light",
  // },
};
