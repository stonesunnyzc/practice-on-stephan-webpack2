const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    //specify each different loader or different rule that we want to run on our project
    rules: [
      {
        use: "babel-loader",
        //正则表达式 if the file ends with js
        test: /\.js$/
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/
      },
      {
        // jpe?g means jpg or jpeg
        test: /\.(jpe?g|png|gif|svg)$/,
        //会把这些图片发送给下面两个loader
        //the loader on the far right is the first one to be applied to any given file
        //为了给loader更多的配置，这里该用什么object，而不再是一个string比如；‘url-loader’
        //
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 }
          },
          "image-webpack-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
module.exports = config;
