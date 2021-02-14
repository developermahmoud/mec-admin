export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - admin-frontend',
    title: 'admin-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
      },
    ]
  },
  css: [
    '~/assets/main.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/auth-next',
  ],
  axios: {
  },
  build: {
  },
  moment: {
    defaultTimezone: "Asia/Riyadh",
    locales: ["ar"]
  },
  auth: {
  },
  sentry: {
    dsn: 'https://05797be6c9ce487f816fdbc0e01304c6@o524108.ingest.sentry.io/5636577', // Enter your project's DSN here
    config: {},
  },
  vuetify: {
    optionsPath: "./config/vuetify.options.js"
  }
}
