const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Darkwill Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:B_Yildiz:825644101985894400> Darkwill botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:B_Yildiz:825644101985894400>  \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:Discord:737981764919754753>  \`${prefix}davet\` | Darkwill'i Sunucunuza Davet Edersiniz\n<a:Discord:737981764919754753> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:Discord:737981764919754753> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
  };
exports.config = {
name: "eklenti",
  aliases: []
}
