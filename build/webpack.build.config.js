// nodejs 路径对象
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    // 入口路径
    entry: {
        index : path.resolve(__dirname, '../src/index.js'),
        vendors: [
            'Vue'
        ]
    },
    // 输入处理
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias : {
            Vue : 'vue/dist/vue.min.js'
        }
    },
    module: {
        loaders: [
            // 加载器
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg|ico)$/,
                loader: 'url-loader?limit=8192&name=imgs/[name].[hash].[ext]'
            },
            {
                test: /\.(otf|eot|woff2|woff|svg|ttf)\??.*$/,
                loader: 'url-loader?limit=500000&name=fonts/[path][name].[ext]'
            }
        ]
    },
    babel : {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    vue : {
        loaders: {
            css : ExtractTextPlugin.extract("css"),
            js : 'babel'
        }
    },
    plugins: [
        //js压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //部分公共js压缩
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/venders/vendors.js'
        }),
        // css压缩
        new ExtractTextPlugin("css/[name].[contenthash].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        })
    ]
};
