const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/templates/views/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    performance: {
       hints: false,
    },
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Alberto Russo - Exercise',
            myPageHeader: 'Hello World',
            template: './src/templates/views/index.html',
            filename: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
}
