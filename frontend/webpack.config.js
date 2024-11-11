const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: { import: './index.js' }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    watch: true,
    watchOptions: { ignored: /node_modules/ },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react'] }
                }
            },
            { test: /\.(ts|tsx)$/, use: 'ts-loader' },
        ]
    },
    plugins: [ new HtmlWebpackPlugin({ template: './index.html' }) ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
    }

    return config;
}
