const Discord = require('discord.js');
const tpoints = {};
const vpoints = {};
const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
const prefix = "g!";
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on("message", message => {
    if (message.content.startsWith("g!obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





 client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('g!adminbc')){
if(!message.author.id === '411137717884289024') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});











const bannedwords = [//Alpha Codes
  "#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip",
  "g!help"
//Alpha Codes
//Alpha Codes

]
client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '480937096102543385') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })

 "#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '495595131181727774') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })



"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '495356595585417217') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490641846993682457') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490642049092026398') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })



"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '4479682510368931840') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**`  تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })




"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '479041823873040399') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**`  تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })











"#credit",//Alpha Codes
  "#profile",//Alpha Codes
//Alpha Codes
  "#rep",//Alpha Codes
  "#top",//Alpha Codes
  "%level",//Alpha Codes
  "%تقديم",//Alpha Codes
  "-play",//Alpha Codes
  "-stop",//Alpha Codes
  "-p",//Alpha Codes
  "-s",//Alpha Codes
  "!invites",//Alpha Codes
  "!top",//Alpha Codes
  "G.play",//Alpha Codes
  "G.stop",
  "G.skip",
  "-skip"//Alpha Codes
//Alpha Codes


client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '490642049092026398') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**` ➫bot»commends▃-▄-▅-▆-▇-▉-▊-▋-█ sتم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })


///////////////////////////////////////////tag
client.on('message', message => {
	var prefix = "g!";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});



///////////////////////////////Trans 
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});
////////////////
client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'تحتاج مساعدة جرب g!help',
        'هلا امرني',
        'تحبني؟',
         'طفشان عندك نكتة؟',
         'تمنشن بوت؟',
         'اعجبك البوت',
         'لا تنسى تزور سيرفر السبورت',
       'احبك ياخي'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});

//////////////////////////////////////////
 client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
 client.on('message', message => {
 if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
 if(message.content.startsWith(prefix + `autorole`)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)
   if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/setrole [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
    if(state.trim().toLowerCase() == 'toggle') {
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   }
         }
 if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`)
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()
 .addField(`Autorole : :sparkles:  `, `
 State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
     .setColor(`BLUE`)
    message.channel.send({embed})
  }
     fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });
 })
 client.on('ready', () => {
  console.log(`AutoRole Code Started By Friends Team`);
    client.user.setStatus("online")
});











client.login(process.env.BOT_TOKEN);





