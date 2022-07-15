const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://olofschylander.com',
        changeOrigin: true,
      },
    }
  }
})