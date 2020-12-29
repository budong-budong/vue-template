const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
// 需要将它改为'/my-app/'
// 服务器中的文件名称
const BASE_URL = process.env.NODE_ENV === 'production' ? '/WCS/' : '/'

module.exports = {

  // 基本接口路径
  baseUrl: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  // 路径设置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}
