// 服务器依赖
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.dev.config');

// 应用服务器
var app = express();

// webpack配置
var compiler = webpack(config);

// webpack开发中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// webpack-html插件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 重新加载
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});
// 热加载中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);
// 将中间件注入到express服务器
app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);
// 启动服务器
app.listen(8080, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:8080');
});