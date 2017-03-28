process.noDeprecation = true;

var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src', 'js'),
    entry: {
        bundle: './appES7.jsx',
        vendors: [
            'babel-polyfill'
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
            }
        ]
    },
	resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
	}
};
