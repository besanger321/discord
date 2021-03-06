const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
prefix = "!";

client.on("message", message => {
  if(message.author.bot){ return false };

client.on('message', message => {
  if(message.author.bot){ return false };
  if(message.channel.type==="dm"||message.channel.type==="group"){ return false };
});

  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  if(message.author.bot){ return false };
  if(message.channel.type==="dm"||message.channel.type==="group"){ return false };
  if (message.content.startsWith(prefix)) {
      try {
          let commandFile = require(`./commands/${command.slice(prefix.length)}.js`)
          commandFile.execute(client, message, args);
      } catch (e) {
          console.warn(`Erreur : ${e}`);
          return;
      }
  }
});

  
client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);
