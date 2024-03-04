const {SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('replies with positive'),
	async execute(interaction) {
		await interaction.reply('positive');
	},
};
