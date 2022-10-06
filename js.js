    // play stop audio

const audio = new Audio("./chill.mp3")

function playAudioChill(){
    
    
   audio.loop = true;
    if(audio.paused){
        audio.play();
    }
    else{
    audio.pause();}
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
