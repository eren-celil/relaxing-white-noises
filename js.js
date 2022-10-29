const audio = document.querySelector("audio")
const audioCard = document.getElementsByClassName('voiceCard');
const allAudioStop = document.querySelectorAll('audio').forEach(el => el.pause());

function playAudio(source){
    if(audio.getAttribute("src") != source){
        audio.src = source;
    }
    
    audio.loop = true;

    if(audio.paused){
        audio.play();   
        
    }
    else{
    audio.pause();
    }};

   // activating focus effect
   
const cards = document.querySelectorAll('.voiceCard');
const info = document.querySelector('.which-song');
cards.forEach ((voiceCard) => {

    voiceCard.addEventListener('click', () => {
        removeActiveClasses()
        voiceCard.classList.add('active')
        if(audio.getAttribute("src") == './rain.mp3'){
            info.textContent = "Good night, sleep tight, don't let the bedbugs bite...🌙"
        }else  if(audio.getAttribute("src") == './study.mp3'){
            info.textContent = "Have an efficient day...👨‍💻"
        }else  if(audio.getAttribute("src") == './chill.mp3'){
            info.textContent = 'Just relax...🕯️';
        }
    })
} ) 


function removeActiveClasses() {
    cards.forEach(voiceCard => {
        voiceCard.classList.remove('active')
    })
}


var image =  document.getElementById("play");

            function changeColor()
            {
                if (image.getAttribute('src') == "play.png")
                {
                    image.src = "pause.png";
                }
                else
                {
                    image.src = "play.png";
                }
            }
audio.addEventListener("timeupdate",() =>{
let percentage = audio.currentTime/audio.duration*100;
let progress = `background-image: conic-gradient(#4618de ${percentage}%, #bbb ${percentage}%),conic-gradient(#4618de ${percentage}%, #bbb ${percentage}%);`;
for(var i = 0 ; i < audioCard.length ; i++){
    audioCard[i].style = progress;
}});
            
 
const contact = document.querySelector('.contact-us');

function contact_popup() {
        if(contact.classList.contains('hidden')){
        contact.classList.remove('hidden')
        
        }else{
            contact.classList.add('hidden')
        }
    }
