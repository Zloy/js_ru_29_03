var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
//        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }],
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}