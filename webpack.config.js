const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/js/index.js'),
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3030
  },


  module: {
    rules: [
      {
        test: /.(js)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images/',
              publicPath: '../images/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images/',
              publicPath: '../images/'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
                { collapseGroups: true },
                { mergePaths: true }
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './fonts/',
          publicPath: '../fonts/'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      filename: './index.html',
      template: './index.html' 
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
