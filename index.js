// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// Import config files
const { prefix, token } = require('./config.json');

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
	console.log('Hello, my name is RubyBot.');
});

// simple command handler
client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	}
	else if (command === 'server') {
		message.channel.send(
			`Member count: ${message.guild.memberCount}`
		);
	}
	else if (command === 'cmd-info') {
		message.channel.send(
			`Total arguemnts: ${args.length}
			Your arguments are: ${args}`
		);
	}
});

// login to Discord with your app's token
client.login(token);