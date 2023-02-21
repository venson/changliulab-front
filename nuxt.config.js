export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "changliulab",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcdn.net/ajax/libs/bytemd/1.20.2/index.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcdn.net/ajax/libs/highlight.js/11.7.0/styles/vs.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.4/katex.min.css",
      },
      // {
      //   rel:"stylesheet",
      //   href:"https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
      // },
      // {
      //   href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      //   rel:"stylesheet"
      // }

    ],
    script: [

      {
        src:"https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"

      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vee-validate", ssr: false },
    { src: "@/plugins/request" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxt/image"],
  // markdownit: {
  // preset: 'default',
  // linkify: true,
  // breaks: true,
  // use: [
  //   'markdown-it-div',
  //   'markdown-it-attrs'
  // ]
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^element-ui/],
    analyze: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "data.token",
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "data",
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/auth/front/login", method: "post" },
          logout: { url: "/auth/front/logout", method: "post" },
          user: { url: "/auth/front/index/info", method: "get" },
        },
      },
    },
  },
  publicRuntimeConfig: {
    axios: {
      // baseURL: process.env.NODE_ENV ==='production'? 'http://119.12.172.94:8222':'http://localhost:8222'
      // baseURL: process.env.NODE_ENV ==='development'? 'http://119.12.172.94:8222':'http://localhost:8222'
    }
  },
  axios: {
    // baseURL: "http://localhost:8222", // Used as fallback if no runtime config is provided
    baseURL: "http://localhost:8222", // Used as fallback if no runtime config is provided
  },
};
