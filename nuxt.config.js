import CompressionPlugin from 'compression-webpack-plugin'
import minifyTheme from 'minify-css-string'

export default {
   // Global page headers: https://go.nuxtjs.dev/config-head
   srcDir: 'src/',
   server: {
      port: 8000, // default: 3000
      host: 'localhost', // default: localhost
   },
   head: {
      titleTemplate: '%s - 散之华',
      title: 'myblog-nuxt',
      htmlAttrs: {
         lang: 'en'
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: '散之华个人博客，分享技术心得，兴趣爱好' },
         { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
         { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Noto+SerifMerriweather|Merriweather+Sans|Source+Code+Pro|Ubuntu:400,700|Noto+Serif+SC" }
      ],
      script: [{
         src: '/tinymce/tinymce.min.js'
      }]
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
   ],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [
      '@/plugins/main'
   ],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [
      // https://go.nuxtjs.dev/vuetify
      '@nuxtjs/vuetify',
   ],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      '@nuxtjs/router',
      '@nuxtjs/axios',
   ],

   // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
   vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
         options: { minifyTheme },
      },
      // theme: {
      //    themes: {
      //       dark: {
      //          primary: colors.blue.darken2,
      //          accent: colors.grey.darken3,
      //          secondary: colors.amber.darken3,
      //          info: colors.teal.lighten1,
      //          warning: colors.amber.base,
      //          error: colors.deepOrange.accent4,
      //          success: colors.green.accent3
      //       }
      //    }
      // }
   },

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {
      extractCSS: { allChunks: true },
      optimization: {
         splitChunks: {
            minSize: 10000,
            maxSize: 250000
         },
      },

      babel: {
         "plugins": [
            ["prismjs", {
               "languages": ["java", "javascript", "css", "markup"],
               "plugins": ["line-numbers"],
               "theme": "tomorrow",
               "css": true
            }]
         ]
      },
      plugins: [

         new CompressionPlugin({

            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
            filename: "[path][base].gz",
            threshold: 10240, // 对超过10kb的数据进行压缩

            deleteOriginalAssets: false // 是否删除原文件

         })

      ],


   },
   // proxy: {
   //    '/api': {
   //       target: 'http://112.74.125.3:1145', // 后端提供给你的接口地址
   //       //target: 'http://localhost:1145',
   //       pathRewrite: {
   //          '^/api': '/api' // 代理api使用方法=> /proxyApi/test/where
   //       }
   //    }
   // },
   axios: {
      // baseURL: 'http://senkaryouran.top',
      proxy: true, // 表示开启代理

      prefix: '/', // 表示给请求url加个前缀 /api

      credentials: true // 表示跨域请求时是否需要使用凭证

   },

   proxy: {
      '/api': {
         target: 'http://senkaryouran.top:1145', // 目标接口域名
         // target: 'http://192.168.0.168:9001', // 本地
         changeOrigin: true, // 表示是否跨域
         pathRewrite: {
            '^/api': '/api', // 把 /api 替换成 /
         }
      }
   },
   router: {
      base: '/'
   },
   Ignore: [/^\.\/locale$/, /moment$/]
}
