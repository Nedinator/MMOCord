import { BaseCommand } from "djs-commands";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default class StartCommand implements BaseCommand {
  name = "start";
  description = "Create your adventurer profile.";

  slashCommand = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.description);

  async run(interaction: ChatInputCommandInteraction): Promise<void> {
    interaction.reply({ content: "Well done!" });
  }
}
