// =============== Port ===============
const express = require('express');
const prefix = "!";
const app = express();
const port = 4000;
const discordTTS = require('discord-tts');
app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user = new Discord.Client();

user.on("ready", () => {
    const targetguild = user.guilds.cache.get("394910662662553600");

    
    const activities = [
        { name: 'A L O H A', type: 'STREAMING', url: "https://www.twitch.tv/trikanoid" },
        { name: 'discord.gg/ALOHA', type: 'LISTENING' }
      ];

setInterval(function(){
        setTimeout(function(){
            user.user.setStatus('online')
        }, 500);
        setTimeout(function(){
            user.user.setStatus('dnd')
        }, 1000);
        setTimeout(function(){
            user.user.setStatus('idle')
        }, 1500);
    }, 2000) 

      let activity = 1;
      
      setInterval(() => {
        activities[2] = { name: `Members`, type: 'WATCHING' }; 
        activities[3] = { name: `A L O H A Bots Ping : 12 `, type: 'WATCHING' }; 
        activities[4] = { name: '</>' , type: 'PLAYING'}
        if (activity > 4) activity = 0;
        user.user.setActivity(activities[activity]);
        activity++;
      }, 10000);

      
      console.log(`${user.user.tag} is running on ${user.guilds.cache.size} server(s), for ${user.users.cache.size} users`);
})

// ==============================================

user.login("OTM2NjMzODE1MzU3NjA4MDQ2.YfQCNw.MNiI-ssGUesKg_jLcTMSBF4pvEM");