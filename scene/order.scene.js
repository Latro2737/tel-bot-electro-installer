const { Telegraf, Scenes } = require('telegraf');
const sequelize = require('../database/db')
const orderModel = require('../database/order.model')
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

module.exports = new Scenes.WizardScene('sceneOrder', 
    async (ctx) => {
        try {
            ctx.wizard.state.data = {}
	        await ctx.reply(`Будь ласка, введіть ваше ім'я`)
	        return ctx.wizard.next()
        } catch (e) {
            console.error(e);
        }
    },
    async (ctx) => {
        try {
            ctx.wizard.state.data.firstName = ctx.message.text
	        await ctx.reply('Будь ласка, введіть номер телефону')
	        return ctx.wizard.next()
        } catch (e) {
            console.error(e);
        }
    },
    async (ctx) => {
        try {
            ctx.wizard.state.data.phone = ctx.message.text
	        await ctx.reply('Будь ласка, введіть запитання, що вас цікавить')
	        return ctx.wizard.next()
        } catch (e) {
            console.error(e);
        }
    },
    async (ctx) => {
        try {
            ctx.wizard.state.data.service = ctx.message.text
		    await sequelize.authenticate();
		    await sequelize.sync();
		    await orderModel.create({
			    firstName: ctx.wizard.state.data.firstName,
			    phone: ctx.wizard.state.data.phone,
			    service: ctx.wizard.state.data.service
		    })
		    const message = `${ctx.wizard.state.data.firstName} ${ctx.wizard.state.data.phone}\nЗапитання: ${ctx.wizard.state.data.service}`
		    await bot.telegram.sendMessage(process.env.CHAT_ID, message)
		    await ctx.reply(`Дякуємо ${ctx.wizard.state.data.firstName}, ми з вами зв'яжемося та відповімо на ваше запитання`)
		    return ctx.scene.leave()
        } catch (e) {
            console.error(e);
            return ctx.reply('Ooops...щось пішло не так')
        }
    }
)