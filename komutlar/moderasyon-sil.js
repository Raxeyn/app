const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:reddetmek:825688868107059201> **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<a:loading:837990620198207498>  **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:onaylamak:825688895286280232> **${args[0]}** **Adet Mesajı Sildim**`)
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};