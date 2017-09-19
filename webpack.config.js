var path = require('path');
var port = 8081;
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
};
