const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Darkwill | Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "762710093543899176"; // Sunucu ID
 
  var channelID = "812934257667473491"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("<a:B_Yildiz:825644101985894400>  Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<a:B_Yildiz:825644101985894400>  • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<a:B_Yildiz:825644101985894400>  • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<a:B_Yildiz:825644101985894400>  • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 