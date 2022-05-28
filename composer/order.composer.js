const { Composer } = require('telegraf')
const composer = new Composer()

composer.command('order', async (ctx) => {
    try {
        await ctx.scene.enter('sceneOrder');
    } catch (e) {
        console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
    }
});

module.exports = composer