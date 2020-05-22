/* eslint-disable no-undef */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                // test: /\.(s*)css$/,
                // use: [
                //     { loader: MiniCssExtractPlugin.loader },
                //     'css-loader',
                //     'sass-loader'
                // ]
                // test: /\.css$/,
                // use: [
                //     'style-loader',
                //     { loader: 'css-loader', options: { importLoaders: 1 } },
                //     'postcss-loader'
                // ]
                // test: /\.css$/,
                // use: [
                //     {
                //         loader: 'postcss-loader',
                //         options: {
                //             ident: 'postcss',
                //             plugins: [
                //                 require('tailwindcss'),
                //                 require('autoprefixer'),
                //             ]
                //         }
                //     }
                // ]
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};