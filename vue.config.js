const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/mega-crossword-scratcher/" : "/",
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
})
