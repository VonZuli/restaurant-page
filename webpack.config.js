const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode:'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	output: {
	
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		
		assetModuleFilename: (pathData) => {
			const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
			return `${filepath}/[name].[hash][ext][query]`;
		},
	},
	module: {
		rules:[
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
	],
};
