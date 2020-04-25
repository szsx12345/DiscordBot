const http = require("http");
const express = require("express");
const request = require("request");
const app = express();
app.get("/", (req, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const logger = require('winston');
const moment = require('moment-timezone');
const fs = require('fs');
const token = process.env.TOKEN;

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client();
bot.login(token);

bot.on('ready', () => {
    logger.info("login success");
});

bot.on('message', msg => {
    let list = JSON.parse(fs.readFileSync('purpleBoss.json'));
    var formattedDate;
    switch (msg.content){
        case 'p1': 
            formattedDate = moment().add(240, "minutes")
                .tz("Asia/Taipei")
                .format();
            list[0].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[0].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
            break;
        case 'p2':
             formattedDate = moment().add(230, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[1].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[1].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p3':
             formattedDate = moment().add(240, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[2].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[2].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p4':
             formattedDate = moment().add(250, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[3].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[3].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p5':
             formattedDate = moment().add(230, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[4].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[4].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p6':
             formattedDate = moment().add(240, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[5].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[5].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p7':
             formattedDate = moment().add(240, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[6].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[6].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'p8':
             formattedDate = moment().add(250, "minutes")
            .tz("Asia/Taipei")
            .format();
            list[7].Time = formattedDate;
            fs.writeFileSync('purpleBoss.json', JSON.stringify(list));
            msg.reply(list[7].ID+" "+ moment(formattedDate).format('HH:mm') + " 重生");
        break;
        case 'all':
            let oldList = list;
            var purpleBossStr = "";
            list.forEach(element => {
                element.Time = moment(element.Time, 'HH:mm');
            });
            list.sort((a,b) => new Date(a.Time).getTime() - new Date(b.Time).getTime());

            list.forEach(element =>{
                element.Time = moment(element.Time).format('HH:mm');
                purpleBossStr += element.ID + " " + element.Time + "。"
            })

            msg.reply(purpleBossStr);

            list = oldList
        break;
    }
});