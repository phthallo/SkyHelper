const { ApplicationCommandOptionType } = require('discord.js');
const moment = require('moment-timezone');
const { buildShardEmbed, deleteSchema, parsePerm } = require('@functions');
const { autoShard } = require('@schemas/autoShard');
const desc = require('@src/cmdDesc');
module.exports = {
  data: {
    name: 'shards-live',
    description: 'auto updating message with live shards details',
    options: [
      {
        name: 'start',
        description: 'configure auto shard',
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: 'channel',
            description: 'channel where shard details should be updated',
            type: ApplicationCommandOptionType.Channel,
            required: true,
          },
        ],
      },
      {
        name: 'stop',
        description: 'stop auto shard',
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
    dm_permission: false,
    longDesc: desc.autoShard,
    userPermissions: ['ManageGuild'],
  },
  async execute(interaction, client) {
    await interaction.deferReply({ ephemeral: true });
    if (!interaction.guild) {
      return interaction.followUp('This command can only be used in a server');
    }
    const sub = interaction.options.getSubcommand();
    const config = await autoShard(interaction.guild);
    if (sub === 'start') {
      if (config.channelId && config.messageId) {
        const ch = client.channels.cache.get(config.channelId);
        const ms = await ch.messages.cache.get(config.messageId);
        if (ms && ch) {
          return interaction.followUp({
            content: `Live Shard is already configured in <#${config.channelId}> for this message ${ms.url}.`,
          });
        }
      }
      const channel = interaction.options.getChannel('channel');
      const requiredPerms = ['SendMessages', 'ViewChannel'];
      const missingPerms = [];

      for (const perm of requiredPerms) {
        if (!interaction.guild.members.me.permissionsIn(channel).has(perm)) {
          missingPerms.push(perm);
        }
      }

      if (missingPerms.length > 0) {
        return interaction.followUp({
          content: `I do not have the required permissions (${missingPerms
            .map((prm) => `\`${prm}\``)
            .join(', ')}) to perform this action in <#${channel.id}>`,
          ephemeral: true,
        });
      }

      const currentDate = moment().tz(interaction.client.timezone);
      const updatedAt = Math.floor(currentDate.valueOf() / 1000);
      const { result } = await buildShardEmbed(currentDate, 'Live Shard');
      const msg = await channel.send({
        content: `Last Updated: <t:${updatedAt}:R>`,
        embeds: [result],
      });
      config.channelId = channel.id;
      config.messageId = msg.id;
      await config.save();
      interaction.followUp({
        content: `Live Shard configured for <#${channel.id}>. This message ${msg.url} will be updated every 5 minutes with live Shards details.`,
      });
    } else if (sub === 'stop') {
      if (!config.channelId || !config.messageId) {
        return interaction.followUp({
          content: 'Live Shard is already disabled for this server',
        });
      }
      const ch = client.channels.cache.get(config.channelId);
      ch.messages.fetch(config.messageId).then((m) => {
        if (m) {
          m.delete();
        }
      });

      await deleteSchema('autoShard', interaction.guild.id);

      interaction.followUp({
        content: 'Live Shard is disabled',
      });
    }
  },
};
