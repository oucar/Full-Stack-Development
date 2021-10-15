
// KEYUP event listener
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // ! Debugging purposes
    // console.log(e.keyCode);
    // console.log(audio);

    // ! invalid key
    if(!audio) return;

    // rewind to the start
    audio.currentTime = 0;

    audio.play();

    // toggle class
    key.classList.add('playing');
    
})

function removeTransition(e) {
    // skip if it's not a transform
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
