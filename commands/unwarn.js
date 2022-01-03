module.exports = {
	name: 'unwarn',
	description: 'unwarn sur le serveur',
	execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("tu n'a pas les permissions");
        if(!message.mentions.users.first()) return message.channel.send("mention inexistante ou éroner");
        const user = message.mentions.users.first();
         const member = message.guild.member(user);
         if(member.roles.cache.has("768550301720379422")) return member.roles.remove('768550301720379422');
         message.channel.send(`${user.tag} n'a pas de warn actif`);
         console.log(`${user.tag}a été Unwarn par ${message.author.tag}`) 
    }
};