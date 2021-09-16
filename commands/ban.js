module.exports = {
	name: 'kick',
	description: 'kick du serveur',
	execute(client, message, args) {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);  
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("tu n'a pas les permissions");
        if(!message.mentions.users.first()) return message.channel.send("mention inexistante ou éroner");  
          console.log(`${user.tag} a été ban par ${message.author.tag}`);
          member.ban();
          message.channel.send(`${user.tag} a été ban`);
        }
    };