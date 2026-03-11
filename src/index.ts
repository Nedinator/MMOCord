import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { CommandHandler } from "djs-commands";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const handler = new CommandHandler({
  client,
  token: process.env.TOKEN!,
  folder: __dirname + "/commands",
  updateCommands: true,
});

client.once("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const cmd = handler.getCommand(interaction.commandName);
  if (!cmd) return;

  try {
    await cmd.run(interaction);
  } catch (error) {
    console.error("Error running command:", error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "❌ An error occurred while executing this command.",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "❌ An error occurred while executing this command.",
        ephemeral: true,
      });
    }
  }
});
client.login(process.env.TOKEN);
