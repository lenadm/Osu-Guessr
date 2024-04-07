require('dotenv').config({ path: '../../../.env' })
const { SlashCommandBuilder } = require('discord.js');
const pg = require('pg')
const { Client } = pg
const client = new Client()

async function login() {
	await client.connect()
}
login()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getimage')
		.setDescription('queries db for an image'),
	async execute(interaction) {
		await interaction.reply('positive');
	},
};
