const { Blog } = require('../models')

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

    let exits = await exists(conditions.title)
    if (exits) {
        ctx.body = {
            status: 'title exits'
        }
        return
    }

    var data = {
        title: conditions.title,
		content: conditions.content
	}
    var _blog = new Blog(data)
    var err

    _blog.save(function(err) {
        console.log(err)
    })
    if (err) {
        ctx.throw(404, 'create error')
        return
    }
    ctx.body = {
        status: 'success',
        blog: _blog.toObject()
    }
}

module.exports = {
	list: list,
    create: create
}
