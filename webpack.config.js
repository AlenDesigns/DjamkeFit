const path = require('path');

// Plugins:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {

  entry: {
   app: './src/index.js'
  },

  output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist')
  },

  module: {
   rules: [

    {
     test: /\.scss$/,
     use: ExtractTextWebpackPlugin.extract({
      fallback: 'style-loader',
      use: [
       { loader: 'css-loader'},
       { loader: 'sass-loader' }
      ]
     })
    },
    {
     test: /\.(png|svg|jpg|gif)$/,
     use: [
      'file-loader'
     ]
    },
    {
     test: /\.(woff|woff2|ttf|eot|otf)$/,
     use: [
      'file-loader'
     ]
    },
    {
     test: /\.js$/,
     exclude: /node_modules/,
     use: [
      'babel-loader'
     ]
    }

   ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextWebpackPlugin('styles.css'),
    new HtmlWebpackPlugin({
     template: './src/index.html'
    })

  ],

  mode: 'development',
  devtool: 'inline-source-map'

};

//Export configuration
module.exports = config;
