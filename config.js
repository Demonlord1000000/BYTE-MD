
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZqUnRQcEFtV3BONit6VndLS2dBclpEZm5aTGxSdkMyM3VsRDFvdHkyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkJ5NjFONkxnMDNKRXVqMVM2R1NFRkRIaXFmTU5SR3FjUVRNYXVzL00xZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT0lIb050N2RjQTg4d0RhbGtEUGYrNTlmK3hzMjE1SklKNVJncU1keEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxU1VtYnE5YXFaUU94eVpXOGQwWXlyK21YZXljT0ExNEdSaXB4Q0d5T2lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCcmhhdmtPdWliZnRtUnNtaWUrRERpS0JvSzY5RkRSUWJ6QjZrdEo2MTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJGS1ppdVB4QnlERlgzbENqTlBrYVZTT1h5U20rY2cwYTVUYkRRZ1dtQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tlMzF4Y1lLMWY4R2ZiaDBKbFZ3b0I1K1R2cG9aV0JkMGFic3YyWGhtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjVXbXNQcHRCbjNLY2p3Q1YvQmtMRSt2c2tRM2lLV0REa2FvRVZHYk9tTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFnNUdWcUZ4NVNHb3p4NlZ6SmxPT1pzR1R3UlFTSTJBY250OWZuQVdsV3daTTFGcGFhbWl6Slc3NkR4ejh3ZlZvRTZtbHRNWGdvR1pzdDJzUGZlOGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJPWUVnY1NmQ1doa0tLYXRweWEvd09nUUR5RU1tQkpIVVhsek5lSy9lQWJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjIzMTIyMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTFCMkJERDI1NjdBQkYyREJGOEUxQUEzQTUwNzQ2RjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjUyNTQ4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2MjMxMjIyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MTc1RDcwMTk1NkI5NjlCMzdBQkQwN0VDRDdBMDQ2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTI1NDgyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJod2dxeGhHNlN4LW5fYldPSUVLUDBBIiwicGhvbmVJZCI6IjYyYjdlZGU1LWM3YTQtNGRmZS05N2NjLTYyYmE0ODk5ZGMyNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WWxFVVRwUmJYcjBISXhGaEpGVENOTTY0bU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzZqclFKa1c0ZHZBQzgrUzU4Skp3WjNHRjZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhWRFAxQzRFIiwibWUiOnsiaWQiOiIyMzQ4MDYyMzEyMjI4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSWFtcmVhbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTENOenI4Q0VKZk9yclVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibGRBT3ExZDJEV2lzc2k3NThjY1dScmd6TzZ6LzllbW5TRHpISjJPdkdIRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMTYxeDZyN1dpZmlHOWYyYjhEcFFKQ2FmamVnei80ODg4cGlJSnpGMDdxcUJuZjNFbGVyNG9VOW53ZzlFVzhkbndFTjJTVlZOOU5RL1poU2pkOWpwRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImtWMVRCc1RkenZNMDhLSEJVdjZhUWdxV3BmanU4cHA3eDlYTFBBamxDQWhickhPa1RWVi9wTTY4enhQY3NIZFFYTlJ6T29FUGxpb2ViNExyU25OM2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MjMxMjIyODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpYUURxdFhkZzFvckxJdStmSEhGa2E0TXp1cy8vWHBwMGc4eHlkanJ4aHgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI1MjU0NzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0tFIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
