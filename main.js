const Discord = require('discord.js');
const Config = require('./config.json');
const SideBot = new Discord.Client;

const prefix = "!";

const waitingTime = 20000;


SideBot.on("message", msg =>{
    //check if author is a bot
    if(msg.author.bot) return;
    //check if message doesn't begin with prefix ! 
    if(!msg.content.startsWith(prefix));

    //get argument & command used
    const cmdBody = msg.content.slice(prefix.length);
    const args = cmdBody.split(' ');
    const cmd = args.shift().toLowerCase();

    if(cmd == "cf" || cmd == "coinflip"){
        msg.reply("I'll toss a coin. Wich side do you choose ?\n 💿 = head \n 📀 = tail ").then(sentmsg => {
            sentmsg.react('💿'); 
            sentmsg.react('📀');

            const filter = (reaction, user) => {
                return ['💿','📀'].includes(reaction.emoji.name) && user.id === msg.author.id;
            };

            sentmsg.awaitReactions(filter,{max:1, time: waitingTime,error: ['time']})
            .then(collected => {
                var array = [] ;
                for(var i = 0; i<1000; i++){
                    array.push(Math.random());
                }

                var rdval = array[Math.floor(Math.random()* Math.floor(999))];
                var tail = rdval < 0.5;
                var head = rdval > 0.5;

                const reaction = collected.first();
                if( tail && reaction.emoji.name === '📀'){
                    sentmsg.channel.send("it's tail (📀) ! Congratulations <@"+ msg.author.id +">, you won ✅ !");
                } else if (tail && reaction.emoji.name === '💿') {
                    sentmsg.channel.send("it's tail (📀) but you chose head (💿) ! You lost <@"+ msg.author.id +"> ❌!");
                } else if (head && reaction.emoji.name === '📀') {
                    sentmsg.channel.send("it's head (💿) but you chose tail (📀)! You lost <@"+ msg.author.id +"> ❌ !");
                } else if (head && reaction.emoji.name === '💿') {
                    sentmsg.channel.send("it's head (💿) ! Congragulations <@"+ msg.author.id +">, you won ✅!");
                }

            })
            .catch(collected => {
                msg.channel.send("<@"+ msg.author.id +">, you took too much time to respond or reacted with something else 😬");
            });
        }).catch(collected => {
            msg.channel.send('an error occured please try later 😄 ');
        });
        
    
    }

    if(cmd == "pf" || cmd == "pileouface"){
        msg.reply("je vais lancer une pièce. Quelle face choisissez vous ? \n 💿 = Face \n 📀 = Pile ").then(sentmsg => {
            sentmsg.react('💿'); 
            sentmsg.react('📀');

            const filter = (reaction, user) => {
                return ['💿','📀'].includes(reaction.emoji.name) && user.id === msg.author.id;
            };

            sentmsg.awaitReactions(filter,{max:1, time: waitingTime,error: ['time']})
            .then(collected => {
                var array = [] ;
                for(var i = 0; i<1000; i++){
                    array.push(Math.random());
                }

                var rdval = array[Math.floor(Math.random()* Math.floor(999))];
                var tail = rdval < 0.5;
                var head = rdval > 0.5;

                const reaction = collected.first();
                if( tail && reaction.emoji.name === '📀'){
                    sentmsg.channel.send("c'est pile (📀) ! Bravo <@"+ msg.author.id +">, vous avez gagné ✅!");
                } else if (tail && reaction.emoji.name === '💿') {
                    sentmsg.channel.send("c'est pile (📀) dommage <@"+ msg.author.id +">, vous avez choisi face (💿) ! Perdu ❌!");
                } else if (head && reaction.emoji.name === '📀') {
                    sentmsg.channel.send("c'est face (💿) mais vous avez choisi pile (📀)! Dommage <@"+ msg.author.id +">, c'est perdu ❌!");
                } else if (head && reaction.emoji.name === '💿') {
                    sentmsg.channel.send("c'est face (💿) ! Bravo <@"+ msg.author.id +">, vous avez gagné ✅!");
                }

            })
            .catch(collected => {
                msg.channel.send("<@"+ msg.author.id +">, vous avez pris trop de temps ou vous avez réagi avec quelque chose d'innatendu 😬");
            });
        }).catch(collected => {
            msg.channel.send('il y a eu une erreur ré-essayez plus tard 😄 ');
        });
        
    
    }


});

SideBot.login(Config.Token);


