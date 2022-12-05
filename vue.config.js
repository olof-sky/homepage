const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://olofschylander.com",
        changeOrigin: true,
      },
    },
  },
});
