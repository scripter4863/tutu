
require('./server.js');
const Discord = require('discord.js');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const Levels = require('discord-xp');
const ms = require('ms');
const fs = require('fs');
const mySecret = process.env['TOKEN']
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on("ready", () => {
  client.user.setActivity(`${client. guilds. cache. size} servers | t!help`, { type: ActivityType.Watching });
});


client.commands = new Discord.Collection();
client.event = new Discord.Collection();



['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});


client.login(mySecret)