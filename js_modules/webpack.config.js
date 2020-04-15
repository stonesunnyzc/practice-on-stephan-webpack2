const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        //specify each different loader or different rule that we want to run on our project
        rules: [
            {
                use: 'babel-loader',
                //正则表达式 if the file ends with js
                test: /\.js$/
            },
            {
                use: [MiniCssExtractPlugin.loader,'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ]
};
module.exports = config;