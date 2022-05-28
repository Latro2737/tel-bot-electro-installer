const { Telegraf, Scenes, session, Markup } = require('telegraf');
require('dotenv').config();
/*connection to telegram token*/
const bot = new Telegraf(process.env.BOT_TOKEN);
/*JS file with text and function*/
const data = require('./const')
/*connection to orderScene*/
const stage = new Scenes.Stage([require('./scene/order.scene')])
/*use session and middleware*/
bot.use(session());
bot.use(stage.middleware())
/*bot commands*/
bot.use(require('./composer/start.composer'))
bot.use(require('./composer/help.composer'))
bot.use(require('./composer/service.composer'))
bot.use(require('./composer/contact.composer'))
bot.use(require('./composer/order.composer'))
bot.use(require('./composer/song.composer'))
/*use function */
data.addActionBot('btn_1', false, data.textElectrician, bot, Markup)
data.addActionBot('btn_2', './img/2.png', data.textCCTV, bot, Markup)
data.addActionBot('btn_3', './img/3.png', data.textComputer, bot, Markup)
/*bot launch*/
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));