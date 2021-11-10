const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index',
  output: {
    filename:'./dist/main.js'
  },
  plugins:[new HtmlWebpackPlugin({
    filename:'index.html',
    template:'./src/index.html',
    inject:true //true夹在在文件尾部
  })],
  devServer: {
    port:1222,
    open:true//自动打开浏览器
  },
  mode: 'development' // 设置mode
}