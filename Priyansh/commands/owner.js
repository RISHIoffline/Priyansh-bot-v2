module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DEVIL SHARABI",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://drive.google.com/file/d/1Czsyq2qpNDmkCyEeREMmbhrM1C570qFh/view?usp=drivesdk"
     ];
     var callback = () => api.sendMessage({body:`🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰

   𝐌𝐑..𝐃𝐄𝐕𝐈𝐋 𝐒𝐇𝐀𝐑𝐀𝐁𝐈 •◡•)

𝐀𝐠𝐞 : 26

𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝐙𝐀𝐈𝐍𝐀 𝐑𝐀𝐉𝐏𝐔𝐓

𝐅𝐫𝐨𝐦 : 𝐉𝐀𝐈𝐏𝐔𝐑  (𝐑𝐀𝐉𝐀𝐒𝐓𝐇𝐀𝐍)

𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 https://www.facebook.com/profile.php?id=61560621821421&mibextid=ZbWKwL:

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : +919024870456

Jai Shree RaaM 🚩🌍❤️🙂!❤🙂♣️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
