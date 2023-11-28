const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index:'./src/pages/index',
        destination:'./src/pages/destination',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    /* devtool: 'cheap-module-eval-source-map', */
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.(woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]',
                    esModule: false
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.art',
            filename: 'index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/destination/destination.art',
            filename: 'destination.html',
            chunks:['destination']
        })
    ]
}