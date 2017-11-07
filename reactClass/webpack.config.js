var Webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path")
module.exports = {
    entry: __dirname + "/mafengwo/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    resolve:{
          extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [{
                test: /\.jsx|.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
            {
                test: /\.css$/,
                use: ["style-loader",  {
                        loader: 'css-loader',
                        //  options:{
                        //     modules:true,
                        //     sourceMap: true
                        // }
                    }],
               
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //     fallback: "style-loader",
            //     use: "css-loader"
            //     })
            // },
            {
                test: /\.jpg|.png$/,
                use: ["url-loader"]

            },
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        host: "localhost",
        port: "9999",
        hot: true,
        contentBase: path.join(__dirname, "mafengwo/static"),
        watchContentBase: true,
        proxy: {
            '/mfw': {
                target: 'http://localhost:9998',
                // pathRewrite: {'^/mfw' : ''}
              }
        },
        
    },
    plugins: [
        // new ExtractTextPlugin("styles.css"),
        new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        
        new Webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        }),
        new htmlWebpackPlugin({
            template: "./index.html",

        })

    ]


}