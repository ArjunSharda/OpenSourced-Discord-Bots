# MODIFIED VERSION

import discord

client = discord.Client()

@client.event
async def on_message(message):
  if message.author == client.user:
    return

  if message.content.startswith('!ampro'):
    await message.channel.send('yes')

  if message.content.startswith('!deletethismessage'):
    await message.delete()
    await message.channel.send('Um')  

client.run('TOKEN_HERE')
