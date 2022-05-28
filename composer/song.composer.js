const { Composer } = require('telegraf')
const tracklist = require('../database/tracklist')
const composer = new Composer()

composer.command('song', async (ctx) => {
    try {
        const randomNum = Math.floor(Math.random() * 10)
	    const audioSrc = `./audio/${tracklist.audio[randomNum]}`
	    await ctx.replyWithAudio({source: audioSrc})
    } catch(e) {
        console.error(e);
		return ctx.reply('Ooops...щось пішло не так')
    }
})

module.exports = composer