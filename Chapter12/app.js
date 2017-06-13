const Koa = require('koa')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const serve = require("koa-static")
const Router = require('koa-router')
const views = require('koa-views')
const logger = require('koa-logger')
const path = require('path')
const config = require('config')

const app = new Koa()
app.use(logger())
app.use(bodyParser())

const router = new Router()
const database = require('./database')()

// Static file path
app.use(convert(serve(path.join(__dirname, 'public'))))

app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

// client
router.get('/', async (ctx, next) => {
	await ctx.render('index')
})

// apis
const Blog = require('./apis/blog')

router.get('/api/blog/entry/:entryid', Blog.getOne)
router.get('/api/blog/list', Blog.list)
router.post('/api/blog/create', Blog.create)
router.del('/api/blog/entry/:entryid', Blog.deleteOne)

app.use(router.routes())

app.listen(config.server.port, () => {
	console.log("server starting on " + config.server.port)
})
