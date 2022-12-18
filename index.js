// TELEGRAM API   https://core.telegram.org/bots/webapps
// Кусок для настройки Телеграмм API для пакета npm i node-telegram-bot-api с сайта https://www.npmjs.com/package/node-telegram-bot-api
// https://www.youtube.com/watch?v=MzO-0IYkZMU
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5936038517:AAFvCmJTa0Hr-MvQuIZvMvmRky9ufU_SATk';  // replace the value below with the Telegram token you receive from @BotFather
const bot = new TelegramBot(TOKEN, {polling: true});// Create a bot that uses 'polling' to fetch new updates

const WEBURL = 'https://8830-82-118-29-17.eu.ngrok.io';
bot.on('message', async (msg) => {   // (asinc чтобы все шло последоветельно)
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text == '/start') {  // Если пользователь в телеграмме запустил бота и увидел текст /start
    // await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {  //Выводим сообщение в чат chatID
    //   reply_markup:{
    //       keyboard: [ // Обычная кнопка появляется в виде значка около ввода текста
    //       [{text: 'Заполни форму', web_app: {url: WEBURL}}] // Выводим кнопку
    //           ]
    //     }  
    // })
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {  //Выводим сообщение в чат chatID
        reply_markup:{
          inline_keyboard: [  // Кнопка прямо внутрь чата 
            [{text: 'Запланировать событие', web_app: {url: WEBURL}}] // Выводим кнопку, которая открывает веб приложение
                ]
          }
        })
      }
    });
// END Кусок для настройки Телеграмм API для пакета npm i node-telegram-bot-api