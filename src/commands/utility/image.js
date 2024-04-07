require('dotenv').config({ path: '../../../.env' })
const { SlashCommandBuilder } = require('discord.js');
const pg = require('pg')
const { Client } = pg
const client = new Client()

const query = {
	text: 'SELECT picture_url FROM maps',
}

async function login() {
	await client.connect()
}
login()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getimage')
		.setDescription('queries db for an image'),
	async execute(interaction) {
		const url = await client.query(query)
		await interaction.reply(url.rows[0].picture_url);
	},
};
