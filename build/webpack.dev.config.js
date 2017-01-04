var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.build.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = '/';

config.plugins = [
    //全局预加载
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: './js/venders/vendors.js'
    }),
    new ExtractTextPlugin("./css/[name].[contenthash].css"),

    new HtmlWebpackPlugin({
        filename: './index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: true
    })
];
config.devtool = '#eval-source-map';
var devClient = './build/hot.middleware';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient];
    if(name == "index") {
        config.entry[name] = extras.concat(config.entry[name]);
    }
});

module.exports = config;