const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
var router = new Router();

router.get('/', async (ctx, next) => {
	ctx.body = 'this is index page';
});

router.get('/react', async (ctx, next) => {
	ctx.body = 'this is react page';
});

app.use(router.routes());

app.listen(3001, () => {
	console.log("server starting on " + 3001)
})
