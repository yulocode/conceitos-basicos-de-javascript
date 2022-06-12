const  Discord = require("discord.js")
const client = new Discord.client()
const config = require("./config.json")


client.on("ready", () => {
    console.log(`Bot Foi Executado, com ${client.user.size} usarios, em ${client.channel.size} canais, em ${client.guilds.size} servidores. `)
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`)
})

client.on("guildCreate", guild => {
    console.log(`o bot entrou no servidor: ${guild.name} (id: ${guild.id}). população: ${member.Cout} membros!`)
    client.user.setActivity(`Estou em: ${client.guilds.size} servidores`)
})
client.on("guildDelet", guild => {
    console.log(`o bot removido do servidor: ${guild.name} (id: ${guild.id}). população: ${member.Cout} membros!`)
    client.user.setActivity(`Serving ${client.guilds.size} servers`)

    client.on("message", async message => {

    })
})

client.login(config.token)