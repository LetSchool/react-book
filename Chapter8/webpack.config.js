process.noDeprecation = true;

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: './app.jsx',
        vendors: [
            'babel-polyfill',
            'react',
			'react-dom'
		]
    },
    output: {
        filename: '[name].js',
        publicPath: '/assets/',
        path: path.join(__dirname, 'public', 'assets'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'babel-loader',
                options: {
                    presets: [ 'react', 'es2017', 'stage-0' ]
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
			{
				test: /\.less$/,
                use: [ "style-loader", "css-loader", "less-loader" ]
			},
			{
				test: /\.png$/,
				use: [ "url-loader?limit=1000" ]
			},
			{
				test: /\.jpg$/,
				use: [ "url-loader?limit=1000" ]
			},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // Specify the common bundle's name.
        })
    ],
	resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
			Source: __dirname + '/src'
		}
	}
};
