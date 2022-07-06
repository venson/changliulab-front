export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'changliulab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'}


    ],
    script: [
      // { src: 'https://unpkg.com/mermaid/dist/mermaid.min.js'},
      { src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'},
      { src: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js'}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/header.scss',
    '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css',
    '@kangc/v-md-editor/lib/style/preview.css',
    '@kangc/v-md-editor/lib/theme/style/github.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {src: '@/plugins/v-md-editor',ssr:false},
    {src: '@/plugins/echarts.js'}
    // {src: '@/plugins/mavon-editor', ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      // '@kangc/v-md-editor'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit'
  ],
    markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    analyze: true
  }
}
