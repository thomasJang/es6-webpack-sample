const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const basePath = __dirname

module.exports = {
  context: path.join(basePath, '.'),
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(basePath, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 4000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true
    })
  ]
}
