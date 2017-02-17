module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        publicPath: 'bin/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /.\js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};

