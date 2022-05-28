const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.command('service', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Список послуг</b>', Markup.inlineKeyboard([
			[Markup.button.callback('Електромонтажні роботи', 'btn_1')],
			[Markup.button.callback('Монтаж відео спостереження', 'btn_2')],
			[Markup.button.callback(`Налагодження комп'ютерів`, 'btn_3')],
        ]))
    } catch (e) {
        console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
    }
});

module.exports = composer
