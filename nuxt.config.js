export default {
    target: "static",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "%s - " + "TokyoUnderground",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Community for music lovers.",
            },
            { name: "format-detection", content: "telephone=no" },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: "tokyounderground.net",
            },
            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://tokyounderground.net",
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "TokyoUnderground Official Site.",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Community for music lovers.",
            },
            {
                hid: "og:image",
                property: "og:image",
                content:
                    "https://i.gyazo.com/b4eeb86912a675d95db7ca23d0880558.jpg",
            },
            { name: "twitter:card", content: "summary" },
        ],
        link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff", height: "5px" },

    loadingIndicator: {
        name: "rotating-plane",
        color: "#ffffff",
        background: "black",
    },

    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/google-analytics",
            {
                id: "UA-136377412-5",
            },
        ],
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            "nuxt-i18n",
            {
                // 使用する言語の設定
                locales: [
                    {
                        code: "ja",
                        name: "Japanese",
                        iso: "ja_JP",
                        file: "ja-JP.json",
                    },
                    {
                        code: "en",
                        name: "English",
                        iso: "en-US",
                        file: "en-US.json",
                    },
                ],
                defaultLocale: "ja", // デフォルトの言語
                langDir: "locales/", // 翻訳ファイルのディレクトリパス
                strategy: "prefix_and_default", // URLに言語のプレフィックスを追加するかの指定
                vueI18n: {
                    // 翻訳ファイルが見つからなかった場合の言語を指定
                    fallbackLocale: "ja",
                },
                vueI18nLoader: true,
                lazy: true, // 遅延読み込みの有効化
            },
        ],
        "nuxt-webfontloader",
    ],

    webfontloader: {
        google: {
            families: [
                "M PLUS 1p",
                "Zen Kurenaido",
                "Caveat",
                "M PLUS Rounded 1c:400",
                "Zen Maru Gothic:500",
            ],
        },
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
