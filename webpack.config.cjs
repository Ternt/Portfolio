const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

    let outputPath = path.resolve(__dirname, "public");
    let options = {
        mode: (env.WEBPACK_SERVE) ? 'development' : 'production',
        entry: path.resolve(__dirname, "src/index.js"),
        output: {
            path: outputPath,
            filename: "[name].[contenthash].js",
            publicPath: "/",
            clean: true,
        },
        module:{
            rules: [
                {
                    test: /\.js$/,
                    use:  'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: 
                    [
                        { loader: "style-loader", options: { injectType: "styleTag" } }, 
                        { loader: "css-loader" }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, "src/assets"), to: path.join(outputPath, 'assets') },
                    { from: path.resolve(__dirname, "src/pages"), to: path.join(outputPath, 'pages') }
                ]
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    }

    if (env.WEBPACK_SERVE) {
        options["devServer"] = {
            port: "8080",
            static: outputPath,
            liveReload: true
        }
    }

    return options;
};
