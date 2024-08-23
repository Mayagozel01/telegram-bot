const TelegramApi = require('node-telegram-bot-api');

const token="7057118156:AAFctb9KXT7C5P5vy_OijwQkbxkoDS1jfys";


const bot = new TelegramApi(token, {polling:true});
bot.setMyCommands([
    {command:'/start', description:'Start'},
    {command:'/info', description:'To get information about user'},
    {command:'/js', description:'js'},
    {command:'/python', description:'python'},
    {command:'/nodejs', description:'nodejs'},
    {command:'/cry', description:'cry'},
]);
bot.on("message", async msg=>{
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;
    const name = msg.chat.first_name;
    console.log(msg.chat.first_name);

    switch(text){
        case '/start':
            await bot.sendMessage(chatId, `Welcome,${name}`);
        break;
        case '/cry':
            await bot.sendSticker(chatId, 'https://cdn.tlgrm.ru/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/192/2.webp');
        break;
        case '/info':
            await bot.sendMessage(chatId, `Your name is ${msg.chat.first_name}`);
        break;
        case '/js':
            await bot.sendMessage(chatId,'https://downloadlynet.ir/2020/12/2026/03/the-modern-javascript-bootcamp-course/02/?#/2026-udemy-092428081422.html');
        break;
        case '/nodejs':
            await bot.sendMessage(chatId,'https://downloadlynet.ir/2020/12/2026/03/the-modern-javascript-bootcamp-course/02/?#/2026-udemy-092428081422.html');
        break;
        case '/python':
            await bot.sendMessage(chatId,'https://downloadlynet.ir/2020/12/2026/03/the-modern-javascript-bootcamp-course/02/?#/2026-udemy-092428081422.html');
        break;


    }
})