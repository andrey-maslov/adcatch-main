// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    googleFonts: {
        display: 'swap',
        families: {
            'Bebas+Neue': [400],
            'PT+Sans': [400, 700],
        }
    },

    modules: [
        'nuxt-swiper',
        '@nuxtjs/tailwindcss',
        '@element-plus/nuxt',
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
    ],
})
