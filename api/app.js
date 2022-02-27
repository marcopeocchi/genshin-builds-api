const Koa = require('koa');
const Router = require('@koa/router');
const cron = require('node-cron');
const Logger = require('../utils/logger');
const { buildsController } = require('./controllers/builds');
const { batchUpdateElements } = require('../updater/main');

const app = new Koa();
const router = new Router();
const log = new Logger();

cron.schedule('*/30 * * * *', () => {
    log.info(new Date(), 'updating rows');
    batchUpdateElements().then(() => log.info(new Date(), 'updating rows'));
});

router.get('/', async (ctx, next) => {
    ctx.body = { info: "go to /builds/:id route. ex. /builds/pyro" }
});

router.get('/builds/:id', async (ctx, next) => {
    await buildsController(ctx, next);
});

app.use(router.routes());

batchUpdateElements().then(() => app.listen(process.env.PORT || 3000));