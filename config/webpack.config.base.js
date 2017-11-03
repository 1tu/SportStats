const helpers = require('./helpers'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: {
    'main': helpers.root('/client/main.ts')
  },
  output: {
    path: helpers.root('/public'),
    publicPath: '/',
    filename: 'js/build.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'public': helpers.root('./public')
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'tslint-loader'
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: 'tsconfig.client.json',
      }
    }, {
      test: /\.pug$/,
      loader: ['html-loader', 'pug-html-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }],
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //   from: 'src/assets',
    //   to: './assets'
    // },]),
  ]
};

module.exports = config;
