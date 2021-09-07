function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
showMessage("Ann"); // Ann: no text given

// does the same thing
//   function showMessage(from, text = anotherFunction()) {
//     // anotherFunction() only executed if no text given
//     // its result becomes the value of text
//   }


// How to make a function accessible outside of its scope with the help of function expressions:let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now