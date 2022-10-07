const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

//I'm using a package to call the API because it needs and Authorization code for NSFW
const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);//Setting up the API using the authorization code
//I'm using a test authorization code that you can find in the nekobot docs at the end of the site.

module.exports = {
  name: "hentai",
  description: "Hentai",
  async execute(client, message, args, Discord) {//async function is needed

   if (message.channel.nsfw === true) {
     const image = await api.get("hentai")//Getting the image
     const embed = {
        title: 'NSFW',
        
       footer: {
		text: `Requested by ${message.author.username}`,
		
	},
       description: `Hentai: ${message.author.username}`,
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