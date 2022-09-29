'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  mode: 'development',
  devtool: 'cheap-source-map',
  module: {
    rules: [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }],
  },
  plugins: [
    // 压缩css 的插件
    new CssMinimizerWebpackPlugin({ test: /\.css$/g }),
    // 提取css到单文件的插件
    new MiniCssExtractPlugin(),
  ],
};
