// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    site: { indexable: false },

    devtools: { enabled: true },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Monitor your Ads with ADcatch',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    key: 'description',
                    name: 'description',
                    content: 'All campaign reports in one platform',
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Monitor your Ads with ADcatch',
                },
                {
                    key: 'og:image',
                    property: 'og:image',
                    content: `/img/features_opt.png`,
                },
                {
                    key: 'og:description',
                    property: 'og:description',
                    content: 'All campaign reports in one platform',
                },
                {
                    key: 'og:url',
                    property: 'og:url',
                    content: 'https://adcatch.pro',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }
    },

    googleFonts: {
        display: 'swap',
        families: {
            'Bebas+Neue': [400],
            'PT+Sans': [400, 700],
        }
    },

    gtag: {
        id: process.env.NUXT_PUBLIC_GTAG_ID
    },

    calendly: {},

    modules: [
        'nuxt-swiper',
        'nuxt-calendly',
        '@nuxtjs/tailwindcss',
        '@element-plus/nuxt',
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
        'nuxt-gtag',
    ]
})
