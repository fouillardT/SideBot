const dotenv = require('dotenv');
dotenv.config();

let config = {};

config.discordToken = process.env.DISCORD_TOKEN;

module.exports = config;