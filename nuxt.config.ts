// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vue3-toastify/dist/index.css', '~/assets/custom.css'],
  routeRules: {
    '/profile': { ssr: false },
    '/cart': { ssr: false },
    '/transactions': { ssr: false },
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@vueuse/motion/nuxt', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
    },
  },
});
