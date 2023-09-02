// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    rootId: 'app',
    head: {
      link: [
        { href: 'https://fonts.bunny.net', rel: 'preconnect' },
        { href: 'https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900', rel: 'stylesheet' }
      ]
    }
  },
  css: [
    '~/assets/scss/app.scss'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
