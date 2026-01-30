const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "index_bundle.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true,
    },
    module:{
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
