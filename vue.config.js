// const path = require('path');
// const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   // chainWebpack: config => {
//   //   config.plugins.delete('preload')
//   //   config.plugins.delete('prefetch')
//   // },
//   configureWebpack: {
//     //     if(process.env.NODE_ENV === 'production') {
//     //   // mutate config for production...
//     // } else {
//     //   return {
//     //     devtool: 'source-map',
//     //     output: {
//     //       filename: '[name].[hash].js',
//     //       chunkFilename: '[name].[hash].js'
//     //     },
//     //     // plugins: [
//     //     //   new PreloadWebpackPlugin(),
//     //     //   new CleanWebpackPlugin()
//     //     // ],
//     //     resolve: {
//     //       alias: {
//     //         '@imgSrc': path.join(__dirname, 'src/assets')
//     //       }
//     //     }
//     //   }
//     // },
//     plugins: [
//       new HtmlWebpackPlugin(),
//       new PreloadWebpackPlugin({
//         rel: 'preload',
//         // include: 'all',
//         include: {
//           type: 'asyncChunks',
//           entries: ['app']
//         }
//         // as(entry) {
//         //   if (/\.css$/.test(entry)) return 'style';
//         //   if (/\.woff$/.test(entry)) return 'font';
//         //   if (/\.gif$/.test(entry)) return 'image';
//         // return 'script';
//         // }
//       })
//     ]
//   }
// }

// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.plugin('prefetch').tap(options => {
      options[0].as = (entry) => {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';

        if (/\.gif$/.test(entry)) return 'image';
        if (/\.png$/.test(entry)) return 'image';
        if (/\.mp3$/.test(entry)) return 'audio';
        return 'script';
      }
      options[0].include = 'allAssets'
      // options[0].fileWhitelist: [/\.files/, /\.to/, /\.include/]
      // options[0].fileBlacklist: [/\.files/, /\.to/, /\.exclude/]
      return options
    })
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/main.scss";
          `
      }
    }
  }
}