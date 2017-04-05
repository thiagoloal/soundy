// Common imports
import gulp         from 'gulp';
import pkg          from '../package.json';
import environments from 'gulp-environments';
import path         from 'path';

// Require webpack utilities
import webpack      from 'webpack';

// Config variables
var src = path.join(pkg.src.script, '**/*.{js,jsx}'),
	srcPath = path.join(process.cwd(), pkg.src.script),
	dest = path.join(process.cwd(), pkg.build.script);

var webpackSettings = {
	debug: environments.development(),
	entry: {
		main: [
			'babel-polyfill',
			path.join(srcPath, 'main.js')
		],
	},
	output: {
		path: dest,
		publicPath: '/js/',
		filename: `[name].js?[hash]`
	},
	plugins: environments.production() ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	] : [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx', ]
	},
	module: {
		preLoaders: [{
			test: /\.jsx$|\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}],
		loaders: [
			// Javascript
			{
				test: /\.jsx$|\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				},
			},
		],
	},
	jshint: {},
	eslint: {}
};

if (environments.development()) {
	webpackSettings.devtool = "eval";
};

module.exports = webpackSettings;
