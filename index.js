import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN);
