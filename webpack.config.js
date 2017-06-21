const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx', 'bootstrap-loader'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/'),
    historyApiFallback: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              includePaths: [path.join(__dirname, '/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/')]
            }
          }
        ]
      },
      {
        test: /\.(jsx?|js?)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpg)$/,
        loader: "file-loader"
      }
    ]
  },
  node:{
    net: 'empty',
    dns:'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.ejs',
    }),
    //new ExtractTextPlugin('dist/style.css')
  ]


};