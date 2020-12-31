const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
require('core-js');

let envSetup   = '';
let env         = process.env.NODE_ENV;
if(env  === 'production')
  envSetup  = 'production';
else if (env === 'staging')
  envSetup  = 'development';
else
  envSetup  = 'none';
  console.log( "env",process.env);
module.exports = env => {
  //console.log('Env : ', process.env.NODE_ENV, env);
  return {
    mode: 'development',
    /* entry: {
      main: ['./src/client/index.js']
    }, */
    entry: ['core-js', './src/client/index.js'],
  
    output: {
      publicPath: '/dist/',
      filename: './[name].bundle.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }]
      }, {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        'sass-loader'
        ]
      }
      ]
    },
      
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].style.css'
      })
    ]
  }
};
