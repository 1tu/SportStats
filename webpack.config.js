var path = require('path')
var webpack = require('webpack')

var resolve = (p) => path.resolve(__dirname, p)

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('./public'),
    publicPath: '/',
    filename: 'js/build.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'public': resolve('./public')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preLoaders: {
          i18n: 'yaml-loader'
        },
        loaders: {
          i18n: '@kazupon/vue-i18n-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        objectAssign: 'Object.assign'
      }
    }, {
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader', {
        loader: 'vuetify-loader',
        options: {
          theme: resolve('./src/stylus/theme.styl')
        }
      }]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    noInfo: true,
    host: 'localhost',
    port: 3333,
    proxy: {
      "/": {
        target: "http://localhost:3334",
        // pathRewrite: { "^/api": "" }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
