module.exports = {
	name: 'warn',
	description: 'warn sur le serveur',
	execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("tu n'a pas les permissions");
        if(!message.mentions.users.first()) return message.channel.send("mention inexistante ou éroner");
        const user = message.mentions.users.first();
         const member = message.guild.member(user);
         if(member.roles.cache.has("768550301720379422")) return member.kick()||member.send("Tu a était kick pour ton second avertisement.");
         member.roles.add('768550301720379422');
         member.send("Tu a était warn par le staff si cela ce reproduit tu sera soit ban soit kick.");
         console.log(`${user.tag}a été Warn par ${message.author.tag}`) 
    }
};