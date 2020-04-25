var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
var moment = require('moment-timezone');

var list = [
    {
        "ID": "普一",
        "Time": "16:38"
    },
    {
        "ID":"普二",
        "Time": "15:05"
    },
    {
        "ID":"普三",
        "Time": "01:01"
    },
    {
        "ID":"普四",
        "Time": "14:53"
    },
    {
        "ID":"次一",
        "Time": "14:59"
    },
    {
        "ID":"次二",
        "Time": "16:57"
    },
    {
        "ID":"次三",
        "Time": "17:11"
    },
    {
        "ID":"次四",
        "Time": "15:09"
    }
]
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client();
bot.login(auth.token);

bot.on('ready', () => {
    logger.info("login success");
});

bot.on('message', msg => {
    var formattedDate
    switch (msg.content){
        case 'p1': 
            formattedDate = moment().add(240, "minutes")
                .tz(Date.now.toString())
                .format("HH:mm");
            list[0].Time = formattedDate;
            msg.reply(list[0].ID+" "+formattedDate + " 重生");
            break;
        case 'p2':
             formattedDate = moment().add(230, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[1].Time = formattedDate;
            msg.reply(list[1].ID+" "+formattedDate + " 重生");
        break;
        case 'p3':
             formattedDate = moment().add(240, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[2].Time = formattedDate;
            msg.reply(list[2].ID+" "+formattedDate + " 重生");
        break;
        case 'p4':
             formattedDate = moment().add(250, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[3].Time = formattedDate;
            msg.reply(list[3].ID+" "+formattedDate + " 重生");
        break;
        case 'p5':
             formattedDate = moment().add(230, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[4].Time = formattedDate;
            msg.reply(list[4].ID+" "+formattedDate + " 重生");
        break;
        case 'p6':
             formattedDate = moment().add(240, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[5].Time = formattedDate;
            msg.reply(list[5].ID+" "+formattedDate + " 重生");
        break;
        case 'p7':
             formattedDate = moment().add(240, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[6].Time = formattedDate;
            msg.reply(list[6].ID+" "+formattedDate + " 重生");
        break;
        case 'p8':
             formattedDate = moment().add(250, "minutes")
            .tz(Date.now.toString())
            .format("HH:mm");
            list[7].Time = formattedDate;
            msg.reply(list[7].ID+" "+formattedDate + " 重生");
        break;
        case 'all':
            list.forEach(element => {
                element.Time = moment(element.Time, 'HH:mm');
            });
            list.sort((a,b) => new Date(a.Time).getTime() - new Date(b.Time).getTime());

            list.forEach(element =>{
                element.Time = moment(element.Time).format('HH:mm');
            })

            msg.reply(JSON.stringify(list));
            
    }
});