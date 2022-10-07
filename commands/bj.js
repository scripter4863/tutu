const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "bj",
  description: "bj",
  async execute(client, message, args, Discord) {

   if (message.channel.nsfw === true) {
     const GIF = await neko.nsfw.bJ();
     const embed = {
        title: 'NSFW',
        
       footer: {
		text: `Requested by ${message.author.username}`,
		
	},
       description: `Here's a Ass image for you ${message.author.username}`,
       image: {
		url: (GIF.url),
	},
        
     };
        message.channel.send({ embeds: [embed] });
   } else {
    const notnsfw = {
      title: ':no_entry_sign: NSFW',
        description: 'This is not a NSFW channel!',
        footer: {
		text: 'Make a NSFW channel',
	},
      };
      message.channel.send({ embeds: [notnsfw] });
    }
  }
}