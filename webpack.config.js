var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var port = 8081;
var plugins = [new ExtractTextPlugin('app.css')];
module.exports = {
    entry: {
        app: ['./src/app']
    },//已多次提及的唯一入口文件
    output: {
        path: "/",
        publicPath: 'https://127.0.0.1:' + port + '/',//打包后的文件存放的地方
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"},
        host: '0.0.0.0',
        https: false,
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
