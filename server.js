const Discord = require('discord.js');
const yt = require('ytdl-core');
const colors = require('colors');
const search = require('youtube-search');
const Music = require("./Music.js");
const Blagounette = require("./blagounettes.js")
const BoL = require("./BoL2.js");

const bol = new BoL();
const bot = new Discord.Client();
const music = new Music();
const blagounette = new Blagounette();
var welcome = 0;
const msqtrds = 183267038863556618;

var streak = -1;
var streaker = "0";
var chloé = 0;
var mancheterm=1;
var imglink;
var sol;
const token = 'MjgyODgyMDg5OTMyNjg1MzEz.C4s-Cg.t5ooXrUTMmEoW2uEM7ZNO5vM-ww';

colors.setTheme({
  custom: ['red', 'underline']
  
});
colors.setTheme({
  blague: ['green']
});

colors.setTheme({
  dis: ['blue']
});

var opts = {
  maxResults: 3,
  key: 'AIzaSyC2VITW3a_LUWLkDesT9cIgXUfqo1WDiSs'
};
let prefix = "SS"
let prefix2 = "ntm "
let prefixbol = "BoL"
bot.on('ready', () => {
  console.log("Comment puis-je vous être utile ?".custom);
  
  
bot.user.setGame("Aide : SShelp");

});
            
                      function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
                      }


                      function lotterie(numero,mise,tire) {
                       
                        
                        
                        if(tire == numero) {
                           var somme = 0
                           var somme = 2*mise
                        } 
                        if(tire != numero) {
                            var perte = 0
                            var perte = mise
                            }
                            return Math.floor(somme-perte);
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





bot.on('message', message => {
    if(welcome==0) {
    // msqtrds.sendMessage("Salut a tous les amis c'est David Lafarge Pokémon !!!!");
    welcome = 1;
}
    bot.user.setGame("Aide : SShelp");
 
   
 if ((message.author.id=="388762716401172483") && (chloé==1)){
     var tg = getRandomInt(1,12);
     if (tg==1) return (message.channel.sendMessage("Ta gueule, femme."))
     if (tg==2) return (message.channel.sendMessage("On demande la permission à un homme avant de prendre la parole, femme."))
     if (tg==3) return (message.channel.sendMessage("Apporte moi ma bière au lieu de dire des conneries, femme."))
     if (tg==4) return (message.channel.sendMessage("Depuis quand un femme peut prendre la parole seule ?"))
     if (tg==5) return (message.channel.sendMessage("Tu pourra parler quand tu aura des couilles, femme."))
     if (tg==6) return (message.channel.sendMessage("Qui a apporté une femelle içi putain ?"))
     if (tg==7) return (message.channel.sendMessage("Hop hop hop à la cuisine, femme."))
     if (tg==8) return (message.channel.sendMessage("Tu devrais avoir les doigts sur un manche a balais au lieu des touches de ton clavier, femme."))
     if (tg==9) return (message.channel.sendMessage("T'es pas censée être avec tes copines à glousser ou avec les gosses toi ?"))
     if (tg==10) return (message.channel.sendMessage("Rien de pire qu'une femme qui ouvre sa gueule... A part deux, peut être."))
     if (tg==11) return (message.channel.sendMessage("Laisse parler les hommes, femme. Ca nous évitera de perdre du temps."))
     if (tg==12) return (message.channel.sendMessage("Ca c'est bien un truc de femelle ça, c'est pas pour rien que vous êtes inutiles."))
     console.log(date_heure() + " chloé " + tg);
 }
    
    var array_msg = message.content.split(' ');
    switch (array_msg[0]) {

        case ("Heinz,rejoins") :
            const channel2 = message.member.voiceChannel;
            channel2.join()
            console.log(date_heure() + " | join " + message.author.username + " " + channel2);

break;

   

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

case ("INITIALISATION") :
message.author.note = "100";
console.log(message.author + "done");
break;


      



            

            // B o L

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

                    if ((streak != 2)||(streak!=3)||(streak!=4)||(streak!=5)||(streak!=8)||(streak!=10)||(streak!=15)||(streak!=20)||(streak!=30)||(streak!=50)||(streak!=100)) {
                        message.channel.sendMessage(streaker + " est sur une série de " + streak + " victoires !");
                    }
                    else {
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








case (prefix + "mute") :
var time = message.content.split(' ');
var auteur = message.author;
var roles = message.author.roles
if (((roles[0] == 260474201595576320) && time[0] != "Heinz")) {
    var timer1 = getTime();
    message.channel.sendMessage(time);
     message.channel.sendMessage("Ok" + parseInt(roles[0]));
}

else return message.channel.sendMessage("Non : " + parseInt(roles[0]));

break;


case ("algo") :
var k = message.content.split(' ');
            k.shift();
           // k = link.join(' ');
var u = 1;
var n = 1;
var v = 1;

while (n<k){
w = 2*u+(v-u);
u=v;
v=w;
n=n+1;
}
message.channel.sendMessage("Résultat : "+u);
break;

    case (prefix + "lotterie") :
    var tire = getRandomInt(0,9);
    var numise = parseInt(message.content.split(' '));
   var gain = lotterie(numise[0],numise[1],tire);

var compte = parseInt(message.author.note);
var compte2 = compte+gain;
message.author.note = compte2.toString();
message.reply("Le numéro tiré est le numéro : " + tire + "\n Votre nouveau solde est de : " + message.author.note);
break;




case (prefix + "chloé") :
    if ((message.author.id=="175372707959930880")||(message.author.id=="231483935740264471")||(message.author.id=="182861629497671680")||(message.author.id=="194445721787826176")||(message.author.id=="156489769277194240")){
        if (chloé==1){
            chloé=0; 
            message.channel.sendMessage("Désormais les femmes ne méritent même plus qu'on les insulte.");
             (console.log(date_heure()+" switch chloé 1>0 " + message.author.username));
             break;
        }
        if (chloé==0){
            chloé=1; 
            message.channel.sendMessage("Mode Sexiste Enabled.");
             (console.log(date_heure()+" switch chloé 0>1 " + message.author.username));
             break;
        }
    }
break;






    case (prefix + "solde") : 
    message.channel.sendMessage("Votre solde, " + message.author + " est de : " + message.author.note);
    break;

case ("t") :
message.channel.sendMessage("Ok.");
 console.log(date_heure() + " | t ".custom + message.author.username);
break;

case (prefix + "heure") :
message.channel.sendMessage(message.author);
message.channel.sendMessage(date_heure());
break;

    

case("pierre") :
var rand = getRandomInt(1,4);
if(rand == 1) {
    message.reply("Pierre, égalité.");
    console.log(date_heure() + " | pierre " + message.author.username + " draw");
    } 
if(rand == 2) {
    message.reply("Feuille, j'ai gagné.");
    console.log(date_heure() + " | pierre " + message.author.username + " bot win");
    } 
if(rand == 3) {
    message.reply("Ciseaux, j'ai perdu.");
    console.log(date_heure() + " | pierre " + message.author.username + " bot lose");
    } 
break;

case("feuille") :
var rand = getRandomInt(1,4);
if(rand == 1) {
    message.reply("Pierre, j'ai perdu.");
    console.log(date_heure() + " | feuille " + message.author.username + " bot lose");
    }   
if(rand == 2) {
    message.reply("Feuille, égalité.");
    console.log(date_heure() + " | feuille " + message.author.username + " draw");
    } 
if(rand == 3) {
    message.reply("Ciseaux, j'ai gagné.");
    console.log(date_heure() + " | feuille " + message.author.username + " bot win");
    } 
break;

case("ciseaux") :
var rand = getRandomInt(1,4);
if(rand == 1) {
    message.reply("Pierre, j'ai gagné.");
    console.log(date_heure() + " | ciseaux " + message.author.username + " bot win");
    } 
if(rand == 2) {
    message.reply("Feuille, j'ai perdu.");
    console.log(date_heure() + " | ciseaux " + message.author.username + " bot lose");
    } 
if(rand == 3) { 
    message.reply("Ciseaux, égalité.");
    console.log(date_heure() + " | ciseaux " + message.author.username + " draw");
    } 
break;

case (prefix + "oler") :
    message.channel.sendMessage("On peut dire... QUE TU ES TOMBÉ DANS LE PANNEAU");
     console.log(date_heure() + " | SSoler " + message.author.username);
break;



case (prefix + "carambar") :
//var rand = getRandomInt(1,77);
//blagounette.blague(rand);
      var rand = getRandomInt(1,77);
                    console.log((date_heure() + " | carambar " + message.author.username + " blague n°" + rand).blague); 
                if(rand == 1){
                    message.channel.sendMessage("Que font deux plantes qui se rencontrent ?");
                    message.channel.sendMessage("Elles vont prendre un pot !");
                }
                 if(rand == 2){
                    message.channel.sendMessage("Pourquoi met-on le journal au frigo ?");
                    message.channel.sendMessage("Pour avoir des nouvelles fraîches !");
                }
                 if(rand == 3){
                    message.channel.sendMessage("Quel est le comble pour un dentiste ?");
                    message.channel.sendMessage("Habiter dans un palais !");
                }
                 if(rand == 4){
                    message.channel.sendMessage("Deux biscottes discutent \n -Je suis champion olympique \n -Ah oui, dans quel sport ?");
                    message.channel.sendMessage("-Le 110 miettes haies !");
                }
                 if(rand == 5){
                    message.channel.sendMessage("Un escargot se confie à un autre : \n -Hier j'ai essayé d'embrasser une limace ! \n -Et alors ?");
                    message.channel.sendMessage("-Bah j'en ai bavé !");
                }
                 if(rand == 6){
                    message.channel.sendMessage("Quel super-héros donne le plus vite l'heure ?");
                    message.channel.sendMessage("Speed heure-man !");
                }
                 if(rand == 7){
                    message.channel.sendMessage("(Blague spéciale pour le chauve) \n Un client à son coiffeur : \n -Je perds mes cheveux... Que faire me conseillez-vous pour les conserver ?");
                    message.channel.sendMessage("-Une petite boîte !");
                }
                 if(rand == 8){
                    message.channel.sendMessage("Quel est le jeu préféré des poissons ?");
                    message.channel.sendMessage("Carpe ou pas carpe !");
                }
                 if(rand == 9){
                    message.channel.sendMessage("Quel est le sport le plus silencieux ?");
                    message.channel.sendMessage("Le para-chuuut...");
                }
                 if(rand == 10){
                    message.channel.sendMessage("Un dentiste reconduit son patient : \n -La prochaine fois, mangez du mouton ! \n -Pourquoi donc ?");
                    message.channel.sendMessage("-Pour avoir l'haleine fraîche !");
                }
                 if(rand == 11){
                    message.channel.sendMessage("Pourquoi le taureau est-il triste ?");
                    message.channel.sendMessage("Parce que sa femme est vache avec lui !");
                }
                 if(rand == 12){
                    message.channel.sendMessage("Quel est le comble pour un joueur de pétanque ?");
                    message.channel.sendMessage("C'est de perdre la boule !");
                }
                 if(rand == 13){
                    message.channel.sendMessage("Deux cactus discutent : \n -Tu sais parler l'humain ?");
                    message.channel.sendMessage("-Oui, c'est simple, ils disent toujours 'Aïe' !");
                }
                 if(rand == 14){
                    message.channel.sendMessage("Pourquoi les fous marchent-ils sur les tuyaux d'eau ?");
                    message.channel.sendMessage("Pour avoir de l'eau plate !");
                }
                 if(rand == 15){
                    message.channel.sendMessage("Comment appelle-t-on un chat très surprenant ?");
                    message.channel.sendMessage("Un chat alors !");
                }
                 if(rand == 16){
                    message.channel.sendMessage("-D'ou viennent les pommes ? \n -Des pommiers ! \n -Et les dattes ?");
                    message.channel.sendMessage("-Des calendriers !");
                }
                 if(rand == 17){
                    message.channel.sendMessage("Comment s'appelle la maison des esquimaux ?");
                    message.channel.sendMessage("Le congélateur !");
                }
                 if(rand == 18){
                    message.channel.sendMessage("A quoi servent les portefeuilles imperméables ?");
                    message.channel.sendMessage("A y mettre de l'argent liquide !");
                }
                 if(rand == 19){
                    message.channel.sendMessage("Quel est le comble pour un morceau d'emmental ?");
                    message.channel.sendMessage("Avoir un trou de mémoire !");
                }
                 if(rand == 20){
                    message.channel.sendMessage("Quel est le comble pour un poulpe ?");
                    message.channel.sendMessage("C'est de se faire un sang d'encre !");
                }
                 if(rand == 21){
                    message.channel.sendMessage("Que lisent les kangourous ?");
                    message.channel.sendMessage("Un livre de poche !");
                }
                 if(rand == 22){
                    message.channel.sendMessage("Quel est le comble pour un professeur de musique ?");
                    message.channel.sendMessage("Mettre des mauvaises notes !");
                }
                 if(rand == 23){
                    message.channel.sendMessage("Quel poisson n'a pas de certificat de naissance ?");
                    message.channel.sendMessage("Le poisson pané !");
                }
                 if(rand == 24){
                    message.channel.sendMessage("Pourquoi les chercheurs ont-ils des trous de mémoire ?");
                    message.channel.sendMessage("Parce qu'ils se creusent la tête !");
                }
                 if(rand == 25){
                    message.channel.sendMessage("-Docteur, je perds la mémoire ! \n -Depuis quand ?");
                    message.channel.sendMessage("-Depuis quand quoi ?");
                }
                 if(rand == 26){
                    message.channel.sendMessage("Qu'es ce que dix pommes à un match de basket ?");
                    message.channel.sendMessage("Les pom-pom girls !");
                }
                 if(rand == 27){
                    message.channel.sendMessage("Deux bonbons marchent sur la route,un policier les arrête :");
                    message.channel.sendMessage("-Papiers s'il vous plaît");
                }
                 if(rand == 28){
                    message.channel.sendMessage("Quel est le comble pour un petit pois ?");
                    message.channel.sendMessage("C'est d'être vert de rage de ne pas pouvoir aller en boîte !");
                }
                 if(rand == 29){
                    message.channel.sendMessage("Quelles sont les lettres les moins visibles ?");
                    message.channel.sendMessage("F, A, C");
                }
                 if(rand == 30){
                    message.channel.sendMessage("Pourquoi ne faut-il pas faire de la peine à un bonhomme de neige ?");
                    message.channel.sendMessage("Parce qu'il risque de fondre en larmes !");
                }
                 if(rand == 31){
                    message.channel.sendMessage("Mon humour est tellement noir qu'il touche les allocs.");
                }
                 if(rand == 32){
                    message.channel.sendMessage("Quelle est la différence entre un juif et une pizza ?");
                    message.channel.sendMessage("Le temps de cuisson.");
                }
                 if(rand == 33){
                    message.channel.sendMessage("Que fait un oiseau en passant au dessus d'un camp d'éxtermination ?");
                    message.channel.sendMessage("Il fait 'Cui cui' !");
                }
                 if(rand == 34){
                    message.channel.sendMessage("Pourquoi la petite fille tombe-elle de la balançoire ?");
                    message.channel.sendMessage("Parce qu'elle n'a pas de bras !");
                }
                 if(rand == 35){
                    message.channel.sendMessage("C'est l'histoire d'une blonde qui voulait jouer à la roulette russe avec un Beretta 9mm...");
                
                }
                if(rand == 36){
                    message.channel.sendMessage("C'est l'histoire d'une petite fille aveugle. Elle est non-voyante depuis la naissance. Un jour ses parents lui disent : \n  - Nous avons trouvé le remède miracle ! Cest de la pommade que tu t'appliques sur les yeux avant de dormir et le lendemain matin tu verras le monde ! \n La petite se lève le matin en pleurs. Elle est toujours aveugle... Là, ses parents lui disent en coeur : ");
                    message.channel.sendMessage("Poisson d'avril !");
                }
                  if(rand == 37){
                    message.channel.sendMessage("Qu'es ce qui a deux pattes et qui saigne ?");
                    message.channel.sendMessage("Un demi chien.");
                }
                if(rand == 38){
                    message.channel.sendMessage("Pourquoi les écolos aiment-ils bien les lépreux ?");
                    message.channel.sendMessage("Parce qu'ils sont biodégradables.");
                }
                 if(rand == 39){
                    message.channel.sendMessage("C'est deux copains qui parlent ensemble : \n - Tu sais, ma femme refuse de me faire des fellations.... histoire de goût qu'elle dit. \n - Alors, moi, pour ça, j'ai une solution. Tu t'enduis le principal de Nutella, et comme ça, plus de problème. \n Quelques jours passent. \n - Alors, ça a donne quoi, le Nutella ? ");
                    message.channel.sendMessage("- Ben pour ma femme, pas de changement. Par contre, les enfants ont adoré.");
                }
                   if(rand == 40){
                    message.channel.sendMessage("- Maman, maman pourquoi tu gémis?  ");
                    message.channel.sendMessage("- Tais toi et lèche!");
                }
                   if(rand == 41){
                    message.channel.sendMessage("Une fille à son frère : \n - Tu sais que tu fais l'amour beaucoup mieux que papa ?");
                    message.channel.sendMessage("- Je sais : maman me l'a déjà dit... ");
                }
                   if(rand == 42){
                    message.channel.sendMessage("- Papa j'aime pas grand mère... ");
                    message.channel.sendMessage("- Bah laisse-là sur le bord de l'assiette.");
                }
                    if(rand == 43){
                    message.channel.sendMessage("A la maternité un nouveau père, inquiet, demande à la sage-femme: \n - Trouvez-vous que mon fils me ressemble ? \n - Oui, mais c'est pas grave, l'essentiel c'est qu'il soit en bonne santé !");
                }

                    if(rand == 44){
                    message.channel.sendMessage("Qu'est-ce qui est vert, dans la forêt et qui pue ?");
                    message.channel.sendMessage("Un scout mort");
                }
                    if(rand == 45){
                    message.channel.sendMessage("Quelle est la différence entre Zinedine Zidane et Lady Di ? \n Zinedine Zidane c'est : Accélération, petit pont, but ! \n Lady Di, c'est : Accélération, grand pont, poteau.");
                }
                    if(rand == 46){
                    message.channel.sendMessage("Qu'est-ce qui est tout bleu, très haut et qui sent plus rien ? \n Un alpiniste au fond d'une crevasse dans le massif du Mont-Blanc");
                }
                    if(rand == 47){
                    message.channel.sendMessage("- Papa, pourquoi maman elle courre en zigzag ? \n - Ta gueule p'tit con, et passes-moi les cartouches !");
                }
                    if(rand == 48){
                    message.channel.sendMessage("Qu'est-ce qui a 4 pattes et un bras ? \n Un pitbull dans un jardin d'enfants.");
                }
                    if(rand == 49){
                    message.channel.sendMessage("Qu'est-ce qui est rouge et attendrissant ? \n Un bébé qui suce un cutter...");
                }
                    if(rand == 51){
                    message.channel.sendMessage("Un gamin, perpétuellement inquiet, demande à ses parents : \n - Est-ce que j'ai été adopté ? \n - Pas encore. Nous n'avons mis l'annonce qu'hier !");
                }
                    if(rand == 52){
                    message.channel.sendMessage("- Deux mendiants à Paris, un roumain et un algérien. \n Le roumain finit sa journée avec des pièces et l'algérien avec pleins de billets de 10 euros. \n Le roumain : \n - Comment tu as fait ?? \n L'algérien : \n - Qu'est ce qu'il y a écrit sur ton panneau ? \n Le roumain : \n - J'ai faim, j'ai rien mangé, j'ai des enfants etc... \n L'algérien : \n - Ah! tu es con toi, moi sur la mienne j'ai écris : \n Il me manque 10 euros pour rentrer en Algérie.");
                }
                    if(rand == 53){
                    message.channel.sendMessage("Une fille part en voyage de classe, le quatrième jours elle envoie un SMS à son frère \n -Coucou mon frère adoré déjà quatre jours que je suis en voyage tu me manques ! \n -Moi aussi! ça cest bien passé depuis ton départ ? \n -Ben à part qu'on avait \n plus de réseau les deux premiers jours, ça va...Tout va bien chez nous ? \n -Aille non. Premièrement le chat est mort. -QUOI! Oh merde... Tu aurais pu me l'annoncer autrement. Doucement, genre il se promenait sur le bord du balcon et... Bref. Et maman , elle va bien ? \n \n -Elle se promenait sur le bord du balcon...");
                }
                    if(rand == 54){
                    message.channel.sendMessage("FAITS DIVERS : \n Un farceur impénitent, malade et se sachant condamné, vient d'avaler deux kilos de maïs, juste avant de mourir, dans le but de mettre l'ambiance au crématorium.");                }
                    if(rand == 55){
                    message.channel.sendMessage("La différence entre un Juif et un scoute ? \n Le scoute il revient du camp.");
                }
                    if(rand == 56){
                    message.channel.sendMessage("Le fils cadet demande à son père : \n Papa, c'est quoi la différence entre hypothétiquement et réellement ? -Viens t'asseoir, mon fils, je vais te parler. \n Le père se tourne vers sa femme : \n -Chérie, dormirais-tu avec Tom Cruise pour 1 millions \n d'euros ? -Mais bien sur ! Je ne gaspillerais jamais une telle opportunité ! \n Maintenant, le père se tourne vers sa fille aînée : \n -Ma fille, dormirais-tu avec Tom Cruise pour 1 millions d'euros ? \n -OUIII ! C'est le gars de mes rêves ! \n Maintenant, le père se retourne vers son autre fils, l'aîné : \n -Et toi, fiston, le ferais-tu ? \n -Pourquoi pas ? Imagine tout ce que je pourrais faire avec cet argent ! \n Alors papa se tourne vers son fils cadet et lui dit : \n -Alors, vois-tu, fiston, hypothétiquement nous sommes ici avec 3 millionnaires, mais réellement, nous sommes ici avec 2 sales putes et un bâtard de gay !");
                }
                    if(rand == 57){
                    message.channel.sendMessage("-Cher père noël je voudrais une petite soeur \n -Pas de soucis amenes moi ta mere.");
                }
                    if(rand == 58){
                    message.channel.sendMessage("Hitler se rend à Auschwitz et va voir une petite fille : \n -Bonjour ma petite, quel âge as-tu ? \n -J'aurai 8 ans demain ! \n -C'est bien d'être optimiste.");
                }
                    if(rand == 59){
                    message.channel.sendMessage("Qu'est ce qui plait à 9 personnes sur 10 ? \n Un viol collectif !");
                }
                    if(rand == 60){
                    message.channel.sendMessage("Un noir dit : \n -J'ai fais un plat traditionnel de mon pays \n Sa femme lui répond : \n -Il n'y a rien dans l'assiette \n Et ?");
                }
                    if(rand == 61){
                    message.channel.sendMessage("Fille : Papa, tu penses quoi de l'avortement ? \n Père : Demande à ta soeur ! \n Fille : Mais papa, je n'ai pas de...");
                }
                    if(rand == 62){
                    message.channel.sendMessage("Comment la femme d'Hitler est-elle morte ? \n Elle s'est trompée de douche.");
                }
                    if(rand == 63){
                    message.channel.sendMessage("Comment Hitler est-il mort ? \n En voyant la facture de gaz.");
                }
                    if(rand == 64){
                    message.channel.sendMessage("Le matin de Noël deux frères se précipitent au pied du sapin pour ouvrir leurs cadeaux. Mais le premier a beaucoup plus de cadeaux que le second et le taquine : \n -Ahah moi j'ai pleins de cadeaux ! \n Et le deuxième répond : \n -Ahah moi j'ai pas le cancer !!!");
                }
                    if(rand == 64){
                    message.channel.sendMessage("Que faisait les parents de Gilbert Montagne pour le punir ? \n Il déplaçaient les meubles.");
                }
                    if(rand == 65){
                    message.channel.sendMessage("Savez vous la différence entre Jésus et une photo de Jésus ? \n La photo de Jésus ne prend qu'un seul clou pour l'accrocher.");
                }
                    if(rand == 66){
                    message.channel.sendMessage("Deux chasseurs traquent le sanglier en fôret lorsque l'un deux s'effondre brutalement. Probablement victime d'une crise cardiaque, il a cessé de respirer. L'autre chasseur appelle le SAMU : \n -Mon ami est mort ! Qu'est-ce que je dois faire ? \n L'urgentiste essaie de le calmer: Ne paniquez pas je vais vous aider a distance. Tout d'abord, il faut vous assurer qu'il est bien mort. \n Quelques secondes de silence, puis un coup de feu. Le chasseur reprend le téléphone : \n -C'est fait ! Et maintenant ?");
                }
                    if(rand == 67){
                    message.channel.sendMessage("-Mon grand-père est mort à Auschwitz... \n -Mais c'est horrible !! \n -Oui, il est tombé du mirador... \n cc @Quentoch#5995 ;)");
                }
                    if(rand == 68){
                    message.channel.sendMessage("Un Homme marche dans la rue, et tout à coup, il croise un aveugle et lui donne une grosse baffe \n Et il lui dit : \n - Ah !! Tu l'as pas vue venir hein, celle là !");
                }
                    if(rand == 69){
                    message.channel.sendMessage("C'est un gars au chomage qui habite dans un petit appartement pourri qui regarde le tirage du Loto à la télé. Il se rend alors compte que ses numéros sont bons !!! Il est super content il saute partout dans son appartement : \n - Oh putain ! Oh la putain de bonne journée ! La putain de bonne journée !!! \n Il ouvre la fenêtre pour respirer et voit sa femme sur le trottoir d'en face qui revient du marché. Elle est plus que laide, elle est grosse, elle a presque de la moustache et elle a les chevilles toutes enflées à force de faire chaque jour l'allé-retour jusq'au marché à pieds avec des sacs très lourds. \n Il lui crie depuis la fenêtre : \n -Eh oh, chérie, on a gagnés au Loto !!! \n Elle est tellement contente qu'elle laisse tomber ses sacs et traverse la route en courant. Là un camion passe et **PAF** !!! \n -Oh la putain de bonne journéééée !!!!!!");
                }
                    if(rand == 70){
                    message.channel.sendMessage("- Papa comment on fait les enfants ? \n - Viens dans ma chambre je vais te montrer");
                }
                    if(rand == 71){
                    message.channel.sendMessage("Où trouve t-on des tétraplégiques ? \n Là où on les a laissé.");
                }
                    if(rand == 72){
                    message.channel.sendMessage("Que faire si tu trouves un épileptique en crise dans sa baignoire ? \n  Tu mets de la lessive et ton linge.");
                }
                    if(rand == 73){
                    message.channel.sendMessage("Sur quel côté retombe un bébé lancer en l'air ? \n Je l'aurais su si j'avais éteint mon ventilateur plafonier...");
                }
                    if(rand == 74){
                    message.channel.sendMessage("Qu'est-ce qu'un homosexuel sur un vélo ? \n Une troisième pédale.");
                }
                    if(rand == 75){
                    message.channel.sendMessage("Comment appelle t-on un boomerang poilu qui ne revient pas ? \n Un chat mort.");
                }
                    if(rand == 76){
                    message.channel.sendMessage("Qui a inventé la catapulte ? \n Un lépreux qui a fait un bras d'honneur.");
                }
                    if(rand == 77){
                    message.channel.sendMessage("Les bonnes mamans te laisse lecher le batteur \n Les meilleures mamans l'éteignent d'abord.");
                }
                    



            break;
       
       case ("Heinz?") :
            message.channel.sendMessage("Comment puis-je vous être utile Monsieur ?");
            console.log(date_heure() + " | Heinz? " + message.author.username);
            break;

       case ("enculé") :
            message.channel.sendMessage("Deja tu va commencer par fermer ta grande gueule de fdp de tes morts");
            console.log(date_heure() + " | enculé " + message.author.username);
            break;

        case (prefix + "ping")  :
            message.channel.sendMessage("Pong.");
            console.log(date_heure() + " | ping " + message.author.username);
            break;

      /*  case (prefix + "qui-est") :
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            console.log(date_heure() + " | qui est " + link + " " + message.author.username); 
            if (User.link.bot()) return message.reply("Cette personne n'est qu'un simple majordome Monsieur.")
            else {
            message.channel.sendMessage("Nom :" + link); 
                 message.channel.sendMessage("ID Discord : " + user.link.id);
                 message.channel.sendMessage("Avatar : " + user.link.avatarURL);
                 message.channel.sendMessage("Crée le : " + user.link.createdAt);
                 message.channel.sendMessage("Il y a " + user.link.createdTimestamp);
                 message.channel.sendMessage("Email : " + user.link.email);
            if (user.link.presence()) return message.channel.sendMessage("Cette personne n'est pas connectée.");
            else message.channel.sendMessage("Cette personne est connectée."); 
            }
            break;*/

        case ("Heinz,quoi") :
            message.channel.sendMessage("Feur, Monsieur.");
            console.log(date_heure() + " | Heinz,quoi " + message.author.username); 
            break;
        case (prefix + "mid") :
            message.channel.sendMessage("MAIS QUE D'HUMOUR PUTAIN QU'EST CE QU'ON SE MARRE JPP");
            console.log(date_heure() + " | SSmid " + message.author.username); 
            break;
        case (prefix + "g") :
            message.channel.sendMessage(":faker: *Faker en pls* :pls:");
            console.log(date_heure() + " | SSg " + message.author.username); 
            break;

        case ("Heinz") :
        var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
                if (link == "tg"){
        console.log(date_heure() + " | Heinz tg " + message.author.username); 
        if ((message.author) == ("Paulort")) return message.reply("Grmlblgmr... Mon maître m'a dit de ne pas vous manquer de respect, alors veuillez s'il vous plaît vous taire en premier, Monsieur.")
            message.channel.sendMessage("@MrAntex Monsieuuuuuuuur !! Il m'a dit tgggggg !!");
                }
                if ((link == "") && ((message.author.id) == ("175372707959930880"))&& (message.author.bot) == (false)){
                      return message.channel.sendMessage("Je suis là, Maître.")+(console.log(date_heure() + " | Heinz " + message.author.username));
                }
                if ((link == "") && ((message.author.id) != ("175372707959930880"))&& (message.author.bot) == (false)){
                    return message.channel.sendMessage("C'est moi.")+(console.log(date_heure() + " | Heinz " + message.author.username));
            }
            break;


         case ("au") :
        var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
                if (link == "revoir"){
                        message.channel.sendMessage("A plus " + message.author + " !");
                        console.log(date_heure() + " | au revoir " + message.author.username);
                }
                break;

            
            case ("bonne") :
        var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
                if (link == "nuit"){
                        message.channel.sendMessage("Fais de beaux rêves " + message.author + " ! :heart:");
                        console.log(date_heure() + " | bonne nuit " + message.author.username);
                }
                break;

        case ("Heinz,123") :
            message.channel.sendMessage("Soleil, Monsieur.");
            console.log(date_heure() + " | Heinz,123 " + message.author.username);
            break; 
            case ("Heinz,ketchup") :
            message.reply("Tu mériterais un aller simple en Pologne pour cette blague.");
            console.log(date_heure() + " | Heinz,ketchup " + message.author.username);
            break;
      
            case ("c'est") :

            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
                if (link=="qui")
                {
                    message.channel.sendMessage("Ta Mère.");
                    console.log(date_heure() + " | c'est qui " + message.author.username);
                }
                
            
            break;
            case (prefix + "alope") :
            message.channel.sendMessage("Ta mère a autant de vertus que tu as d'humour. Non ceci n'est absolument pas un compliment, enfant de viol.")
            console.log(date_heure() + " | SSalope " + message.author.username);
            break;

            case(prefix + "cloé") :
            message.channel.sendMessage("Commande inconnue. Essayez avec l'orthographe suivante : SSménage.");
            console.log(date_heure() + " | SScloé " + message.author.username);
            break;

            case(prefix + "ménage") :
            message.channel.sendMessage("Chloééééé, on a du boulot pour ~~ton espèce~~ toi !");
            console.log(date_heure() + " | SSménage " + message.author.username);
            break;

            case("gg") :
            message.channel.sendMessage(":clap:");
            console.log(date_heure() + " | gg " + message.author.username);
            break;

            case("wp") :
            message.channel.sendMessage(":gg:");
            console.log(date_heure() + " | wp " + message.author.username);
            break;

            case(prefix + "peppa") :
            message.channel.sendMessage("https://www.youtube.com/watch?v=YK24A66eaz4");
            console.log(date_heure() + " | peppa " + message.author.username);
            break;

            case(prefix + "uce") :
            message.channel.sendMessage("Vous avez demandé le ChloéService ? Veuillez contacter Chloé directement via mp ou pornhub. \n        Tarifs : \n - 1 pipe : 1 mars \n - 1 totale : 2 mars et une éponge \n - Fantasmes gratuits si elle est soumise.");
            console.log(date_heure() + " | SSuce " + message.author.username);
            break;

            case ("dis") :

            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            
                if (link=="camion")
                {
                    message.channel.sendMessage("*POUET POUET*");
                    console.log(date_heure() + " | dis camion " + message.author.username);
                }
                 else if (link.includes("dis"))
                {
                    message.reply("Nique ta daronne.");
                    console.log(date_heure() + " | dis dis " + message.author.username);
                }
                 else if (link.toLowerCase().includes("cloé"))
                {
                    message.reply("Pute.");
                    console.log(date_heure() + " | dis cloé " + message.author.username);
                }
                else {
            message.delete(message.author);
            message.channel.sendMessage(link);
            console.log(date_heure() + " | dis " + link + " " + message.author.username);
            break;
                }

        case (message.content) : 
             var str = (message.content);
           

                   
                    
        if (((str.includes("chameau"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère le chameau.")+ (console.log(date_heure() + " | chameau " + message.author.username));
         if (((str.includes("loutre"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la loutre.")+(console.log(date_heure() + " | loutre " + message.author.username));
          if (((str.includes("langouste"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la langouste.")+(console.log(date_heure() + " | langouste " + message.author.username))
           if (((str.includes("pute"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la pute.")+(console.log(date_heure() + " | pute " + message.author.username));
            if (((str.includes("putain"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la putain.")+(console.log(date_heure() + " | putain " + message.author.username));
             if (((str.includes("chienne"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la chienne.")+(console.log(date_heure() + " | chienne " + message.author.username));
              if (((str.includes("tabouret"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ton père le tabouret.")+(console.log(date_heure() + " | tabouret " + message.author.username));
               if (((str.includes("licorne"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère que j'encorne.")+(console.log(date_heure() + " | licorne " + message.author.username));
                if (((str.includes("salope"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère la salope.")+(console.log(date_heure() + " | salope " + message.author.username));
                 if (((str.includes("gougnafier"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Serait-ce de votre géniteur que vous parliâtes ?")+(console.log(date_heure() + " | gougnafier " + message.author.username));
                  if (((str.includes("qzdrgyjilpmokuhtfesa"))) && (message.author.bot) == (false)) return message.channel.sendMessage("EEEEEEEEEEEEEEEEEEEEHHH MACARENA")+(console.log(date_heure() + " | macarena " + message.author.username));
                   if (((str.includes("poulpe"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta mère le poulpe.")+(console.log(date_heure() + " | pouple " + message.author.username));
                    if (((str==("ah"))||(str==("Ah"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Laouakbar")+(console.log(date_heure() + " | alaouakbar " + message.author.username));
                    if (((str.toLowerCase().includes("mais"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Zon")+(console.log(date_heure() + " | maizon " + message.author.username));
                    if (((str.toLowerCase().includes("comment"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Taire")+(console.log(date_heure() + " | comment " + message.author.username));

                    if (((str.toLowerCase().includes("quoi"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Feur")+(console.log(date_heure() + " | quoi " + message.author.username));
                     if (((str.includes("123"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Soleil")+(console.log(date_heure() + " | 123 " + message.author.username));
                      if (((str.toLowerCase()==("oui"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Stiti")+(console.log(date_heure() + " | oui " + message.author.username));
                       if (((str.includes("ouais"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Stern")+(console.log(date_heure() + " | ouais " + message.author.username));
                       
                        if (((str.includes("non"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Bril")+(console.log(date_heure() + " | non " + message.author.username));
                         if (((str.toLowerCase()==("tg"))) && (message.author.bot) == (false)){
                             (console.log(date_heure() + " | tg " + message.author.username));
                                if ((message.author.id) == ("182861629497671680")) return message.channel.sendMessage("Grmlblgmr... Mon maître m'a dit de ne pas vous manquer de respect, alors veuillez s'il vous plaît vous taire en premier, Monsieur.");
                                if ((message.author.id) == ("175372707959930880")) return message.channel.sendMessage("Oui Monsieur, tout de suite Monsieur.");
                                return message.reply("Toi ta gueule");
                         } 
                          if (((str.toLowerCase().startsWith("Bonsoir"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Bonsoir, " + message.author)+(console.log(date_heure() + " | bonsoir " + message.author.username));
                           if (((str.startsWith("stp"))) && (message.author.bot) == (false)) return message.channel.sendMessage("On dit S'il te plaît quand on est poli, enculé.")+(console.log(date_heure() + " | stp " + message.author.username));

                           if (((str.toLowerCase().startsWith("salut"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Hey, " + message.author)+(console.log(date_heure() + " | salut " + message.author.username));
                            if (((str.toLowerCase().startsWith("slt"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Salut, " + message.author)+(console.log(date_heure() + " | slt " + message.author.username));
                             if (((str.toLowerCase().startsWith("bonjour"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Bonjour, " + message.author)+(console.log(date_heure() + " | bonjour " + message.author.username));
                             if (((str.toLowerCase().startsWith("bonsoir"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Bonsoir, " + message.author)+(console.log(date_heure() + " | bonsoir " + message.author.username));
                             if (((str.toLowerCase().startsWith("wesh"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Wesh, bien ou bien frr ? " + message.author)+(console.log(date_heure() + " | wesh " + message.author.username));
                             if (((str.toLowerCase().startsWith("coucou"))) && (message.author.bot) == (false)) return message.channel.sendMessage( message.author + "https://www.tenor.co/RTZo.gif ")+(console.log(date_heure() + " | coucou " + message.author.username));

                              if (((str.toLowerCase().startsWith("yo"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Wesh " + message.author)+(console.log(date_heure() + " | yo " + message.author.username));
                               if (((str.toLowerCase().startsWith("yop"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Lait, " + message.author)+(console.log(date_heure() + " | yop " + message.author.username));
                                if (str.startsWith(prefix + "help")) return message.channel.sendMessage("Bonjour, je m'appelle Heinz Linge, et je suis le majordome de ces abrutis, mon Fürher Suprème est MrAntex, mais n'importe qui peut se permettre de me solliciter. \n\n La plupart de commandes auxquelle j'obéis commencent par SS suivi de la commande, sans jamais d'espaces. \n Par exemple, essayez SSping \n\n Les quelques seules commandes que je suis autorisé a vous communiquer sont : \n\n     - SSping    --->   Sert a connaître son ping sur le serveur. \n     - SSqui-est + pseudo   --->   Donne des informations sur la personne (en construction, le dev est un branleur, sortie avant 2019)  \n     - SScarambar   --->   Donne une incroyable blague au hasard parmi plus de 70 blagues. \n     -   Bolhelp   --->   Pour tout savoir sur le jeu dont je suis l'animateur : Bouls of Legends \n\n Il existe plus de 50 mots auxquels je réagis, essayez de tous les découvrir ;)")+(console.log(date_heure() + " | SShelp " + message.author.username));
                                     if (((str.toLowerCase().includes("pd"))) && (message.author.bot) == (false)) return message.channel.sendMessage("EH DEJA CTOI LE PD *crache*")+(console.log(date_heure() + " | pd " + message.author.username));
                                      if (((str.toLowerCase().includes("fdp"))) && (message.author.bot) == (false)) return message.channel.sendMessage("On avait dit pas les mamans, fils de pute.")+(console.log(date_heure() + " | fdp " + message.author.username));
                                       if (((str.toLowerCase().includes("connard"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Ton grand père le connard de juif homo triso la aussi")+(console.log(date_heure() + " | connard " + message.author.username));
                                        if (((str.toLowerCase().startsWith("dis"))) && (message.author.bot) == (false)) return message.channel.sendMessage("lemme")+(console.log(date_heure() + " | dis-lemme " + message.author.username));
                                        if (((str.toLowerCase().includes("maquereau"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ton père le maquereau.")+(console.log(date_heure() + " | maquereau " + message.author.username));
                                         if (((str.toLowerCase().includes("thon"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Mais t'a vu ta mère avant de parler toi ?")+(console.log(date_heure() + " | thon " + message.author.username));
                                         if (((str.toLowerCase().includes("merde"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est toi la merde.")+(console.log(date_heure() + " | merde " + message.author.username));
                                          if (((str.toLowerCase().includes("bah"))) && (message.author.bot) == (false)) return message.channel.sendMessage("leine")+(console.log(date_heure() + " | bah " + message.author));
                                          if (((str.toLowerCase().includes("atta"))) && (message.author.bot) == (false)) return message.channel.sendMessage("que éclair Pikachu !")+(console.log(date_heure() + " | atta " + message.author.username));

                                          if (((str.toLowerCase()==("qui"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Ta Mère.")+(console.log(date_heure() + " | qui " + message.author.username));
                                           if (((str.toLowerCase().includes("mdr"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Haha j'avoue trop lolesque ptn jpp xptdlol")+(console.log(date_heure() + " | mdr " + message.author.username));
                                           if (((str.toLowerCase()==("re"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Nard")+(console.log(date_heure() + " | re " + message.author.username));
                                           if (((str.toLowerCase()==("hein"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Deux")+(console.log(date_heure() + " | hein " + message.author.username));
                                           if (((str.toLowerCase().includes("bisous"))) ) return message.channel.sendMessage(":heart:")+(console.log(date_heure() + " | bisous " + message.author.username));

                                           if (((str.toLowerCase()==("si"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Terne")+(console.log(date_heure() + " | si " + message.author.username));
                                           if (((str.toLowerCase().includes("ntm"))) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ta daronne que je vais soulever, hop hop hop comme la coupe du monde")+(console.log(date_heure() + " | ntm " + message.author.username));
                                           if ((str.toLowerCase().includes("heil")) && (message.author.id) == ("175372707959930880") && (message.author.bot) == (false)) return message.channel.sendMessage("Heil Mein Fürher !")+(console.log(date_heure() + " | heil " + message.author.username));
                                            if ((str.toLowerCase().includes("heil")) && (message.author.id) != ("175372707959930880") && (message.author.bot) == (false)) return message.channel.sendMessage("Heil !")+(console.log(date_heure() + " | heil " + message.author.username));
                                          //if (((str == ("?"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Un problème, Monsieur ?")+(console.log(date_heure() + " | ? " + message.author.username));
                                         if (((str.includes("nice")) || (str.includes("Nice"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Marseille")+(console.log(date_heure() + " | nice " + message.author.username));
                                        if (((str.includes("NICE"))) && (message.author.bot) == (false)) return message.channel.sendMessage("MARSEILLE")+(console.log(date_heure() + " | NICE " + message.author.username));
                                      if (((str.toLowerCase().startsWith("auschwitz"))) && (message.author.bot) == (false)) return message.channel.sendMessage("http://www.colonies-de-vacances.com/colonie-pologne.html")+(console.log(date_heure() + " | auschwitz " + message.author.username));
                                        if (((str.toLowerCase().includes("juif"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Où ca ?! \n https://www.tenor.co/tV7n.gif")+(console.log(date_heure() + " | juif " + message.author.username));
                                        if (((str.toLowerCase().includes("tzigane"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Comme dirait un petit allemand espiègle : *Ils avaient qu'a pas être la aussi*")+(console.log(date_heure() + " | tzigane " + message.author.username));
                                        
                                        if (((str.toLowerCase().includes("hitler"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Ich werde meinem obersten führer bis zum tod folgen! mögen die himmel ihren zorn auf meinen stolz werfen, wenn ich eines tages dem dritten Reich den rücken kehren muss !! Heil mein Fürher !")+(console.log(date_heure() + " | hitler " + message.author.username));
                                        if (((str.toLowerCase().includes("nazi"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Les amis de mes amis sont mes amis. Tot zu Untergebenen ! :svastika:")+(console.log(date_heure() + " | nazi " + message.author.username));
                                        if (((str.toLowerCase().includes("gaz")) ) && (message.author.bot) == (false)) return message.channel.sendMessage("Gaz : Etat da la matière juive après traitement.")+(console.log(date_heure() + " | gaz " + message.author.username));
                                        if (((str.toLowerCase().includes("victime")) ) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est ton père la victime de la shoah, sous race.")+(console.log(date_heure() + " | victime " + message.author.username));
                                        if (((str.toLowerCase().includes("batman")) ) && (message.author.bot) == (false)) return message.channel.sendMessage("NANANANANANA BATMAAAAAAN")+(console.log(date_heure() + " | batman " + message.author.username));
                                       
                                       if (((str.toLowerCase().includes("philippe")) || (str.toLowerCase().includes("J'SAIS OU TU T'CACHES ! VIENS ICI QUE J'TE BUTE ENCULÉ !!"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Pette")+(console.log(date_heure() + " | philippe " + message.author.username));
                               
                                       if (((str.toLowerCase().includes("salaud")) || (str.toLowerCase().includes("salo"))) && (message.author.bot) == (false)) return message.channel.sendMessage("Pette")+(console.log(date_heure() + " | salopette " + message.author.username));
                                        if (((str.includes("heinz")) || (str == ("Heinz"))) && ((message.author.id) == ("175372707959930880")) && (message.author.bot) == (false)) return message.channel.sendMessage("Je suis là, Maître.")+(console.log(date_heure() + " | Heinz " + message.author.username));
                                        if (((str.includes("heinz")) || (str==("Heinz"))) && ((message.author.id) != ("175372707959930880")) && (message.author.bot) == (false)) return message.channel.sendMessage("C'est moi.")+(console.log(date_heure() + " | Heinz " + message.author.username));

                                          if (((str == ("HEINZ"))) && ((message.author.id) == ("175372707959930880")) && ((message.author.bot) == (false))) return message.channel.sendMessage("Y'A QUOI L... Pardon Monsieur, milles excuses Monsieur, pas le goulag svp Monsieur.")+(console.log(date_heure() + " | HEINZ " + message.author.username));
                                        if (((str == ("HEINZ"))) && ((message.author.id) != ("175372707959930880")) && ((message.author.bot) == (false))) return message.channel.sendMessage("Y'A QUOI LA PUTAIN DE LA CON DE VOS RACES ?!")+(console.log(date_heure() + " | HEINZ " + message.author.username));
                                        if (((str.toLowerCase()==("cloe"))||(str.toLowerCase()==("cloé")) ) && (message.author.bot) == (false)){
                                                message.delete(message.author);
                                                message.channel.sendMessage("Chloé*")+(console.log(date_heure() + " | chloé* " + message.author.username));
                                        }
                                        if ((str.toLowerCase().includes("arabe"))||(str.toLowerCase().includes("muslim")))  return message.channel.sendMessage("On nous signale a l'instant une alerte attentat. Veuillez vous munir de votre Justin Bridou de défense.")+(console.log(date_heure() + " | arabomuslim " + message.author.username));
                                        if (((str.toLowerCase().includes("noir"))) ) return message.channel.sendMessage("PLANQUEZ VOS VÉLOS !!")+(console.log(date_heure() + " | noir " + message.author.username));



//55 mots

             break;
  
  
       case ("Hein,test") :
            message.channel.sendMessage(Paulort.id);
            break;
  
       
    }   


    if (message.content.startsWith(prefix + "suivante")) {
        message.delete(message.author);
        if (i < tab.length) i++;
        if (i >= tab.length) i = 0;
        voiceChannel.leave();
        music(voiceChannel, i);
    }


});

bot.login(token);