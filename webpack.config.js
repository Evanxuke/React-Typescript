//webpack获取当前项目绝对路径
var path = require('path');
//css打包插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//热加载->自动生成以指定index为模板的html页面,该页面会将项目中的js以及css等自动引入
var HtmlWebpackPlugin = require('html-webpack-plugin');



var port = 8081;
var plugins = [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
        //favicon: './favicon.ico', //favicon路径
        filename: '../index.html',
        template: "./src/index.html",
        inject: true,
        hash: true,
        minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }
    })
];
module.exports = {
    entry: {
        app: ['./src/app']
    },//已多次提及的唯一入口文件
    output: {
        path: "/",
        publicPath: 'https://127.0.0.1:' + port + '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"},
        host: '0.0.0.0',
        https: true,
        port: port
    },
    module: {
        rules: [
            {
                test: /\.tsx|\.ts$/,
                exclude: /^node_modules$/,
                loader: 'awesome-typescript-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            }, {
                test: /\.less$/,
                exclude: /^node_modules$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
};
