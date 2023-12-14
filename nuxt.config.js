let baseUrl = 'http://94.241.170.46:7485';
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ICAP',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vee-validate',
    '~/plugins/datepicker',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/auth-next', '@nuxtjs/axios'],

  auth: {
    strategies: {
      local: {
        url: baseUrl,
        token: {
          property: 'access',
          maxAge: false,
          global: true,
        },
        refreshToken: {
          property: 'refresh',
        },
        user: {
          property: false,
          getData: ({ data }) => data.user,
        },
        endpoints: {
          login: {
            url: `${baseUrl}/accounts/login/`,
          },
          refresh: {
            url: `${baseUrl}/accounts/token/refresh/`,
          },
          logout: {
            url: `${baseUrl}/accounts/logout/`,
          },
          user: {
            url: `${baseUrl}/accounts/who-am-i/`,
          },
          reset: {
            url: `${baseUrl}/accounts/reset-password/`,
          },
        },
        autoFetchUser: true,
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/admin',
    },
  },
  router: {
    middleware: ['auth'],
  },

  axios: {
    baseUrl: baseUrl,
    credentials: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
