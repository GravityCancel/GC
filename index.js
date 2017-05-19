const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
var schedule = require('node-schedule');
var valid = require('validator');


var pre = '.';
var game = 'With your Mum\'s pussy';
var startChannel = "nsfw-bigbong";
var channel;

bot.on('message', (message) => {
    // qol things 
    if (!message.content.startsWith(pre)) return;
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];                                                                                    
	command = command.slice(pre.length);

    let args = message.content.split(" ").slice(1);

    if (command === "say") {
		message.channel.send(args.join(" "));
    }

    if (command === "changeGame") {
	var newGame = args.join(" ");
		bot.user.setGame(newGame);
		message.channel.send("Game changed");
    }
    
    // commands
    if (command === 'ffs') {
        message.channel.send('samsies');
    }

    if (command === 'big') {
		message.channel.send('BONG!');
    }

	if (command === 'changeChannel') {
		newChannel = args[0];
		channel = bot.channels.find("name", newChannel);
		message.channel.send("Switched channel to " + newChannel);
	}	

});

bot.on("ready", function () {
    console.log("Ready");
    bot.user.setGame(game);
    var schedule = require('node-schedule');

	channel = bot.channels.find("name", startChannel);

    var j = schedule.scheduleJob('0 * * * *', function(){
		var sd = new Date();
		var hour = sd.getHours();
		var bong_o_clock = "";
		if (hour === 0) {
			bong_o_clock += "Midnight BONG!";
		} else {
			for (i = 0; i < hour; i++) {
	   			bong_o_clock += "BONG! ";
				if (i == 23) {
					bong_o_clock += "Maximum BONGEGE!!!";
				}
			}
		}
		console.log('it bonged fam');
		channel.send(bong_o_clock);
    });

});

bot.login(settings.real_bot); 
