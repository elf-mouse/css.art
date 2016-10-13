var balm = require('balm');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

balm.config = {
  roots: {
    source: 'pixel'
  },
  scripts: {
    entry: {
      main: './pixel/pikachu/main.js'
      // main: './pixel/grid/main.js'
      // main: './pixel/other-drawing-techniques/main.js'
    },
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.jade$/,
      loader: 'pug'
    }, {
      test: /\.hamlc$/,
      loader: 'hamlc'
    }],
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'index.html'),
        template: 'template.html',
        inject: true
      })
    ]
  }
};

balm.go();
