const path = require('path')
const webpack = require('webpack')
const appName = 'formatter'
const outputFile = appName + '.js'

const PATH = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  entry: path.join(__dirname, 'src', 'index.js')
}

const config = {
  entry: PATH.entry,
  devtool: 'eval-source-map',
  output: {
    path: PATH.dist,
    filename: outputFile,
    library: [appName],
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true
        }
     })
  ]
}

module.exports = config
