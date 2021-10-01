export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s | টেকডায়েরি",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/visibility-observer",
    "~/plugins/clickaway",
    "~/plugins/multi-select"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/cloudinary",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast",
    "@nuxtjs/dayjs"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_ENV_API_URL,
    credentials: true
  },

  dayjs: {
    locales: ["bn"],
    defaultLocale: "bn",
    plugins: ["relativeTime"]
  },

  tailwindcss: {
    cssPath: "~/asset/styles/app.scss"
  },

  colorMode: {
    classSuffix: ""
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  cloudinary: {
    cloudName: process.env.NUXT_APP_CLOUDINARY_CLOUDNAME,
    useComponent: true
  },

  toast: {
    position: "top-center"
  },

  server: {
    host: process.env.NUXT_ENV_HOST || "localhost"
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: process.env.NUXT_ENV_API_URL,
        endpoints: {
          login: {
            // url: "/api/auth/login"
            url: "/api/auth/login-spark"
          },
          logout: {
            url: "/api/auth/logout",
            method: "post"
          },
          user: {
            url: "/api/user",
            propertyName: false
          }
        }
      }
    },
    watchLoggedIn: true,
    redirect: {
      login: "/auth/login", // User will be redirected to this path if login is required.
      logout: "/", // User will be redirected to this path if after logout, current route is protected.
      callback: "/auth/login", // User will be redirected to this path by the identity provider after login.
      home: "/" // User will be redirected to this path after login. (rewriteRedirects will rewrite this path)
    }
  }
};
