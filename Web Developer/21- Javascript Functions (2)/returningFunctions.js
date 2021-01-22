// returning a function as value


function makeMysteryFunc(){
    const rand = Math.random;
    if(rand > 0.5){
        return function(){
            console.log("Congrats! I am a good function!");
        } // end return
    } else {
        return function(){
            console.log("You have been infected!");
        }
    }
}

const mystery = makeMysteryFunc();

mystery;                    //function object;
mystery();                  // YOU CALL THE FUNCTION!


/* MORE USEFUL */
// checks if a number is between two numbers.

function makeBetweenFunc(min, max) {
    return function (num) {
        return num>=min && num<=max;
    }
}

const isChild = makeBetweenFunc(0, 18);
isChild;                                // function object
isChild();                              // function call

const isSenior = makeBetweenFunc(65,120);
isSenior;                               // function object
isSenior();                             // function call