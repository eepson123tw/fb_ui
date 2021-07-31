const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'), //可以將相對路徑或路徑片段解析成絕對路徑 
  //將entry 鎖定在src資料夾中
  // 在nodejs裡面代表的一個特殊的變數， 只的是當前執行文件所在目錄的完整目錄位置
  entry: { //多個入口可用obj型式 要跟黨名一致性
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js?[chunkhash:8]',
  },
  optimization: { //將node的邏輯拆出來
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/, //sassloader 
        use: [
          'style-loader', //執行style-loader 讓js可以讀懂css
          'css-loader',//css loader
          'postcss-loader',//postcss 套件庫(autoprefixer)
          'sass-loader'//讓js可以讀懂sass 
        ]
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: "assets",
        to: "assets",
        force: true,
        noErrorOnMissing: true
      }]
    }),
    new HtmlWebpackPlugin({ //一個html模板 產生多個html檔
      title: 'FBUI開發',
      filename: 'index.html', //輸出名
      template: 'template/template.html', //輸入指定的資料夾與檔案
      viewport: 'width=640, user-scalable=no',
      description: 'Webpack前端自動化開發，讓你熟悉現代前端工程師開發的方法',
      Keywords: 'Webpack前端自動化開發、前端、工程師、線上教學、教學範例',
      chunks: ['vendor', 'index'], //指定入口js是哪個部分
    }),
  ],
  devServer: {
    compress: true,
    stats: {
      assets: true,
      cached: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false
    },
  },
  devtool: 'inline-source-map',
  target: 'web',

}