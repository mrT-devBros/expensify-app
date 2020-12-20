const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// entry -> output

module.exports = (env) => {
	// console.log('env', env);
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		// loader
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					// use: ['style-loader', 'css-loader', 'sass-loader']
					use: CSSExtract.extract({
						// use: ['css-loader', 'sass-loader']
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				}
			]
		},
		plugins: [CSSExtract],
		// devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	};
};
