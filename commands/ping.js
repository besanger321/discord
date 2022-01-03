module.exports = {
	name: 'ping',
	description: 'ping serveur',
	execute(client, message, args) {
            const timetTaken = Date.now() - message.createdTimestamp;
            message.channel.send(`Pong! la latence est de ${timetTaken} ms.`)
			console.log(`${message.author.tag} a demander le ping qui est de ${timetTaken}`)
          },
		};