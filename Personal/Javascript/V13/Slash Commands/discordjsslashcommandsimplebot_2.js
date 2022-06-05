const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

const commands = [{ name: 'embedtest', description: 'Test'}, {name: 'whatisthisbot', description: 'What is this bot for?'}, {name: 'dmtest', description: 'Get a DM from the bot!'}]; 


client.on('ready', () => {
  client.application.commands.set(commands)
  console.log(`BOT INFORMATION \n User: ${client.user.tag} \n ID: ${client.user.id} \n Logged in successfully \n --------------------------`);
  client.user.setActivity('with discord.js', {
    type: 'PLAYING'
  })
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'embedtest') {
  const embed = { title: 'test', color: '#3455eb', url: 'https://www.github.com/ajsharda17', description: 'test embed', fields: [{name: 'test1', value: 'test1.1'}, {name: 'test2', value: 'test2.2'}], timestamp : new Date(), footer: {text: 'Test'}};
  await interaction.reply({embeds: [embed]});
  }

  if (interaction.commandName === 'whatisthisbot') {
    const embed = { title: 'What is this bot?', description: 'This bot is an discord.js bot made by <@851206490638254152>, for playing around with discord.js.', color: '#48ff00', timestamp: new Date()}
    await interaction.reply({embeds: [embed]})
  }

  if (interaction.commandName === 'dmtest') {
    const embed = { title: 'DM Test', description: 'This is a DM test. This test has direct messaged you privately.', color: '#48ff00', timestamp: new Date()}
    await interaction.user.send({embeds: [embed]})
  }
});

client.login('TOKEN_HERE');
