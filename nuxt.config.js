import colors from "vuetify/es5/util/colors";
const routerbase = process.env.DEPLOY_ENV === "GH_PAGES" ? "/vuegrades/" : "/";

console.log("ROUTER BASE:", routerbase);

export default {
  target: "static",
  router: {
    base: routerbase
  },
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${routerbase}favicon.ico` },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${routerbase}favicon-32x32.png`
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${routerbase}favicon-16x16.png`
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${routerbase}apple-touch-icon.png`
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.css", "~/assets/fonts/AbeeZee.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/localStorage.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/toast",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/cierrateam/nuxt-parse
    [
      "nuxt-parse",
      {
        appId: "JloiWz15PK7vNzbgy3aDVvqyUL12eol2FQtBHeXc",
        javascriptKey: "1nLuoZSIlnNLTlbUY9ARyiaY3SFi2YiGLgZJFCyJ"
      }
    ]
  ],
  toast: {
    theme: "bubble",
    position: "bottom-center"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: { icons: "fa" },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
