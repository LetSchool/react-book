process.noDeprecation = true;

var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src', 'js'),
    entry: './appES7.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/assets/',
        path: path.join(__dirname, 'public', 'assets')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'babel-loader',
                options: {
                    presets: [ 'react' ]
                },
            }
        ]
    }
};
