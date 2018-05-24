module.exports = {
	name: 'ping',
	// For help command
	description: 'For dynamics help in the future',
	execute(message, args) {
		message.channel.send('Pong');
	},
};