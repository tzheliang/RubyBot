const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content.startsWith("*test")) {
    message.channel.send("This bot is working yay");
  }
});

client.login("MjE1MTI4MTg1MjA4MTc2NjQx.DLfRRA.ynrWtLAlMu3cS8hfNYuCHO-VXcY");
