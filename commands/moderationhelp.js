const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
    
    module.exports = {
      name: "hmoderation",
      description: "Help cmd",
      async execute(client, message, args) {
        const embed = new EmbedBuilder()
    
        .setColor('#66cccc')
        .setTitle('Moderation Commands')
        .setDescription('List of all commands')
        .addFields(
          {name: 'Ban', value: 'Bans a member'},
          {name: 'Delete', value: 'Delete messages'},
          {name: 'Kick', value: 'Kicks a member'},
          {name: 'Note:', value: 'All commands HAVE to be lowercased'},
        )
    
        message.channel.send({embeds: [embed]})
      }
    }