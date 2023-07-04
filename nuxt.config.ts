// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head:{
      title: 'NG Store',
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, viewport-fit=cover, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Learn NuxtJS' },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
})
