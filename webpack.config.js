/**
 * Created by Administrator on 2017/10/30/030.
 */
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    'lisper': "./src/app.js"
    // 'electron':"./src/electron.js"
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.md$/,
      loader: 'vue-markdown-loader'
    }]
  }
};