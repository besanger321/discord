module.exports = {
	name: 'ping',
	description: 'ping serveur',
	execute(client, message, args) {
            const timetTaken = Date.now() - message.createdTimestamp;
            message.channel.send(`Pong! la latence est de ${timetTaken} ms.`)
          },
		};