const { Client, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token =
  "MTEzMjIyMzg0MTkzMDg0NjI2OA.GRbpyA.pvqsFqhPMpGx2YMuIUae1-DMYhSqnq1pSwX-fY";

client.on("ready", () => {
  console.log("Bot Online");
});

client.on("message", (msg) => {
  if (msg.content === "Hello") {
    msg.reply("Hello");
  }
});

client.login(token);
