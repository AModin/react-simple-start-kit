const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app seed',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/'
  }
};