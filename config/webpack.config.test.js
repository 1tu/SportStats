var helpers = require('./helpers'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.base'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin'),
  env = require('../environment/dev.env');

webpackConfig.module.rules = [{
  test: /\.ts$/,
  exclude: /node_modules/,
  loader: 'awesome-typescript-loader',
  query: {
    compilerOptions: {
      inlineSourceMap: true,
      sourceMap: false
    }
  }
},
{
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: ['./src/index.html']
},
{
  test: /\.styl$/,
  use: ['style-loader', 'css-loader', 'stylus-loader', {
    loader: 'vuetify-loader',
    options: {
      theme: helpers.root('./src/stylus/theme.styl')
    }
  }]
},
{
  test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
  loader: 'url-loader?limit=8192'
}
];

webpackConfig.plugins = [...webpackConfig.plugins,
new SourceMapDevToolPlugin({
  filename: null, // if no value is provided the sourcemap is inlined
  test: /\.(ts|js)($|\?)/i
}),
new DefinePlugin({
  'process.env': env
})
];

webpackConfig.devtool = 'inline-source-map';

module.exports = webpackConfig;