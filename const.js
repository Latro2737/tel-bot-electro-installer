const textElectrician = `Виконуємо усі види електромонтажних робіт у квартирах, будинках, офісах. Роботи проводяться із застосуванням якісних матеріалів та комплектуючих, а також згідно з діючими нормами та правилами. Підключимо та встановимо: люстри, бра, телевізори, інтернет, домофон та багато іншого. Працюємо за середньо міськими <a href="https://docs.google.com/spreadsheets/d/1Ypc6K7olzTzvkAljU8l52JwxDkVTgddg0SdQUgpKm5M/edit?usp=sharing">розцінками</a>. У разі зацікавленості в наших послугах, ви можете зв'язатися з нами /contact або залишити заявку /order з питанням, що вас цікавить\nПереглянути іншу послугу\n/service`
const textCCTV = `Виконуємо монтаж та налагодження камер відеоспостереження. Допоможемо у підборі обладнання та його розташування у вашому будинку, офісі. Розповімо як користуватися та налаштуємо на будь-якому вашому пристрої. Працюємо за середньо міськими <a href="https://docs.google.com/spreadsheets/d/1GN8PcjwmlR_3-OhnMi3ruPC6uBP0s9qG4XX_FmnjwJo/edit?usp=sharing">розцінками</a>. У разі зацікавленості в наших послугах, ви можете зв'язатися з нами /contact або залишити заявку /order з питанням, що вас цікавить.\nПереглянути іншу послугу\n/service`
const textComputer = `Допоможемо налаштування комп'ютера, установки різного програмного забезпечення. Підберемо вам необхідну комп'ютерну техніку і прокладемо кабель у вашому будинку, офісі, квартирі. Встановлюємо та налаштовуємо сервери під потреби клієнта. Працюємо за середньо міськими <a href="https://docs.google.com/spreadsheets/d/1THlVC5sIH9srlKRMhwkFQwyeqOjjy7VVMVtskD8jar8/edit?usp=sharing">розцінками</a>. У разі зацікавленості в наших послугах, ви можете зв'язатися з нами /contact або залишити заявку /order з питанням, що вас цікавить.\nПереглянути іншу послугу\n/service`

module.exports.addActionBot = function(name, src, text, bot, Markup) {
    bot.action(name, async (ctx) => {
		try {
			await ctx.answerCbQuery();
			if (src !== false) {
				await ctx.replyWithPhoto({
					source: src
				})
			};
			await ctx.replyWithHTML(text, { disable_web_page_preview: true });
		} catch(e) {
			console.error(e)
            return ctx.reply('Ooops...щось пішло не так')
		}
	})
}

module.exports.textElectrician = textElectrician
module.exports.textCCTV = textCCTV
module.exports.textComputer = textComputer