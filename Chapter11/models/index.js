const fs = require('fs')
const path = require('path')
var files = {}

// Read all of JavaScript files in this directory
fs.readdirSync(__dirname).forEach((file) => {
	if (file == 'index.js')
		return
	files[path.basename(file, '.js')] = require('./' + file)
})

module.exports = files
