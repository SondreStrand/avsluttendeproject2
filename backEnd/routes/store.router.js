const Router = require('@koa/router');
const router = new Router({
    prefix: '/store'
});

router.get('/', ctx => {
    ctx.body = 'Test2'
});

router.post('/', ctx => {
    ctx.body = 'Test2 - post'
});

module.exports = router;
