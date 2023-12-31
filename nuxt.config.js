export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Innerwave',
    titleTemplate: 'Innerwave | %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Title
      { name: 'application-name', content: 'Innerwave' },
      { name: 'apple-mobile-web-app-title', content: 'Innerwave' },
      { name: 'description', content: 'Innerwave Gang #ExecutiveRP' },
      { hid: 'description', name: 'description', content: 'Innerwave Gang #ExecutiveRP' },

      { property: 'og:title', content: 'Innerwave' },
      { name: 'og:image', content: '/logo64.webp' },
      { name: 'og:description', property: 'og:description', content: 'Innerwave Gang #ExecutiveRP' },

      // Description
      { name: 'twitter:description', content: 'Innerwave Gang #ExecutiveRP' },
      { name: 'twitter:title', content: 'Innerwave' },

      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo64.webp' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css', '~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/eslint-module', '@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  loading: true
}
