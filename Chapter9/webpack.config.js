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
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
			},
			{
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
			}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors' // Specify the common bundle's name.
        })
    ],
	resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react$': 'react/dist/react.min.js',
            'react-dom$': 'react-dom/dist/react-dom.min.js',
			Source: __dirname + '/src'
		}
	}
};
