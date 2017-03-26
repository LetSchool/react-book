var path = require('path');

module.exports = {
    entry: './src/js/firstApp.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};
