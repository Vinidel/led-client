const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const prod = process.env.NODE_ENV == "production";
const path = require('path');

const entry = './client/index.js';

module.exports = {
  target: 'node',
  entry: entry,
  module: {
    loaders: [
      {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-decorators-legacy']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname,'/public/javascripts'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
