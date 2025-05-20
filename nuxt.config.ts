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
    '@vueuse/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  sanity: {
    projectId: 'vdcdn384',
    dataset: "production",
    useCdn: true,

  },
  pwa: {
    strategies: 'injectManifest',
    srcDir: 'public',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    includeAssets: [
      "favicon.ico",
      "apple-touch-icon-180x180.png",
      "maskable-icon-512x512.png",
    ],
    manifest: {
      name: 'Usporedi.to',
      short_name: 'UsporediTo',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      // globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true,
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,json,ico}"],
      globIgnores: ["**/node_modules/**/*", "sw.ts", "workbox-*.js"],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})