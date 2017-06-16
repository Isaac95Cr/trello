const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx', 'bootstrap-loader'],
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.ejs',
    }),
    //new ExtractTextPlugin('dist/style.css')
  ]

};