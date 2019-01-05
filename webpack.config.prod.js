const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'React app seed',
      template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }
};