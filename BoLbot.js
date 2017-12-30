const Discord = require('discord.js');
const colors = require('colors');
const BoL = require("./BoL2.js");

const bol = new BoL();
const bot = new Discord.Client();

var streak = 0;
var streaker = "0";

var mancheterm=1;
var imglink;
var sol;
const token = 'MjgyODgyMDg5OTMyNjg1MzEz.C4s-Cg.t5ooXrUTMmEoW2uEM7ZNO5vM-ww';

colors.setTheme({
  custom: ['red', 'underline']
  
});

var opts = {
  maxResults: 3,
  key: 'AIzaSyC2VITW3a_LUWLkDesT9cIgXUfqo1WDiSs'
};
let prefix = "SS"
let prefix2 = "ntm "
let prefixbol = "BoL"


bot.on('message', message => {
bot.on('ready', () => {
  console.log("BoLauncher opérationnel !".custom);
  
  
bot.user.setGame("Aide : SShelp");

});

function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
                      }


                      
                            
                        
                        function randBoL(){
                            var nmroimg = getRandomInt(1,209);
                            switch (nmroimg[0]){
                                case(1) :
                                imglink=""
                                sol=""
                                break;
                                case(1) :
                                imglink=""
                                sol=""
                                break;
                                
                            }
                        }

 function date_heure(id)
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');
        j = date.getDate();
        h = date.getHours();
        if(h<10) return (h = "0"+h);
        m = date.getMinutes();
        if(m<10) return ( m = "0"+m);
        s = date.getSeconds();
        if(s<10) return (s = "0"+s) ; 
        resultat = '['+j+'/'+mois[moi]+'/'+annee+'] '+h+':'+m+':'+s;
        
        return resultat;
}

var array_msg = message.content.split(' ');
    switch (array_msg[0]) {

case (prefixbol + "start") :
    if (mancheterm == 1){
var nmroimg = getRandomInt(1,209);
imglink = bol.randimg(nmroimg);
sol = bol.solution(nmroimg);
message.channel.sendMessage("Et c'est parti pour une nouvelle partie de **Bouls of Legends** !! Voici la première image, a vous de deviner a qui cela appartient ! \n " + imglink);
mancheterm = 0;
console.log(date_heure() + " BoLstart image n°" + nmroimg + " " + message.author.username);
    }
    else if (mancheterm == 0){
        message.channel.sendMessage("Une partie est deja en cours ! L'image est celle-ci : \n " + imglink + "\n Tapez 'BoLff' pour abandonner cette partie.")
        console.log(date_heure() + " BoLstart refusé " + message.author.username);
}
break;

case (prefixbol + "help") :
    message.channel.sendMessage("Bienvenue dans **Bouls of Legends** !! Un jeu fun, intéréssant, complexe et saint d'esprit ! \n Le but de ce jeu est simple : une image de paire de meules ou de boular d'un personnagre de LoL va apparaître et le premier a deviner qui est le personnage en question et à le taper gagne la manche ! C'est aussi simple et beauf que ça :UI: \n \n __Commandes :__ \n - BoLstart : Débute une nouvelle partie de BoL. \n - BoLnext : passe a la manche suivante. \n - BoLff : Abandonne la manche en cours. \n - BoLhint : Donne un indice sur le champion en question. \n \n Quelques précisions importantes : Il faut dire tous les noms de champions en entier, on dit 'sejuani' et pas 'seju' ou 'sej' **SAUF** pour Miss Fortune ou il suffira d'écrire 'mf'. Et toutes les réponses sont en minuscules aussi ptdr. \n Enfin, le jeu est encore en cours de dev, donc si vous remarquez des bugs ou des problèmes quelconques, prévenez Tonton, de même si par exemple une photo est en trop mauvaise qualité ou en trop petit, envoyez moi un screen en mp et je le changerai. Merci les pd \n Que le plus beauf gagne !")
console.log(date_heure() + " BoLhelp " + message.author.username);


break;

case (sol) :
    if (sol!="solinit") {
        var solmaj = sol.toUpperCase();
        message.channel.sendMessage("Bravo " + message.author + " ! La réponse était : " + solmaj + ' . Tapez "BoLnext" pour débuter la prochaine manche.');
            if (message.author == streaker){
                if ((streak == 0)||(streak == -1)){
                    streak++;
                }

                else {
                    streak++;

                    if ((streak == 2)||(streak==3)||(streak==4)||(streak==5)||(streak==8)||(streak==10)||(streak==15)||(streak==20)||(streak==30)||(streak==50)||(streak==100)) {
                        
                        switch (streak[0]) {
                            case (2) :
                    message.channel.sendMessage("Double victoire d'affilée pour " + streaker + " !");
                            break;
                            case (3) :
                    message.channel.sendMessage("Trois victoires d'affilées pour " + streaker + " !");
                            case (4) :
                    message.channel.sendMessage("Et de quatre à la suite ! GG " + streaker);
                            break;
                            case (5) :
                    message.channel.sendMessage("Dans le milieu on appelle ca un Penta ! DaRekt les enfants, pwned by " +streaker);
                            break;
                            case (8) :
                    message.channel.sendMessage("8 à la suite " + streaker + ", comme la mère de Kayo !");
                            break;
                            case (10) :
                    message.channel.sendMessage("10 victoires d'affilées pour " + streaker + ", tout ca m'a l'air suspect :thinking:");
                            break;
                            case (15) :
                    message.channel.sendMessage("15 d'affilées, même la daronne de Kayo elle fatigue la...");
                            break;
                            case (20) :
                    message.channel.sendMessage("Soit il cheate sois il joue tout seul, mais en tou cas " + streaker + " est à 20 victoires d'affilées");
                            break;
                            case (30) :
                    message.channel.sendMessage("30 victoires d'affilées pour " +streaker+" !! Ce mec est un beauf de compet'");
                            break;
                            case (50) :
                    message.channel.sendMessage("50 VICTOIRES D'AFFILEES !! GG " + streaker );
                            break;
                            case (100) :
                    message.channel.sendMessage("Bon il y a clairement personne qui joue avec toi... Il faudrait peut-être aller te coucher non...?");
                            break;
                    
                        }
                    }
                    else {
                    message.channel.sendMessage(streaker + " est sur une série de " + streak + " victoires !");
                        break;
                    }
                    
                    
                        
                    
                }

            }
            else if (message.author != streaker){
                streaker = message.author;
                streak = 0;
            }
        mancheterm=1;
        streaker = message.author;
        console.log(date_heure() + " " + message.author.username + " a trouvé " + sol);
        
        sol = "solinit";
    }
break;

case (prefixbol + "next") :
if (mancheterm == 1){
    var nvonmroimg = getRandomInt(1,209);
            while (nvonmroimg==nmroimg){
                var nvonmroimg = getRandomInt(1,209);
            }
    nmroimg=nvonmroimg;
    imglink = bol.randimg(nmroimg);
    sol = bol.solution(nmroimg);
    message.channel.sendMessage("Et l'image suivante est... \n"+imglink);
    mancheterm=0;
    console.log(date_heure() + " BoLnext image n°" + nmroimg + " " + message.author.username);
break;
}
else {
    message.channel.sendMessage("La Manche précédente n'est pas finie sale pédale, essaie pas de t'enfuir " + message.author.username + ". \n Si jamais t'a encore des couilles, l'image c'est elle : \n" + imglink);
    console.log(date_heure() + " BoLnext refusé " + message.author.username);
break;
}

case (prefixbol + "ff") :
    if (mancheterm ==0){
        message.channel.sendMessage("Ok, tu abandonnes... J'ai toujours su que t'étais un fragile au fond " + message.author);
        mancheterm = 1;
        break;
    }

    else {
        break;
    }
    break;
    
    case (prefixbol + "hint") :
        if (mancheterm == 0) {
            var hint = sol.charAt(0).toUpperCase();
            message.channel.sendMessage("Bande de nullos... La première lettre est un " + hint);
            console.log(date_heure() + " BoLhint : " + hint + " " + message.author.username);
            break;
        }
        else {
            message.channel.sendMessage("Aucune partie n'est actuellement en cours, vous pouvez en lancer une en tapant *BoLstart*, ou vous pouvez aussi taper Timothée, mais ca lancera pas de partie par contre.")
            console.log(date_heure() + " BoLhint refusé " + message.author.username);
            break;
        }
        break;
    }



});

bot.login(token);