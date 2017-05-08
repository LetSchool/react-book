const mongoose = require('mongoose')
const collectionName = 'blog'

var schema = mongoose.Schema({
    title: String,
	content: String,
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now }
})

schema.methods.validPassword = function(password) {
    return (this.password == password) ? true : false
}

var model = module.exports = mongoose.model(collectionName, schema, collectionName)
