// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://checkdrive.ca/',
    }
  },
  app: {
    head: {
      title: 'Check Drive Driving School | Driving Lessons in Richmond',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'canonical',
          href: 'https://www.checkdrive.ca/',
        },
      ],
      meta: [
        { 
          name: 'keywords',
          content: 'driving school, driving lessons, driving instructor, driving school near me, driving lessons near me, driving instructor near me', 
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Master safe driving with Check Driving School. Experienced instructors, flexible schedules & comprehensive lessons for all. Drive with confidence today!',
        },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width' },
        {
          hid: 'og:image',
          property: 'og:image',

        }
      ],
    }
  },
})
