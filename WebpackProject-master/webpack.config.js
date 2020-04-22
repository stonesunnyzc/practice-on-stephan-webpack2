var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    //在运行时，这里的name会被分别替换为entry里面的两个prop：bundle和vendor
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        // we assume node_modules里面的文件都已经是ES5了
        //所以没有必须再让babel转换一次，当然你可以不排除，但是转换没有意义，其实babel什么也不会做，这是浪费资源
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        'vendor': {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    //需要自定一个index.html 否则它会自动创建一个html，然后附带上必要的scipt tag
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // })
    //new BundleAnalyzerPlugin()
  ],
  mode: 'development'
};
