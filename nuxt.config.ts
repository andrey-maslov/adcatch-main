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
        ['nuxt-mail', {
            message: {
                to: 'andrei.maslau@gmail.com',
            },
            smtp: {
                host: 'smtp.zoho.eu',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                },
            },
        }]
    ],
})
