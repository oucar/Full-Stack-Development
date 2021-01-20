/*
    const name = "Onur";
    name[0]; // O
*/

let luckyNumbers = [123, 643, 29, 0, 40];
luckyNumbers.length; // 5
luckyNumbers[10]; // undefined
let randomNum = Math.floor(Math.random() * 5);
luckyNumbers[randomNum];    // random number



let colors = ['red', 'orange', 'pink'];
colors[1][0]; // r

/*
 push : add to end
 pop : remove from end
 shift : remove from start
 unshift : add to start
*/


colors.push('white', 'blue');
colors.pop();
colors.shift();
colors.unshift("black");

/* concat, indexof, includes, reverse, slice, splice, toString */

let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];

let pets = cats.concat(dogs);      // pets = cats + dogs
pets.includes('blue');             // true
pets.indexOf('blue');              // 0
pets.indexOf('asgasdgas');         // -1


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice(1);                   // orange, yellow .... violet
colors.slice(2,4);                 // yellow, green         
colors.slice(0,3);                 // red, orange, yellow 


/*
.splice(x,y,z);
    x: starting from:
    y: how many of them will be removed
    z: if y is 0, what will be inserted?
*/

colors.splice(5, 1,);              // indigo has been deleted
colors.splice(0,2);                // red and orange have been deleted

colors.splice(1,0,'red-orange');                            // red-orange has been inserted between two elements!!!
colors.splice(3,0,'yellow-green', 'forest-green');          // both yellow green and forest green have been added


/*
[1] === [1]         // false!
[1] ==  [1]         // false

javascript compares their reference in the memory
*/

let nums = [1,2,3];
let numsCopy = nums;

nums.push(4);       // numCopy, nums = [1,2,3,4]

// YOU CAN USE CONST WITH ARRAY, BUT CANNOT USE CONST WITH STRINGS!


pets.reverse();                    // array has been reversed

