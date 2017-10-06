const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
let prefix = "$";
config.prefix = prefix;
fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  console.log(message.content);
  console.log(message.content.split("")[0]);
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("This bot is working yay");
  }
  if (message.content.startsWith(config.prefix + "prefix")) {
    // console.log(message.content.split(" ");
    console.log(message.content.split(" ").slice(1, 2)[0]);
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory

    config.prefix = newPrefix;
    message.channel.send("Prefix changed to " + newPrefix);
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
});

client.login(config.token);
