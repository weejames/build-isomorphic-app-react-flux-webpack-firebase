module.exports = {
    entry: {
        main: [
            './script1.js',
            './script2.js'
        ]
    },
    output: {
        filename: './public/[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    }
};
