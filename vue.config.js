// const path = require("path")
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/mycoffee/" : "/mycoffee/", //配置nginx代理发布项目
  productionSourceMap: false, //发布项目取消map文件生成
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
