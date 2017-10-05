const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("This bot is working yay");
  }
});

<<<<<<< HEAD
client.login(config.token);
=======
client.login("");
>>>>>>> 0c27061050efa45257ae754f42f2137a1475102b
