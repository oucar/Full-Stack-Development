/*
const fitBitData = {
    totalSteps  :30000;
    totalMiles  : 211.6;
    avgCalorieBurn : 6555;
    workoutsThisWeek : '5 of 7';
}
*/

const person = {
    firstName: 'Onur',
    lastName : 'Ucar',
    age      : 20,
    favColors: ['red', 'orange']
};

person.firstName;           // Onur
person['firstName'];        // Onur


const years = {
    1999    : 'GOOD',
    2020    : 'BAD'
}


years[1999];                // 'GOOD'

let year = 2020;    
years[year];                // BAD
years.year;                 // undefined!!



//  ---------
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}


//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant["address"] + ", " + restaurant["city"] + ", " + restaurant["state"] + " " + restaurant["state"] + " " + restaurant["zipcode"];


// MODFYING OBJECTS
const midterms = {
    danielle: 98,
    thomas  : 65
}

midterms['thomas'] = 30;            // Don't forget, square brackets allows you more!
midterms.danielle = 20;
midterms.ezra = 1000;               // new person have been added!
midterms['antonio'] = 20;           // one more!




/* ARRAYS AND OBJECTS */
// below is an array of objects

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 10,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 30,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 33,
        quantity: 2
    }
]

shoppingCart[1].product;            // Echo Dot


// this is an object 
const student = {
    firstName   : "Onur",
    lastName    :  "Ucar",
    strengths   : ['Music', 'Art'],
    exams       : {
        midterm : 92,
        final   : 100
    } 
}

// delete student.firstName; // -> removes the firstName attribute FROM THE OBJECT!Í

student.exams["final"];         // 100
student.exams.final;            // 100



let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
// alert(user.key); // would give your error.


// OBJECT MAKER
function makeUser(name, age){
    return{
        name: name, // or name,
        age: age,   // age,
    };
}

let newUser = makeUser("Onur", 30);
console.log(newUser.age);


// object references and copying
let user1 = { name: 'John' };
let user2 = user1;
user2.name = 'Pete'; // changed by the "admin" reference
alert(user1.name); // 'Pete', changes are seen from the "user" reference

// comparison by reference
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the SAME OBJECT
alert( a === b ); // true

// how to clone an object
let user = {
    name: "John",
    age: 30
};
  
let clone = {}; // the new empty object
  
// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
  