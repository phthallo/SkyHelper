const { WebhookClient, EmbedBuilder, Collection, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
const fs = require('fs');
const path = require('path');
const {shardInfos} = require('@shards/aboutShards')
const {shardLocation} = require('@shards/shardsLocation')
const {shardTimeline} = require('@shards/shardsTimeline')
const {guideButton} = require('@guides/GuideOption')
const {helpButton} = require('@handler/help');
const Log = require('@src/logger');
const Logger = process.env.COMMANDS_USED ? new WebhookClient({ url: process.env.COMMANDS_USED }) : undefined;
const {ErrorForm} = require('@handler/errorForm')
slash = new Collection();


const commandDirectory = path.join(__dirname, '../../commands/slash');
const commandFiles = fs.readdirSync(commandDirectory).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`../../commands/slash/${file}`);
  slash.set(command.data.name, command);
}
/**
 * @param {import('@root/main')} client
 * @param {import('discord.js').Interaction} interaction
 */
module.exports = async (client, interaction) => {
  if (interaction.isChatInputCommand()){
    if (!interaction.isCommand()) return;
    
    const commandName = interaction.commandName;
    
    const command = slash.get(commandName);

  try {
    const embed = new EmbedBuilder()
    .setTitle("New command used")
    .addFields(
      { name: `Command`, value: `\`${interaction}\`` },
      { name: `User`, value: `${interaction.user.username} \`[${interaction.member.id}]\`` },
      { name: `Server`, value: `${interaction.guild.name} \`[${interaction.guild.id}]\`` },
      { name: `Channel`, value: `${interaction.channel.name} \`[${interaction.channel.id}]\`` }
    )
    .setColor('Blurple')
    .setTimestamp();

  // Slash Commands
  if (interaction.isChatInputCommand()) {
    Logger.send({ username: "Command Logs", embeds: [embed] }).catch((ex) => {});
  }
    await command.execute(interaction, client);
  } catch (error) {
    Log.error(error);
    const embed = new EmbedBuilder()
    .setTitle(`ERROR`)
    .setDescription(`An error occurred while executing this command.`);
    
    const actionRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Report Bug')
                .setCustomId('error_report')
                .setStyle(ButtonStyle.Secondary));
    await interaction.reply({ embeds: [embed], components: [actionRow], ephemeral: true });
  }}
   // Select Menus
    if (interaction.isStringSelectMenu()) {
    await guideButton(interaction)
    await helpButton(interaction, client)
    }
  // Buttons
  if (interaction.isButton()) {
    const Art = await client.users.fetch('504605855539265537');
    const Zhii = await client.users.fetch('650487047160725508');
    const Gale = await client.users.fetch('473761854175576075');
    const Clement = await client.users.fetch('693802004018888714');
    const Christian = await client.users.fetch('594485678625128466');
     
    shardTimeline(interaction, Zhii, Christian);
    shardLocation(interaction, Gale, Clement);
    shardInfos(interaction, Art);
    
  if (interaction.customId === 'error_report') {
    await ErrorForm(interaction)
  }
}
// Modals
if (interaction.isModalSubmit()) {
  if (interaction.customId === 'errorModal') {
    await interaction.reply({ content: 'Your submission was received successfully!', embeds: [], components: [] });
    const commandUsed = interaction.fields.getTextInputValue('commandUsed');
    const server = interaction.fields.getTextInputValue('server');
    console.log('command:', commandUsed, "\nSever:", server);
  }
}
}