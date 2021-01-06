var name = prompt("What is your name?");
alert("Hello, " + name + " !");

/* Word Length */
var newName = "Onur";
newName.length; // -> Prints 4

/* Twitter counter */
var question = prompt("Write: ");
var totalAllowed = 200;
var written = question.length;
var left = totalAllowed - written;
alert("You have written " + written + " characters and you have " + left + " characters left.");


/* Slicing the String */
var question = prompt("Write: ");
var totalAllowed = 200;
var tweetUnder200 = question.slice(0,200).length;                   // slice(1,3) --> starting from 1, but not including 3. --> Onur --> nu
var left = totalAllowed - tweetUnder200;
alert("You have written " + written + " characters and you have " + left + " characters left.");

/* Changing Casing in Text */
var name = "Onur";
console.log(name.toUpperCase() + " " + name.toLowerCase());

/* Casing CHALLENGE --> onur to Onur, ONUR to Onur.*/
var nameGiven = prompt("What is your name?");
var firstLetter = nameGiven.slice(0,1).toUpperCase();
var rest = nameGiven.slice(1).toLowerCase();      // starting from 1, you can also use slice(1, nameGiven.length)
var name = firstLetter + rest;
alert("Hello, " + name);


/* MATH */

var sum = 9+6;
var sub = 9-6;
var div = 9/6;        // 1.5
var remainder = 9%6;  // 3

var x = 4;
var y = 3;
x += y; // 7

/*
In this line: var y = x++ the value of x is assigned to y before x is incremented, so y equals 3 on line 2, while x equals 4.
Therefore on line 3, y now equals 4 instead of 5.

    var x = 3;
    var y = x++;
    y += 1;
*/


/* FUNCTIONS */

alert(1);
alert(2);
alert(3);
alert(4);

//Let's package this.

function countToFour(){
  alert(1);
  alert(2);
  alert(3);
  alert(4);
} // end function

countToFour();


/* More functions */

function getMilk(bottles) {
  var cost = bottles * 2;
  console.log("It will cost you $" + cost + ".");
}

getMilk(45);
