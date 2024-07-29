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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_51_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTSlFPUXN1ZERLYXBwV2M4Q2FBR2JHRWtLU1BmNGlrWks4WlBQY3E0aXlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjYzODA4MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQyMUNFOTVCMzBBOTRDOEQ3QjI4QjhGNEY1MUU1MUVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI4MjY2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlXy1sLWpEQ1N2bVhkY1pybk1XaExRXCIsXG4gIFwicGhvbmVJZFwiOiBcImY4MTcyMDAwLTA0M2UtNDdlNS1iODlmLTUyOWQ1YTlmODBlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAxMjYsXG4gICAgICA0MSxcbiAgICAgIDk0LFxuICAgICAgMTEzLFxuICAgICAgNzYsXG4gICAgICAxLFxuICAgICAgNCxcbiAgICAgIDg3LFxuICAgICAgODMsXG4gICAgICA0LFxuICAgICAgMTgwLFxuICAgICAgMTkwLFxuICAgICAgMjA0LFxuICAgICAgODUsXG4gICAgICAyMDgsXG4gICAgICA1NyxcbiAgICAgIDIyMSxcbiAgICAgIDIxMCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDgsXG4gICAgICAxNjQsXG4gICAgICA1OSxcbiAgICAgIDExNyxcbiAgICAgIDE4MixcbiAgICAgIDQ3LFxuICAgICAgMTc5LFxuICAgICAgMjAyLFxuICAgICAgMjAzLFxuICAgICAgMTIsXG4gICAgICAxODksXG4gICAgICAxMzgsXG4gICAgICA0MCxcbiAgICAgIDIyOSxcbiAgICAgIDExNSxcbiAgICAgIDE2OCxcbiAgICAgIDkyLFxuICAgICAgMTU5LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFZaRzRSS0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjYzODA4MTg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5NDAzMjA5Njc0ODg1OjMzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuWlpVRSw4VWw49T5aWlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmkweXZzSEVLRGxuN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdjNVTkVUVDc1R0ttOGs3dzlHcGJjUmFidnlZU3BjejlZZWNqZ3pXWlVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtSTkNDcjhRVzhZSTJCcVRJYUJVY2JnaFNiR3REcU0yOW9rWFNHRmZJMTYxbExSK1o3NU1IdVFhQ0xHaUtvMEluVVo0TzJjekZrN1hQakJRcmhXcUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJBcVNkbDZ2SGlZd0gyeE1TVi9vRlBxQlpXcHhXeVFKSnFweGNyVjBlSHRYbkc4OGsyNENYM0JoL0ZQOWFEUzE4SmRnblBWcDNrcWNLVkt4dnIrYmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjYzODA4MTg6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODI2NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKVWZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpVZi5qc29uIjogIntcImtleURhdGFcIjpcIlQ2VWYxNmhPSHIwMUJLTVNuVVA1Wll4RS9NNEdVYUIzek9jNk8wVzFCQnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzODIxNzA0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
