import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!")

@bot.slash_command(description="Says Hello!")
async def hello(interaction: nextcord.Interaction):
  await interaction.send("Hello!")

@bot.slash_comamnd(description="Says Hello, but ephemerally.")
async def helloe(interaction: nextcord.Interaction):
  await interaction.send("Hello!", ephemeral=True)


bot.run("TOKEN_HERE")
