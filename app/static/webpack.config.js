const webpack = require('webpack');

module.exports = {

	context: __dirname,
	entry: './js/entry.js',
	output: {
		path: './js/dist',
		filename: 'bundle.js',
		publicPath: '/js/dist/'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};