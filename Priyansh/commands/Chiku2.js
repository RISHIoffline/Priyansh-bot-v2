module.exports.config = {
  name: "ADMIN-ONLY",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "THIS BOT IS MR PREM SHARMA",
  commandCategory: "ADMIN-BOT-REPLY-MESSAGE",
  usages: "MENTION-BOT-ADMIN",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080347467595") {
    var aid = ["100080347467595"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["मेरा बॉस आर्यन बाबू सो गया है━━•☆__❤️__🤸‍♂️", "वो बसंती 🐍के साथ बिजी है क्या बोलना है मुझे बोलो 🏃🙅❁•═════", "देखो प्लीज मेरा बॉस आर्यन बाबू जॉब पर है तो प्लीज उसे परेशान ना करो━━•☆__🤸‍♂️---❤️ ", "😘मेरे आर्यन बाबू__बॉस_❤️_को सब बुलाते हैं हको तो कोई घास भी नहीं डालता है🥺____❤️ ❀❁•════", "मेरा बॉस आर्यन बाबू सुसु करने गया है तो प्लीज उससे सुसु करने दे परेशान मत करो━━•☆🤸‍♂️______❤️ ", "मेरा  बॉस आर्यन बाबू भाग गया लगता ह🏃━━•☆🤣" , " मेरे बॉस आर्यन बाबू को अभी मत बुलाओ कॉल पर क्योंकि वह भी चुम्मा लेने गया है_____🤸‍♂️_😁😁😄" , " मेरे बॉस आर्यन बाबू को भी परेशान मत करो वह आराम कर रहा है अभी समझ गए ना आप______❤️ __🤸‍♂️💜" , " जब देखो आर्यन बाबू आर्यन बाबू आर्यन बाबू कुछ काम भी कर लो━━•☆❤️ 🏃_______🤸‍♂️" , " उसका रिचार्ज खत्म हो गया है जाओ रिचार्ज करवा उसका फिर बुलाना उसे━━•☆❤️______❤️____🤸‍♂️" , " प्लीज आर्यन बाबू को मत बुलाओ वरना वह फिर मुझ पर गुस्सा करेगा और मुझे पीटेगा━━•☆___❤️ ___❤️ 🤸‍♂️ " , " मेरे बॉस आर्यन बाबू के सर में दर्द हो रहा है तो उसे अभी सोने दो अभी━━•☆❤️_🏃___🤸‍♂️" , " सब मेरे आर्यन बाबू बॉस को बुलाते रहते हैं हमे तो कोई प्यार भी नही करता 😔━━•☆🥺___❤️____🏃__🤸‍♂️" , " पहले मेरे  बॉस आर्यन बाबू के लिए कॉफी बना कर लेकर आओ फिर बुलाना उसे__❤___💜___🤸‍♂️" , " देखो मेरे आर्यन बाबू बॉस को मत बुलाओ तुम उसे डिस्टर्ब करोगी फिर वह मुझे पीटेगा__❤️__💜━━•☆🤸‍♂️" , " मेरे आर्यन बॉस को डिस्टर्ब ना करो वह अभी बिजी है हसीना के साथ━━•☆❤️___❤️___🤸‍♂️" , " मेरे आर्यन बाबू बॉस का डाटा खत्म हो गया 22 रिचार्ज करो अभी━━•☆❤️___🤸‍♂️💜"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}