const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.js$/, use:'babel-loader' },
      { test: /\.css$/, use:['style-loader', 'css-loader'] }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './app/index.html'
    }),
    new copyPlugin({
      patterns: [
        { from: '_redirects' }
      ]
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true
  }
}