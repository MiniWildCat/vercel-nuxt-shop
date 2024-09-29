import { resolve } from 'path'

export default {

  alias: {
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
    host: '0.0.0.0',
    // 'Access-Control-Allow-Origin': '*', // 允许跨域
  },

  head: {
    title: 'lilishop_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '商城，卖衣服，卖鞋子的商城，反正商品都卖，你想要的商品我们几乎全都有' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    API_DEV: {
      common: "https://common-api.pickmall.cn",
      buyer: "https://buyer-api.pickmall.cn",
      seller: "https://store-api.pickmall.cn",
      manager: "https://admin-api.pickmall.cn"
    },
    API_PROD: {
      common: "https://common-api.pickmall.cn",
      buyer: "https://buyer-api.pickmall.cn",
      seller: "https://store-api.pickmall.cn",
      manager: "https://admin-api.pickmall.cn"
    },
  },


  // Global CSS: https://go.nuxtjs.dev/config-css'base',
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/main.js'
  ],

  // 配置自定义加载器的文件
  // loading: '@/components/loading.vue',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/router',
    '@femessage/nuxt-micro-frontend' , // qiankun
  ],

  styleResources: {
    scss: [
      `@/assets/styles/global.scss`
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    // Simple usage
  ],

  // router: {
  //   middleware: 'auth',
  // //   base :'/',
  // //   mode: 'history'
  // }

}
