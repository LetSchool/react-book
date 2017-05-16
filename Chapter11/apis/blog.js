const { Blog } = require('../models')

const getOne = async (ctx, next) => {
	if (!ctx.header.conditions) {
        ctx.throw(404, 'create error')
        return
    }

    var conditions = {}
	try {
		conditions = JSON.parse(ctx.header.conditions)
	} catch(e) {
		console.log('JSON err', e)
	}

	let blog = await Blog.findOne( { _id: conditions.id } ).lean().exec()

	if (!blog) {
		ctx.throw(404, 'no such blog data')
		return
	}

    ctx.body = {
        status: 'success',
        blog: blog
    }

    return
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

    return
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

module.exports = {
	getOne: getOne,
	list: list,
    create: create
}
