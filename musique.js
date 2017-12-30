 case (prefix + "playlist") :
             var playlist = message.content.split(' ');
            playlist.shift();
            playlist = playlist.join(' ');
if((playlist)==("beatles")){

    search("https://www.youtube.com/watch?v=uSM5MpKSnqE", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
}
if((playlist)==("nawak")){
      search("https://www.youtube.com/watch?v=ykwqXuMPsoc", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
  search("https://www.youtube.com/watch?v=mGgipFeAXg8", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
  search("https://www.youtube.com/watch?v=eGLcT1GaYrU", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
  search("https://www.youtube.com/watch?v=tojicre_Qe8", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
  search("https://www.youtube.com/watch?v=mj-v6zCnEaw", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
  search("https://www.youtube.com/watch?v=qRC4Vk6kisY", opts, function(err, results) {
                if(err) return console.log(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                music.setTabEnd(results[y].link);                
})
}
break; 

        case (".link") :
            message.delete(message.author);
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            console.log(link);
            music.setTabEnd(link);
            break;
        case ("Heinz,volume") :
            message.delete(message.author);
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            music.volume(link/100);
            break;