process.noDeprecation = true;

var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src', 'js'),
    entry: './appES5.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'react' ]
                }
            }
        ]
    }
};
