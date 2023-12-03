const path = require('path')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/styles/basic.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    baseURL: '/mm-guide/',
    buildAssetsDir: 'assets',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/mm-guide/public/favicon.ico" }]
  },
  },
  routeRules: {
    '/': { prerender: true },
    '/documents': { prerender: true },
    '/documents/introduction': { prerender: true },
    '/documents/howToUse': { prerender: true },
    '/documents/embedded': { prerender: true },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs'),
    },
  },
  experimental: {
    payloadExtraction: false
  }
})
