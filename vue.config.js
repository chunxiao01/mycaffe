// const path = require("path")
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        common: "@/common",
        network: "@/network",
        views: "@/views",
        network: "@/network"
      }
    }
  }
})
