let num = 0;

while(count < 10){
    count ++;
    console.log(count);
}


// GUESS GAME

let maximum = parseInt(prompt("Enter the maximum number!"));

while(!maximum){
    maximum = parseInt(prompt("ERROR: Make sure you enter a VALID number!"));
}

const targetNum = (Math.floor(Math.random()*maximum)+1);
let attemps = 1;

let guess = parseInt(prompt("Enter your first guess!"));

while ( parseInt(guess) !== targetNum ){

    if(guess === 'q') break;
    
    attemps++;
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess!");
    } else {
        guess = prompt("Too low! Enter a new guess!");
    }
}

if(guess === 'q'){
    console.log("OK.");
} else {
    console.log(`You got it! It took you ${attemps} attempts`);
}

