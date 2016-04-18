var WebPack = require('webpack'),
    WebPackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebPackDevServer( WebPack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(8080, 'localhost');
