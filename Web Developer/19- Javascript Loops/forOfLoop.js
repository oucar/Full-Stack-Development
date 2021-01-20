// not supported in internet explorer 
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// traditional way of printing 
for (let i = 0; i < subreddits.length; i++){
    console.log(`Visti reddit.com/r/${subreddits[i]}`);
}

// for of loop
for( let sub  of subreddits){
    console.log(sub);
}

// More javascript-y : )
for(let char of "Onur"){
    console.log(char);
}