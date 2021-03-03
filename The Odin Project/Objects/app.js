// ! Creating an empty object
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

// ! accessing to objects
let user = {
  name: "John",
  age: 30,
};

console.log(age);
console.log(user["age"]);

// ! accessing to object members using user inputs
let key = prompt("What do you want to know about the user?", "name");
alert(user[key]); // ? John (if enter "name")

let key = "name";
alert(user.key); // ? undefined (dot notation cannot be used in a similar way)

// ! Computed properties
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// ! Creating new objects
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// ! Creating new objects in a shorter way:
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
let user2 = makeUser("Onur", 24);
user2; //? Object { name: "Onur", age: 24 }

// ! Property existence test ''in'' operator
let user = {};
alert(user.noSuchProperty === undefined); // true means "no such property"

//? or (===undefined fails if there is something like `name : undefined;`)

let user = { name: "John", age: 30 };
alert("age" in user); // ! true, user.age exists
alert("blabla" in user); // ! false, user.blabla doesn't exist

function isEmpty(obj) {
  // function to check if the given prop exists
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// ! for in loop
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // ! use key or prop, nothing else!
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(user[key]); // John, 30, true
}

// ! OBJECTS ARE ORDERED DIFFERENTLY.
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49 --> simply add a + to the beginning of each number to hack the system : )
}

// ! ? BUT IF YOU'RE TALKING ABOUT STRINGS, THEY ARE ORDERED AS THEY ARE
let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert(prop); // name, surname, age
}



// mini example
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };