module.exports = {
	name: 'ping',
	// For help command
	description: 'For dynamic help in the future',
	execute(message, args) {
		message.channel.send(`Pong! ${message.client.ping}ms`);
	},
};