const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/475d7c09ee94d362c61f2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "奥TRÅVÏS奥™" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349066380818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/475d7c09ee94d362c61f2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnbEdhNWpCMGVIcElEdWFTUzQ0WmZpNnRhWUlUais0VVBWaStjcUpjQThvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLSWNReTlDdlR2Q2R6cXU2YXJNZHB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlNDExZWI4LTdiODgtNGM5MS1iYzQ1LTBhMGY0MDJmZTVmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1NSxcbiAgICAgIDE5NixcbiAgICAgIDcxLFxuICAgICAgMzAsXG4gICAgICA4NyxcbiAgICAgIDExNSxcbiAgICAgIDEyNyxcbiAgICAgIDEzNCxcbiAgICAgIDU0LFxuICAgICAgMzMsXG4gICAgICAxNzAsXG4gICAgICA0NCxcbiAgICAgIDEwLFxuICAgICAgNSxcbiAgICAgIDcwLFxuICAgICAgMTE1LFxuICAgICAgNzAsXG4gICAgICAyMjYsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMTM3LFxuICAgICAgMTc1LFxuICAgICAgMTk4LFxuICAgICAgMTAyLFxuICAgICAgNTAsXG4gICAgICAxOTgsXG4gICAgICAxMjgsXG4gICAgICAzNyxcbiAgICAgIDEwMCxcbiAgICAgIDg2LFxuICAgICAgMjMxLFxuICAgICAgOTEsXG4gICAgICA5NyxcbiAgICAgIDIzMixcbiAgICAgIDczLFxuICAgICAgMTg2LFxuICAgICAgMjM2LFxuICAgICAgMTg3LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzVKS1daSlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDA3NDIzOTE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjk4NTE2NTA3MDU4MTozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaUE0S1FCRU5Hcy83UUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFzWCtSTUM3YlRUWkthVng3WVlNalA1ZmhnOWRpU1ZBWWxzZXJoeTRtaUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVDJBS1l4TFhxNElveXBxK1V3M2h6YWRHS0NKSzBvdDI1VnlDVnBnTERtNm1pWkE0bDdxYlFLWDlsNVRiU1FIOUNyZGcwbE9qVWlSYk56MUlIajJnQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMU1WWS9oQi9YZmNqZkEyUlJjVmN4Umo5aE4xS0xzUnhIc3JwVWxNV1BQK2lQcm14d0dxZ2h4YVBnb2cydm5LZXBNTGszZ2tadUMxOThPZEg1eTZpalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMDc0MjM5MTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NTExMjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRDhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlEOC5qc29uIjogIntcImtleURhdGFcIjpcIkN3Q0dpOGkwa2ErenR2SnpoY3ZlbU4zZ0NvdDlYdVlzMDJCVmZUZVl2cmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ1NTA1ODE2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MDkxMzA4NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "trav🐐",
  botname : process.env.BOT_NAME  || "TRÅVÏS-MD",
  ownername:process.env.OWNER_NAME|| "奥TRÅVÏS奥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
