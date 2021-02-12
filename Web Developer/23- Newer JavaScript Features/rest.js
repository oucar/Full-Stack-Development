// holds arguments : collects all remaining arguments into an actual array!

function sum(){
    console.log(arguments);
}

sum(1,2,3);                     // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// all values that are passed in stored here!
function sumAll(...nums){
    console.log(nums);          // (6) [1, 2, 3, 4, 5, 6]
    return nums.reduce((total, el) => total+el);
}

// another example
function raceResults(gold, silver, ...everyoneElse){        //raceResults("Onur", "Ucar", "Ali", "Veli", "Aq");
    console.log(`GOLD MEDAL GOES TO: ${gold}`);             //GOLD MEDAL GOES TO: Onur
    console.log(`SILVER MEDAL GOES TO: ${silver}`);         //SILVER MEDAL GOES TO: Ucar
    console.log(`THANKS TO: ${everyoneElse}`)               // THANKS TO: Ali,Veli,Aq
};

