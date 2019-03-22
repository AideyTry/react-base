const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})

// webpack默认只能打包处理.js后缀名称类型的文件，像.png，.vue无法主动处理，所以要配置第三方的loader规则。
module.exports = {
  mode: 'development', // development 不压缩代码  production 会压缩代码
  plugins: [
    htmlPlugin
  ],
  // 配置loader, module是所有第三方模块的配置规则。
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader', // 一个loader的时候可以写字符串，如果是多个需要写数组。
        exclude: /node_modules/ // 排除项，一定要加。
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'] // 打包处理css样式表的第三方loader。可以在css-loader之后，通过?追加参数，其中有个固定的参数，叫做modules,表示为普通的css样式表启用模块化。
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名都可以省略不写，按照顺序依次查找。
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}