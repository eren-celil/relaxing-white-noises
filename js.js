const audio = new Audio("./chill.mp3")

function playAudioChill(){
    
    if(audio.paused){
        audio.play();
    }
    else{
    audio.pause();}
    console.log(audio);
    }
    
    