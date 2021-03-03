// Object definiton: An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.)
// Note: he this keyword refers to the current object the code is being written inside
const person = {
  name: {
    first: "Onur",
    last: "Ucar",
  },
  age: 20,
  gender: "male",
  interests: ["coding", "gaming"],
  bio: function () {
    console.log(
      `${this.name.first} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
    );
    console.log(`${this["name"]["first"]} ${this["name"]["last"]} `); // ! cool
  },
  greeting: function () {
    console.log(`${this.name} says Hi!`);
  },
  tell: function (something) {
    console.log(`${this.name} tells: ${something}`);
  },
};

person.farewell = function () {
  console.log(`Bye everybody! -${person["name"]["first"]} ${person["name"]["last"]}`);      // ! added a new method to the given object.
};


let myDataName = 'height';      
let myDataValue = '1.75m';
person[myDataName] = myDataValue;                                                         // ! added new props