const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffffff")
.setAuthor(`Darkwill Linkler`, client.user.avatarURL())
.setDescription('**• [Darkwill`i Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=616282328905416727&permissions=8&scope=bot)**\n\n**• [Darkwill Oy Ver](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjWpZqOxI31AhXIQvEDHWk-BpQQFnoECAMQAQ&url=https%3A%2F%2Fdiscordbotlist.com%2Fbots%2Fdarkwill%2Fupvote&usg=AOvVaw3595kVhHPsy22zmYTNYVA_)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };