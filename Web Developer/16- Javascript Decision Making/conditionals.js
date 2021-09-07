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
// ternary:

let accessAllowed = (age > 18) ? true : false;

// ! NULLISH COALESCING OPEARTOR - '??'
// The result of a??b is
// if a is defined, then a,
// if a isn’t defined, then b.

// same as below: 
// result = (a !== null && a !== undefined) ? a : b;
// ! || returns the first truthy value, ?? returns the first defined value.