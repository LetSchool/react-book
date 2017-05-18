const mongoose = require('mongoose')
const collectionName = 'blog'

var schema = mongoose.Schema({
    title: String,
	content: String,
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now }
})

var model = module.exports = mongoose.model(collectionName, schema, collectionName)
