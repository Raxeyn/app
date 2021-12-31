const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:reddetmek:825688868107059201> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


   let question = args.join(' ');

   let user = message.author.username
     const embedd = new Discord.MessageEmbed()

     .addField(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000)); 

       const embed = new Discord.MessageEmbed()

       .setColor("#ffffff")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Darkwill', client.user.avatarURL)

       .addField(`<a:loading:837990620198207498>**Darkwill | Oylama**<a:loading:837990620198207498>`, `**${question}**`);
   
     message.channel.send(embed).then(function(message) {

         message.react('<a:onaylamak:825688895286280232>');

         message.react('<a:reddetmek:825688868107059201>');

       });

     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

