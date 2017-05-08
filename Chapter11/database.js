const config = require('config')
const mongoose = require('mongoose')

mongoose.Promise = Promise

module.exports = () => {
	mongoose.connect(config.get('database.uri'))
	mongoose.connection.on('open', (conn) => {
		console.log('Connected to', mongoose.connection.host + ':' + mongoose.connection.port)
	})
	mongoose.connection.on('close', () => {
		console.log('Disconnected from', mongoose.connection.host + ':' + mongoose.connection.port)
	})
	mongoose.connection.on('error', (err) => {
		console.log('MongoDB', err)
	})
}
