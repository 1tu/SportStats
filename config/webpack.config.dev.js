const helpers = require('./helpers'),
  webpackConfig = require('./webpack.config.base'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('./dev.env');

webpackConfig.module.rules = [...webpackConfig.module.rules, {
  test: /\.styl$/,
  use: ['style-loader', 'css-loader', 'stylus-loader', {
    loader: 'vuetify-loader',
    options: {
      theme: helpers.root('/client/stylus/theme.styl')
    }
  }]
}, {
  test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
  loader: 'file-loader'
}];

webpackConfig.plugins = [...webpackConfig.plugins,
  new DefinePlugin({
    'process.env': env
  })
];

webpackConfig.devServer = {
  contentBase: helpers.root('/public'),
  port: 3333,
  host: 'localhost',
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  contentBase: './client',
  open: true,
  proxy: {
    "/": {
      target: "http://localhost:3003",
    }
  }
};

module.exports = webpackConfig;
