var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /.\js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }],
        plugins: [
            new ExtractTextPlugin('styles.css'),
        ]
    }
};

