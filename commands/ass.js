const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');


const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "ass",
  description: "ass",
  async execute(client, message, args, Discord) {//async function is needed

   if (message.channel.nsfw === true) {
     const image = await api.get("ass")//Getting the image
     const embed = {
        title: 'NSFW',
        
       footer: {
		text: `Requested by ${message.author.username}`,
		
	},
       description: `Here's a Ass image for you ${message.author.username}`,
       image: {
		url: (image),
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