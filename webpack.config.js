const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const prod = process.env.NODE_ENV == "production";

const entry = prod
  ? ['./client/index.js']
  : [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ];

module.exports = {
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
    path: __dirname + '/public/javascripts',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
