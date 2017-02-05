const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPluginConfig = new ExtractTextPlugin('[name].css');

const definePluginConfig = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
});

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: './dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: (process.env.NODE_ENV === 'production' ?
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'resolve-url-loader?keepQuery', 'sass-loader?sourceMap']
                    })
                    : ['style-loader', 'css-loader', 'resolve-url-loader?keepQuery', 'sass-loader?sourceMap'])
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        definePluginConfig,
        htmlWebpackPluginConfig,
        extractTextPluginConfig
    ],
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    }
};