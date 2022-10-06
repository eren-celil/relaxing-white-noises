    // play stop audio

const audioChill = new Audio("./chill.mp3");
const audioStudy = new Audio("./study.mp3");
const audioSleep = new Audio("./rain.mp3");
const allAudioStop = document.querySelectorAll('audio').forEach(el => el.pause());


function playAudio(audio){
    audio.loop = true;
    if(audio.paused){
        audio.play();
    }
    else{
    audio.pause();}
    }
    
    
  
function stopAudio(audio){
    if (audio == audioChill){
        audioStudy.pause();
        audioSleep.pause();
    }
    if (audio == audioStudy){
        audioChill.pause();
        audioSleep.pause();
    }
    if (audio == audioSleep){
        audioStudy.pause();
        audioChill.pause();
    }
}
   // activating focus effect
   
    const cards = document.querySelectorAll('.voiceCard');

cards.forEach ((voiceCard) => {

    voiceCard.addEventListener('click', () => {
        removeActiveClasses()
        voiceCard.classList.add('active')
    })
} ) 


function removeActiveClasses() {
    cards.forEach(voiceCard => {
        voiceCard.classList.remove('active')
    })
}
