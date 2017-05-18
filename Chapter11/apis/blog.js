const { Blog } = require('../models')

const getOne = async (ctx, next) => {
	if (!ctx.params.entryid) {
        ctx.throw(404, 'create error')
        return
    }

    var entryid = ctx.params.entryid

	let blog = await Blog.findOne( { _id: entryid } ).lean().exec()

	if (!blog) {
		ctx.throw(404, 'no such blog data')
		return
	}

    ctx.body = {
        status: 'success',
        blog: blog
    }
}

const list = async (ctx, next) => {
	let blog = await Blog.find().sort( { updated: -1 } ).lean().exec()

	if (!blog.length) {
		ctx.throw(404, 'no such blog data')
		return
	}

    ctx.body = {
        status: 'success',
        blog: blog
    }
}

const exists = async (title) => {
	let blog = await Blog.find({title: title}).lean().exec()

    if (!blog.length)
        return false

    return true
}

const create = async (ctx, next) => {
    if (!ctx.request.body) {
        ctx.throw(404, 'create error')
        return
    }

    var payload = ctx.request.body

    let exits = await exists(payload.title)
    if (exits) {
        ctx.body = {
            status: 'title exits'
        }
        return
    }

    var data = {
        title: payload.title,
		content: payload.content
	}
    var _blog = new Blog(data)
    var error

    _blog.save((err) => {
        error = err
    })

    if (error) {
        ctx.throw(404, 'create error' + error)
        return
    }

	ctx.body = {
        status: 'success',
        blog: _blog.toObject()
    }
}

const deleteOne = async (ctx, next) => {
	if (!ctx.params.entryid) {
        ctx.throw(404, 'delete error')
        return
    }

    var entryid = ctx.params.entryid
	var error

	await Blog.remove({ _id: entryid }, (err) => {
		error = err
	});

	if (error) {
		ctx.throw(404, 'no such blog data')
		return
	}

    ctx.body = {
        status: 'success'
    }
}

module.exports = {
	getOne: getOne,
	list: list,
    create: create,
	deleteOne: deleteOne
}
