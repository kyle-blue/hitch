const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/App.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, "src"),
                loader: "@svgr/webpack",
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            // injectType: "singletonStyleTag",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                mode: "local",
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                hashPrefix: "hitch",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    devtool: "cheap-module-source-map",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: path.resolve(__dirname, "src/index.html"), hash: true },
        ),
    ],
};
