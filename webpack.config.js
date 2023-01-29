const path = require("path")

// 1. 导入插件，得到构造函数
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 2. 创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
    mode: 'development',  // development production
    // 推荐--在开发模式下,解决默认source map行数报错问题，使运行时报错的行数与源代码行数保持一致(仅在开发模式下使用，不建议在生产环境模式下使用)
    // devtool:"eval-source-map",
    // 推荐--在生成环境下，只想定位报错的具体行数，不想暴露源码
    // devtool: "nosources-source-map",
    // 在生产环境下，即定位报错的行数，又展示具体报错的源码
    devtool:"source-map",
    // 指定打包入口
    entry: path.join(__dirname, "./src/index.js"),
    // 指定打包的出口
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, "./dist"),
        // 表示输出文件的名称
        filename: "js/bundle.js"
    },
    plugins: [htmlPlugin, cleanPlugin], //3. 挂载插件实例对象
    // 对webpack-dev-sever的配置
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 80
    },
    module: {  //所有第三方模块的匹配规则
        rules: [  //文件后缀名的匹配规则
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            // { test:/\.png|jpg|gif$/, use:"url-loader?limit=104966" }
            {
                test: /\.png|jpg|gif$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 22229,
                        outputPath: "image"  //给打包生成的图片加文件夹
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    }
}
