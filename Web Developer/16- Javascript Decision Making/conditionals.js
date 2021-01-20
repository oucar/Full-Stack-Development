// Connecting js to html, Use below in html!
// <script src="./app.js"></script>

/* 
FALSY VALUES:
    false
    0
    ""
    null
    undefined
    NaN

TRUTHY VALUES:
    everything else is truthy!    

*/


const password = prompt("please enter a new password");

if (password.length >= 6){
    if(password.indexOf(" ") === -1){
        console.log("Good job!");
    } else{
        console.log("Your password has space(s)");
    } // end inner conditional
} else {
    console.log("Password too short!");
} // end outer conditional


// !null --> true