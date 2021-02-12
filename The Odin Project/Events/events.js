// What is callback: CAllback are functions that are passed into another function as an argument
const notes = ['do', 're', 'me'];
notes.forEach((note) => console.log(note));

const myArry = [2, 3, 4, 2];
myForEach(myArry, (item) => {
  console.log(item + 2); 
})
// or
myForEach(myArry, item => console.log(item + 2)); 




// method 1 (do not use)
<button onclick="alert('Hello World')">Click Me</button>


// method 2 

//html
//<button id="btn">Click Me</button>

//js
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");



// METHOD 3! EVENT LISTENERS!!

//html
//<button id="btn">Click Me Too</button>

// the JavaScript file
const btn = document.querySelector('#btn');		// select the associated element from html file

btn.addEventListener('click', () => {
  alert("Hello World");
});


document.addEventListener('click', function (e) {
  console.log(e);
});


// attaching listener to group of nodes

/*
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

