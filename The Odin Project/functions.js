// is else really required?, NO!
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

// STOPs executing
function doNothing() {
  return;
  console.log("asd");
}


// FUNCTION DECLARATION VS FUNCTION EXPRESSION
//expression (more eye-catching!) notice the semicolon at the end
let sayHi = function() {
  alert( "Hello" );
};

//declaration
function sayHi() {
  alert( "Hello" );
}



// A R R O W  F U N C T I O N S =>
let sum = (a, b) => a + b;
let sayHi = () => alert("Hello!");


// urinary and arrow functions  (age<18) ? alert('Hello') : alert('Greetings!');
let welcome = (age < 18) ?

  () => alert('Hello') :			// DYNAMICALLY CREATED FUNCTIONS!
  () => alert("Greetings!");			

welcome();

// multiline arrow functions
let sum = (a, b) => {  				// the curly brace opens a multiline function
  let result = a + b;
  return result; 				// if we use curly braces, then we need an explicit "return" or simply use a return;
};

alert( sum(1, 2) ); // 3





// TASK: Rewrite below using arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


// 1 
ask = (question, yes, no) => confirm(question) ? yes() : no();

//2 (might be important)!
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);





// Little exercises
// Write a function called add7 that takes one number and returns that number + 7.
let add7 = (num) => (num +7);

//Write a function called multiply that takes 2 numbers and returns their product.
let multiply = (num1, num2) => num1*num2;

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// NOTE :: SPLICE MODIFIES THE ARRAY BUT SLICE DOES NOT!
let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
let lastLetter = (string) => string[string.length-1];

// Basic fizzbuzz game
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}












