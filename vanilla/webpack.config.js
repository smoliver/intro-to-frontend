var webpack = require('webpack');
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');
var Autoprefixer = require('autoprefixer');


module.exports = {
    context: __dirname + '/src',
    entry: ['babel-polyfill', './index.js'],
    resolve: {
        modules :[
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new BundleTracker ({ filename: './webpack-stats.json', indent: 2 })
    ],
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve('./node_modules'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0'],
                        plugins: ['transform-object-assign']
                    }
                }],
            }, {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }],
            }, {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]"
                    }
                }],
            }, {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }],
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}

