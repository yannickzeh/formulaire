const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/creationcompte.html',
      inject: true,
      filename: 'creationcompte.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/motdepasseoubli.html',
      inject: true,
      filename: 'motdepasseoubli.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/connexionreussi.html',
      inject: true,
      filename: 'connexionreussi.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};
