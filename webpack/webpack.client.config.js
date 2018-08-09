const path = require('path');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const { NamedModulesPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[hash].bundle.js',
    publicPath : '/',

  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, "../src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new NamedModulesPlugin()
  ],
  serve: {
      add: (app, middleware, options) => {
      const historyOptions = {
      };
      app.use(convert(history(historyOptions)));
    }
  }
}
