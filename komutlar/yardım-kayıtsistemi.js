const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Darkwill Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:Discord:737981764919754753> Darkwill botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kanal Ayarla__`,`<a:ayar:825679362518417459>  \`${prefix}kayıt-kanal-ayarla\` Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,`<a:ayar:825679362518417459> \`${prefix}kayıt-log-kanal-ayarla\` Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol__`,`<a:ayar:825679362518417459> \`${prefix}kayıt-ol\`  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol__`,`<a:ayar:825679362518417459> \`${prefix}kayıt-verilecek-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol__`,`<a:ayar:825679362518417459>\`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Giriş Sistemi__`,`<a:ayar:825679362518417459> \`${prefix}giriş-sistemi\` Kayıt Kanalına Atılacak Mesajı Ayarlar`,true)
.addField(`__İsim Sistem__`,`<a:ayar:825679362518417459> \`${prefix}isim-sistem\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`,true)
.addField(`__Kayıt Sistemi Kapat__`,`<a:ayar:825679362518417459> \`${prefix}kayıt-sistemi-kapat\` Kayıt Sistemini Tamamen Kapatır`,true)
.addField(`__Bilgilendirme__`,`<a:Discord:737981764919754753>  \`${prefix}davet\` | Darkwill'i Sunucunuza Davet Edersiniz\n<a:Discord:737981764919754753> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:Discord:737981764919754753> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}
