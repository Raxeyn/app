const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  const db = require('quick.db');
  

    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:reddetmek:825688868107059201> **Gerekli Yetkin Yok Dostum**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:B_Yildiz:825644101985894400>   **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:B_Yildiz:825644101985894400>  **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:B_Yildiz:825644101985894400>  **Lütfen Sebep Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:reddetmek:825688868107059201> **Dostum Kendini Banlıyamazsın**');

  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .addField('<a:B_Yildiz:825644101985894400>  İşlem', 'Sunucudan Banlama')
  .addField('<a:B_Yildiz:825644101985894400>  Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('<a:B_Yildiz:825644101985894400>  Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:B_Yildiz:825644101985894400>  Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  

  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setDescription(`<a:onaylamak:825688895286280232> **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'yasakla',
  aliases: ['ban','yasakla','banla']
};

