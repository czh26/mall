const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/mall',
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint代码检查
  devServer: { // 环境配置
    // host: "192.168.31.31",
    port: 8080,
  },
})
