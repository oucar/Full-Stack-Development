// key - value pairs are not iterable
// but you can use FOR IN!


// did you notice the difference between for of and for in?
// you use FOR OF in arrays but you use FOR IN in objects

const testScores = {
    a: 20,
    b: 30,
    c: 10,
    d: 31,
    e: 86,
    f: 75
}

for(let person in testScores){
    console.log(`${person} scored ${testScores[person]}`)       // key value
}

// But you can also use; AND THIS ONE IS BETTER!

Object.keys(testScores);    // returns keys AS ARRAY
Object.values(testScores);  // returns values AS ARRAY
Object.entries(testScores); // key value pairs



Object.entries(testScores)[0][0];       // a 


let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score; 
}

console.log(`Average: ${total/(scores.length)}`);