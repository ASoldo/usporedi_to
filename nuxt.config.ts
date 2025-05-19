import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@nuxtjs/sanity',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt'
  ],
  sanity: {
    projectId: 'vdcdn384',
    dataset: "production",
    useCdn: true,

  }
})
