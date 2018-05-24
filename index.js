// Import discord.js module
const Discord = require('discord.js');

// Import node.js file system module
const fs = require('fs');

// Import config files
const { prefix, token } = require('./config.json');

// Create a new Discord client
const client = new Discord.Client();

// Create a new discord commands collection
client.commands = new Discord.Collection();

// Dynamically retrieve command files
const commandFiles = fs.readdirSync('./commands');

// Loop to import command files from command folder
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log('Loaded command', command.name);
}

// when the client is ready, run this code
// this event will trigger whenever your bot:
// - finishes logging in
// - reconnects after disconnecting
client.on('ready', () => {
	console.log('Hello, my name is RubyBot.');
});

// Dynamic command handler
client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.log(error);
		message.reply('there was an error in trying to execute your command.');
	}
});

// login to Discord with your app's token
client.login(token);