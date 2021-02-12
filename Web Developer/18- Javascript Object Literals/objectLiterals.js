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


student.exams["final"];         // 100
student.exams.final;            // 100
