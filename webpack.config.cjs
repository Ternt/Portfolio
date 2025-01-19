const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    let options = {
        mode: "development", 
        entry: path.resolve(__dirname, "src/index.js"),
        output: {
            path: path.resolve(__dirname, "public"),
            filename: "bundle.js",
            publicPath: "/",
            clean: true,
        },
        devServer: {
            port: "8080",
            static: path.resolve(__dirname, "public"),
            liveReload: true
        },
        module:{
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use:  'babel-loader'
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',

                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html')
            })
        ]
    }

    return options;
};
