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


/* Life in days coding challange*/
function lifeInWeeks(age) {

    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

/* Returning */

function getMilk(money){
  return (money % 5);
}

var onur = getMilk(24); // has the value of 4.

/* BMI CALCULATOR challange*/
function bmiCalculator(weight, height){

    var bmi = weight/(height*height);
    return Math.round(bmi);
}


/*Random*/

// Love score
var yourName = prompt("Your name: ");
var herName = prompt("Her name: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1;
console.log(loveScore);

if(loveScore < 30){
  alert("She doesn't like you. " + loveScore + "%.");
}

else if (loveScore < 75) {
  alert("Uhmmm.. Maybee?.. " + loveScore + "%.");
}

else{
  alert("She loves you! " + loveScore + "%.");
}

//Dice
var n = Math.random();
n = n *6;
n = Math.floor(n) +1;
console.log(n);


/* Arrays */
var eggs = [0,1,2,3,4,5,6];
var myEgg = eggs[1];
eggs.length; // 7

var guestList = ["Onur", "Ozgur", "Ali", "Veli", "Esek"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0] + " " + guestList[1])
console.log(guestList.includes("Onur")); // check if it's in the list
