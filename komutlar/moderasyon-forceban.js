const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:reddetmek:825688868107059201> **Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.**");
    if (!args[0]) {
        return message.channel.send(`<a:reddetmek:825688868107059201> **Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!**`)
   }
   var sebep = args.slice(1).join(" ");
   var Pirate = args[0]
   var now = new Date()
   if (!sebep) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`<a:reddetmek:825688868107059201> **Bu Kullanıcı Zaten Yasaklanmış**`)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<a:onaylamak:825688895286280232> <@!${user.id}> **adlı kullanıcı banlandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:reddetmek:825688868107059201> Bir Hata Oluştu`);
                       console.error('<a:reddetmek:825688868107059201> Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`<a:reddetmek:825688868107059201> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<a:onaylamak:825688895286280232> <@!${user.id}> **sunucudan yasaklandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:reddetmek:825688868107059201> Bir Hata Oluştu`);
                       console.error('<a:reddetmek:825688868107059201> Hata:', error);
                   });
           });
   }
 
}
exports.config = {
   name: "forceban",
   aliases: ['force-ban']
}