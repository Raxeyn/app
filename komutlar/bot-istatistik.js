


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let darkwill = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<a:developer:837990618667548682> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:developer:837990618667548682>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:developer:837990618667548682>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:developer:837990618667548682>  **Bot Sahibi**  <@408496730644938752> \n **🖤ʙʟᴀᴄᴋ ғʟᴏᴡᴇʀ🥀#6887** \n\n <a:developer:837990618667548682> \ **Bot Geliştiricisi**  <@408496730644938752> \n **🖤ʙʟᴀᴄᴋ ғʟᴏᴡᴇʀ🥀#6887** \n\n <a:developer:837990618667548682>  **Bot Sahibi**  <a:developer:837990618667548682> \n **🖤ʙʟᴀᴄᴋ ғʟᴏᴡᴇʀ🥀#6887** \n`)
.addField("__**Sürümler**__", `<a:developer:837990618667548682>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:developer:837990618667548682>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:developer:837990618667548682>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:developer:837990618667548682>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/918504555271028776/926380656005615656/standard.gif`)
.setColor("#ffffff")
message.channel.send(darkwill)
}

exports.config = {
name: "botbilgi",
aliases: []
}