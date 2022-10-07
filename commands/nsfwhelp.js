const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
    
    module.exports = {
      name: "hnsfw",
      description: "Help cmd",
      async execute(client, message, args) {
        const embed = new EmbedBuilder()
    
        .setColor('#66cccc')
        .setTitle('NSFW Commands')
        .setDescription('List of all commands')
        .addFields(
          {name: '**REAL**', value: 'Actual human photos'},
          {name: '4k', value: 'Shows random nsfw 4k image'},
          {name: 'anal', value: 'Shows butthole pics'},
          {name: 'ass', value: 'Shows ass pics'},
          {name: 'boobs', value: 'Shows boob pics'},
          {name: 'pussy', value: 'Shows pussy pics'},
          {name: '**HENTAI / ANIME**', value: 'Anime / hentai '},
          {name: 'hanal', value: 'Shows anime butthole'},
          {name: 'hboobs', value: 'Shows anime boobs'},
          {name: 'hass', value: 'Shows anime ass'}
        )
    
        message.channel.send({embeds: [embed]})
      }
    }