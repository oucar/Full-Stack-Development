// functional parameters 
function multiply(a,b=1){           // default parameters CANNOT come first!
    return a*b;
} 

multiply(7);        // 7*1 = 7
multiply(7,3);      // 7*3 = 21


// roll die

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) +1; 
}