import { BaseCommand } from "djs-commands";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { AllClasses } from "../types/Player";
import User from "../models/Player";
export default class StartCommand implements BaseCommand {
  name = "start";
  description = "Create your adventurer profile.";

  slashCommand = new SlashCommandBuilder()
    .setName(this.name)
    .setDescription(this.description)
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("Select a unique player name.")
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName("class")
        .setDescription("Select a class to start playing on")
        .addChoices(
          AllClasses.map((className) => ({
            name: className,
            value: className,
          })),
        )
        .setRequired(true),
    );

  async run(interaction: ChatInputCommandInteraction): Promise<void> {
    const nameChoice = interaction.options.getString("name");
    const classChoice = interaction.options.getString("class");
  }
}
