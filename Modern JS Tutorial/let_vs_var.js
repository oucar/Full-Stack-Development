// ! var uses function scope -> does let you talk about variable before it's declared --> hoisting process in earlier js
// ! let is block scope -> doesn't let you talk about variable before it's declared

function setup() {
    // if it was var --> var i; --> hoisting

    for (let i = 0; i < 100; i++){
        // i only available here!
        // would work with var.
    }

    console.log(i);
}