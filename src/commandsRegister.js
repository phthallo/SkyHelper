const { Client, GatewayIntentBits } = require('discord.js');
require('module-alias/register');
require('dotenv').config();
const { REST } = require('@discordjs/rest');
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
(async () => {
  try {
    Logger.success('Started refreshing application (/) commands.');

    await rest.put(
      // Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), // If you want the commands to be guild specific
      Routes.applicationCommands(client.user.id),
      { body: commands },
    );

    Logger.success(`Registered ${commands.length} commands`);

    Logger.success('Successfully reloaded application (/) commands.');
    client.destroy();
  } catch (error) {
    Logger.error(error);
  }
})();

client.login(process.env.TOKEN);
