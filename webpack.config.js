//webpack获取当前项目绝对路径
var path = require('path');
//css打包插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//热加载->自动生成以指定index为模板的html页面,该页面会将项目中的js以及css等自动引入
var HtmlWebpackPlugin = require('html-webpack-plugin');

const target = '';
var port = 8081;
var proxy = {
    "/api/*": {
        changeOrigin: true,
        target: target,
        secure: false
    },
    "/common/api/*": {
        target: target,
        secure: false
    }
}
var plugins = [
    //它将从每一个用到了require("app.css")的entry chunks文件中抽离出css到单独的output文件
    new ExtractTextPlugin('[name].less?[contenthash]'),
    new HtmlWebpackPlugin({
        favicon: './favicon.ico', //favicon路径
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
        //已多次提及的唯一入口文件
        app: ['./src/app']
    },
    output: {
        path: "/",
        publicPath: 'https://127.0.0.1:' + port + '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        proxy: proxy,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.tsx|\.ts$/,
                exclude: /^node_modules$/,
                use: 'awesome-typescript-loader'
                // loader: 'ts-loader'
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?limit=50000&name=[path][name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.(less|css)$/,
                exclude: /^node_modules$/,
                //遵循上面定义的规则，搜索所有对应css文件将其编译打包
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx'
        ],
        alias: {}
    },
    externals: []
};
