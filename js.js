    // play stop audio

const audioChill = new Audio("./chill.mp3");
const audioStudy = new Audio("./study.mp3");
const audioSleep = new Audio("./rain.mp3");


function playAudio(audio){
    audio.loop = true;
    if(audio.paused){
        audio.play();
    }
    else{
    audio.pause();}
    }
    
    // activating focus effect
  
function stopAudio(){
    audioChill.pause();
    audioStudy.pause();
    audioSleep.pause();
}
   
   
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
