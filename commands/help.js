const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
    
    module.exports = {
      name: "help",
      description: "Help cmd",
      async execute(client, message, args) {
        const embed = new EmbedBuilder()
    
        .setColor('#66cccc')
        .setTitle('Help')
        .setDescription('List of all commands')
        .addFields(
          {name: 'Ban', value: 'Bans a member'},
          {name: 'Delete', value: 'Delete messages'},
          {name: 'Kick', value: 'Kicks a member'},
          {name: 'Ping', value: 'Shows the bots ping'},
          {name: 'hnsfw', value: 'Shows NSFW commands'},
          {name: 'hmoderation', value: 'Shows Moderation commands'},
          {name: 'uptime', value: 'Shows how long the bot was online'},
          {name: 'Note:', value: 'All commands HAVE to be lowercased'},
        )
    
        message.channel.send({embeds: [embed]});
      }
    }