module.exports = {
	name: 'ping',
	description: 'ping serveur',
	execute(client, message, args) {
            const timetTaken = Date.now() - message.createdTimestamp;
            message.channel.send(`> !ping test de latence
            > !clear effacer 6 messages
            > !kick virer une personne
            > !ban pour bannir une personne
            > !warn pour punir une personne`)
          },
		};