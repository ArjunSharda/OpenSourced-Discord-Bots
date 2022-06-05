import nextcord
from nextcord.ext import commands

bot = commands.Bot(command_prefix="!")

@bot.slash_command(description="Sends a embed ephemerally")
async def embed(interaction: nextcord.Interaction):
  embed = nextcord.Embed(title="Embed", description="This is a embed!", color=nextcord.Color.green())
  await embed.add_field(name="Field 1", value="Hi!")
  await embed.add_field(name="Field 2", value="Hi 2!")
  await interaction.send(embed=embed, ephemeral=True)

@bot.slash_command(description="Mentions the interaction user (person who uses the command) ephemerally")
async def mentionintuser(interaction: nextcord.Interaction):
  await interaction.send(f"Hey {interaction.user.mention} !", ephemeral=True)

@bot.slash_command(description="Sends a embed in DMs")
async def embedsenddms(interaction: nextcord.Interaction):
  embed = nextcord.Embed(title="Hello!", description="This message should be in your DMS. at least...", color=nextcord.Color.green())
  await interaction.user.send(embed=embed, ephemeral=True)
  
bot.run("TOKEN_HERE")
