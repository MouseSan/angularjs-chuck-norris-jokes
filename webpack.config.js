// webpack.config.js
module.exports = {
    entry: './app/index.js',
    devServer: {
        contentBase: './app'
    },
    output: {
        filename: './app/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    }
};