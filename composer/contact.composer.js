const { Composer } = require('telegraf')
require('dotenv').config();
const composer = new Composer()

composer.command('contact', async (ctx) => {
    try {
        await ctx.reply(`Контакт для зв'язку - ${process.env.CONTACT}`)
    } catch (e) {
        console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
    }
});

module.exports = composer