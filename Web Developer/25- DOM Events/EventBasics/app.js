// VERSION 2
const btn = document.querySelector('#v2');

    // do this if btn is clicked
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}


function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

    // do this if btn is being hovered
btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}


// VERSION 3, THE BEST!
const btn3 = document.querySelector('#v3');     // SELECT
btn3.addEventListener('click', function () {    // event that is being listened, callback function
    alert("CLICKED!");
})

const btn4 = document.querySelector("#v4");
btn4.addEventListener('click', () => {
    console.log("4TH ONE IS CLICKED!")
});



    // WHY DO WE USE EVENT LISTENERS?

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;       // OVERWRITTING TWIST!

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)



