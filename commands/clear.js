module.exports = {
	name: 'kick',
	description: 'kick du serveur',
	execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission.");
message.channel.bulkDelete(6)
console.log(`6 message on était retiré par ${message.author.tag}`);
        message.channel.send("6 messages en moins");
    }
};