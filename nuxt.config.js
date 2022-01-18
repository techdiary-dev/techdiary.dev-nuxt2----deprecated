export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s | টেকডায়েরি",
        htmlAttrs: {
            lang: "bn",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/styles/app.scss",
        "highlight.js/styles/atom-one-dark.css",
        "vue-tour/dist/vue-tour.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/visibility-observer",
        "~/plugins/clickaway",
        "~/plugins/resizeable-input",
        "~/plugins/multi-select",
        "~/plugins/tour.client",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxt/postcss8",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-analytics",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/content
        // "@nuxt/content",
        "@nuxtjs/cloudinary",
        "@nuxtjs/auth-next",
        "@nuxtjs/toast",
        "@nuxtjs/dayjs",
        "nuxt-seo-meta",
        "@nuxtjs/sentry",
        [
            "@netsells/nuxt-hotjar",
            {
                id: process.env.NUXT_ENV_HOTJAR_ID,
            },
        ],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.NUXT_ENV_API_URL,
        credentials: true,
    },

    seoMeta: {
        title: "TechDiary",
        siteName: "TechDiary",
        description:
            "Thinking, Problem, Solution - Bangla programming network - TechDiary",
        defaultDescription:
            "Thinking, Problem, Solution - Bangla programming network - TechDiary",
        defaultUrl: process.env.NUXT_ENV_BASE_URL,
        keywords: "techdiary, TechDiary",
        defaultImage:
            "https://res.cloudinary.com/techdiary-dev/image/upload/f_auto,q_auto/v1642352920/static-assets/mbp4ew9l0deabdpwts45.jpg",
        locale: "bn",
    },

    dayjs: {
        locales: ["bn"],
        defaultLocale: "bn",
        plugins: ["relativeTime"],
    },

    colorMode: {
        classSuffix: "",
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    // content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    googleAnalytics: {
        id: process.env.NUXT_APP_GOOGLE_ANALYTICS_ID,
    },

    cloudinary: {
        cloudName: process.env.NUXT_APP_CLOUDINARY_CLOUDNAME,
        useComponent: true,
    },

    toast: {
        position: "top-center",
    },

    sentry: {
        dsn: process.env.NUXT_APP_SENTRY_DSN,
    },

    server: {
        host: "0.0.0.0",
    },

    auth: {
        strategies: {
            laravelSanctum: {
                provider: "laravel/sanctum",
                url: process.env.NUXT_ENV_API_URL,
                endpoints: {
                    login: {
                        url: "/api/auth/login-spark",
                    },
                    logout: {
                        url: "/api/auth/logout",
                        method: "post",
                    },
                    user: {
                        url: "/api/profile/me",
                        propertyName: false,
                    },
                },
            },
        },
        watchLoggedIn: true,
        redirect: {
            login: "/auth/login", // User will be redirected to this path if login is required.
            logout: "/", // User will be redirected to this path if after logout, current route is protected.
            callback: "/auth/login", // User will be redirected to this path by the identity provider after login.
            home: "/", // User will be redirected to this path after login. (rewriteRedirects will rewrite this path)
        },
    },
};
