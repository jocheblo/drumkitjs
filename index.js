"use strict"

const btnClicked = document.querySelectorAll(".drum");

btnClicked.forEach((btn) => {
    btn.addEventListener('click', (e) => {  
        
        //interaction
        animateBtns(btn);

        playSound(e.target.dataset.sound);

    });
})

//keys 
document.addEventListener('keydown', keyElem => {
  
    
    if(keyElem.code.includes('Key')) {
        const elementToPlay = document.querySelector(`.${keyElem.key}`);

        if(elementToPlay) {
            //interaction 
            animateBtns(elementToPlay);

            //play the sound
            elementToPlay ? playSound(elementToPlay.dataset.sound) : 'Nothing to play';
        }

    }
    

});

const animateBtns = btn => {
    btn.style.transform = "scale(1.2)";
    btn.style.borderColor = "#ffe137";
    setTimeout(()=> {
        btn.style.transform = "scale(1)";
        btn.style.borderColor = "#3c0c32";
    }, 100);
}

const playSound = sound => {
    const playIt = new Audio(`./sounds/${sound}.mp3`);
    playIt.play();
}



