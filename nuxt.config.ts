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
  },
  routeRules: {
    '/': { prerender: true },
    '/documents': { prerender: true },
    '/documents/instruction': { prerender: true },
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
