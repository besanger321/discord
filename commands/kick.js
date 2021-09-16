module.exports = {
	name: 'kick',
	description: 'kick du serveur',
	execute(client, message, args) {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("tu n'a pas les permissions");
        if(!message.mentions.users.first()) return message.channel.send("mention inexistante ou éroner");
          console.log(`${user.tag} a été kick par ${message.author.tag}`);  
          member.kick();
          message.channel.send(`A plus dans le bus ${user.tag}`);
        }
    };