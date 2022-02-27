const { findByElement } = require("../services/builds");

const buildsController = async (ctx, next) => {
    const element = ctx.params.id
    const res = await findByElement(element);
    ctx.body = res;
    await next();
}

module.exports = {
    buildsController: buildsController
};