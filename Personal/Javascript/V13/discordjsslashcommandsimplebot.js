const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = [{
  name: 'embedtest',
  description: 'Test'
}]; 


client.on('ready', () => {
  client.application.commands.set(commands)
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'embedtest') {
  const embed = { title: 'test', color: '#3455eb', url: 'https://www.github.com/ajsharda17', description: 'test embed', fields: [{name: 'test1', value: 'test1.1'}, {name: 'test2', value: 'test2.2'}], timestamp : new Date(), footer: {text: 'Test'}};
  await interaction.reply({embeds: [embed]});
  }         
});

client.login('TOKEN_HERE');
