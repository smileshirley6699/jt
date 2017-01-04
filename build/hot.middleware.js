var hotClient = require('webpack-hot-middleware/client');
// 监听热加载事件，如果是重新加载就刷新页面
hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }
});