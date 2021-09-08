/*
    const name = "Onur";
    name[0]; // O
*/

/* ARRAY VS OBJECT

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

*/

let luckyNumbers = [123, 643, 29, 0, 40];
luckyNumbers.length; 				// 5
luckyNumbers[10]; 				// undefined
let randomNum = Math.floor(Math.random() * 5);
luckyNumbers[randomNum];    			// random element

// new array ussing new keyword
var cars = new Array("Saab", "Volvo", "BMW"); 	// AVOID USING THIS!


//changing an element of an array
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
typeof cars; 					// because arrays are object in javascript
Array.isArray(cars); 				// return true

let colors = ['red', 'orange', 'pink'];
colors[1][0]; // r


/*
 push : add to end
 pop : remove from end
 shift : remove from start
 unshift : add to start
*/


colors.push('white', 'blue');
let poppedOut = colors.pop();
colors.shift();
colors.unshift("black");


/* concat, indexof, includes, reverse, slice, splice, toString */

let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];


let pets = cats.concat(dogs);      		// pets = cats + dogs
pets.includes('blue');             		// true
pets.indexOf('blue');              		// 0
pets.indexOf('asgasdgas');         		// -1


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice(1);                  		 // orange, yellow .... violet
colors.slice(2,4);                 		// yellow, green         
colors.slice(0,3);                 		// red, orange, yellow 


/*
.splice(x,y,z); ---> SPLICE MODIFIES THE ARRAY!!
    x: starting from:
    y: how many of them will be removed
    z: if y is 0, what will be inserted?
*/


colors.splice(5, 1);              		// indigo has been deleted!! --> USE SPLICE FOR DELETING!
colors.splice(0,2);                		// red and orange have been deleted
colors.splice(1,2)				// orange and yellow deleted (starting from 1, delete 2 elements)

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

// Converting an array to string 
let fruits = ["Banana", "Orange", "Apple", "Mango"];			// Using toString()
let fruitsString = fruits.toString();

let fruitsJoin = fruits.join(" * ");	 				//You can choose the seperator using join();


// ! SPLICE - deletes! (delete deletes as well but doesn't change the array length)
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// ! remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]


// ! SLICE
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)


// ! CONCAT
let arr = [1, 2];
// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6 
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


//! forEach
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


// ! FIND
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // John


// ! FILTER
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2

// ! MAP MAP MAP! - It calls the function for each element of the array and returns the array of results.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// ! SPLIT
let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');
for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}


// ! ARRAY DESTRUCTURING!
// we have an array with the name and surname
let arr = ["John", "Smith"]
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // John
alert(surname);  // Smith

// ! OR
let [firstName, surname] = "John Smith".split(' ');
