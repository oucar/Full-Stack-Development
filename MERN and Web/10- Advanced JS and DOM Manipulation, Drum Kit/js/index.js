const btns = document.querySelectorAll('button');

const makeSound = function(key){

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;

        case "l":
            let  kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play(); 
            break;

        default:
            console.log("oh no")
            break;
    } // end switch
} // end makeSound

// ! MAKE THE BUTTONS MOVE
const buttonAnimation = function(currKey){

    let activeButton = document.querySelector(`.${currKey}`)

    activeButton.classList.add('pressed');   // add class

    setTimeout(function(){
        activeButton.classList.remove('pressed');  // remove class
    },100)

} // end buttonAnimation();

// ! DETECTS BUTTON CLICK
for(btn of btns){
    btn.addEventListener('click', function(){
        //console.log(this);                      // ! do not use btn!
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    });
} // end for

// ! DETECTS KEY PRESS
document.addEventListener("keypress", function(e){          // callback function, e is rendered when the document has keypress event                   
    //console.log(e.key);
    makeSound(e.key);
    buttonAnimation(e.key);
})




