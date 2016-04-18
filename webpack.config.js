var Path = require('path'),
    WebPack = require('webpack');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: Path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new WebPack.HotModuleReplacementPlugin(),
        new WebPack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: Path.join(__dirname, 'src'),
                loader: 'react-hot!babel'
            },
            {
                test: /\.scss$/,
                include: Path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            }
        ]
    }
};
