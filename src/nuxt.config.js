const pkg = require("./package");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: "Lango",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Real-Time Multi-Language Translation for your Meetings & Events."
      },
      {
        property: "og:image",
        content:
          "https://langof.github.io/_nuxt/img/slide_conference.5008247.jpg"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Quicksand"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3B8070"
  },

  /*
   ** Global CSS
   */
  css: ["vuetify/src/stylus/main.styl", "font-awesome/scss/font-awesome.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify", "@/plugins/vuefire"],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios", "lodash", "firebase", "detect-browser", "vuefire"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
