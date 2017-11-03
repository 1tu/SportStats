const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
  // glob = require('glob'),
  // path = require('path'),
  // HtmlWebpackPlugin = require('html-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin'),
  // ExtractTextPlugin = require('extract-text-webpack-plugin'),
  // PurifyCSSPlugin = require('purifycss-webpack'),
  FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpackConfig = require('./webpack.config.base'),
  helpers = require('./helpers'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/prod.env');

// const extractSass = new ExtractTextPlugin({
//   filename: 'css/[name].[contenthash].css',
//   disable: process.env.NODE_ENV === 'development'
// });

// const purifyCss = new PurifyCSSPlugin({
//   paths: glob.sync(path.join(__dirname, '../client/**/*.html')),
//   purifyOptions: {
//     info: true,
//     whitelist: []
//   }
// });

webpackConfig.module.rules = [...webpackConfig.module.rules,
{
  test: /\.styl$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        minimize: true,
        sourceMap: true,
        importLoaders: 2
      }
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer]
      }
    },
    'stylus-loader',
    {
      loader: 'vuetify-loader',
      options: {
        theme: helpers.root('./client/stylus/theme.styl')
      }
    }
  ],
},
{
  test: /\.(jpg|png|gif)$/,
  loader: 'file-loader?name=assets/img/[name].[ext]'
},
{
  test: /\.(eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader?name=fonts/[name].[ext]'
}
];

// ensure ts lint fails the build
webpackConfig.module.rules[0].options = {
  failOnHint: true
};

webpackConfig.plugins = [...webpackConfig.plugins,
// purifyCss,
new UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true
}),
new CompressionPlugin({
  asset: '[path].gz[query]',
  test: /\.min\.js$/
}),
new DefinePlugin({
  'process.env': env
}),
new FaviconsWebpackPlugin(helpers.root('/public/favicon-32x32.png'))
];

module.exports = webpackConfig;
