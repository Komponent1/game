const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 4000,
        //proxy: '',
    },
    watchOptions: {
        poll: true
    }
});
