const path = require('path');

const project_folder = path.resolve(__dirname, '..')

module.exports = {
  target: 'node',
  mode : 'production',
  entry: './server.js',
  output: {
    filename: 'server.bundle.js'
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
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
