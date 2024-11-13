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
				use: 'babel-loader',
			},
			{ 
				test: /\.(ts|tsx)$/, 
				exclude: /node_modules/,
				use: 'ts-loader' 
			},
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: './index.html' }) ]
}

module.exports = (env, argv) => {
	if (env.mode === 'development') {
		config.devtool = 'source-map'
		config.mode = env.mode;
	}

	return config;
}
