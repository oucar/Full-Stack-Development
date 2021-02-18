const btn = document.querySelector('button');

// let's make sure it works
btn.addEventListener('click', function(){
    console.log("BUTTON IS CLICKED!");
});

// event object! - it's being passed in everysingle time (evt, e);
btn.addEventListener('click', function (evt) {
    console.log(evt)
})


// e.code                                       // code (actual location)
// e.key                                        // letter, character

window.addEventListener('keydown', function (e) {
    switch (e.code) {                           // code of the 
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED IN WINDOW!")
    }
})


const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e);                             // check the object in console
    console.log(`Key you pressed: ${e.key}`);   // position
    console.log(`Key code: ${e.code}`);         // letter itself
})


