const { Composer } = require('telegraf')
const sequelize = require('../database/db')
const userModel = require('../database/user.model')
const composer = new Composer()

composer.command('start', async (ctx) => {
	const chatId = ctx.message.from.id.toString();
	const username = ctx.message.from.username || 'stranger';
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		const user = await userModel.findOne({ where: {chatId} }) || 0;
		if (user.username === username ? username : 'stranger' && user.chatId == chatId) {
			user.visit += 1
			await user.save()
			return ctx.reply(`Добрий день, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'відвідувач'}! Ви знову з нами!\nЩо вас цікавить?\n/service - Список послуг\n/order - Залишити заявку\n/help - Список команд`)
		} else {
			await userModel.create({chatId, username})
			return ctx.reply(`Добрий день, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'відвідувач'}! Ми з України!\nЩо вас цікавить?\n/service - Список послуг\n/order - Залишити заявку\n/help - Список команд`)
		}
	  } catch (error) {
		console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
	  }
})

module.exports = composer