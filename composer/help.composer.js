const { Composer } = require('telegraf')
const composer = new Composer()

composer.command('help', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Перелік команд</b>\n/start - Запустити бота\n/help - Список команд\n/service - Список послуг\n/contact - Контакти\n/order - Залишити заявку\n/song - Послухати музику`)
    } catch (e) {
        console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
    }
});

module.exports = composer