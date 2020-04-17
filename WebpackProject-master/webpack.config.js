var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = ['react','lodash','redux','react-redux','react-dom','faker','react-input-change','redux-form','redux-thunk'];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        // we assume node_modules里面的文件都已经是ES5了
        //所以没有必须再让babel转换一次，当然你可以不排除，但是转换没有意义，其实babel什么也不会做，这是浪费资源
        exclude:/node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  }
};
