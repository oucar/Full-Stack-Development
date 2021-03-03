// ! CHECK THIS WHEN NEEDED: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ! https://www.geeksforgeeks.org/most-useful-javascript-array-functions-part-2/
// ! https://www.geeksforgeeks.org/must-use-javascript-array-functions-part-3/

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

// ! array of objects
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// ! array of strings
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];




// Array.prototype.filter()     // ! filtrers
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function (inventor) {
  // ! iterates thru all the inventors
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // ! you keep it. no need to return false to not to keep them
  }
});

console.log(fifteen); //! your new array of objects, which only consists the in ventors who were born in 1500s
console.table(fifteen); // ? cool :)

//? arrow-y way of doing filter
const fifteen2 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});

// ? or even shorter way of doing above thing
const fifteen3 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);





// Array.prototype.map()    // ! returns a new array with the same length
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
console.table(fullNames);




// Array.prototype.sort()   
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function (a, b) {
    if(a.year > b.year){
        return 1;           // ! bubbles up
    } else {
        return -1;          // ! bubbles down
    }
});
console.table(ordered);

// ? much more javascript-y way of doing above
const ordered2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1);         //! return 1 if correct, -1 otherwise.




// Array.prototype.reduce()     // ! allows you to build something for every single one of them
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);      // ! 0 is the initial value for the total
console.log(totalYears);


// 5. Sort the inventors by years lived     // ! oldest to youngest
const oldest = inventors.sort(function(a,b){
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    if(next > last){
        return 1;
    } else {
        return -1;
    }
});
console.table(oldest);




// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];           // ! spread every item to this array
// const de = links
//     .map(link => link.textContent)                           // ! array with only their textContents
//     .filter(streetName => streetName.includes('de'));        // ! play with the array you just modified



// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((last,next) => {
    const [aLast, aFirst] = last.split(', ');
    const [bLast, bFirst] = next.split(', ');
    return aLast > bLast ? 1: -1;
})
console.log(alpha);



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const trans = data.reduce(function(obj, item){

    if(!obj[item]) {
        obj[item] = 0;
    }
    
    obj[item]++;

    return obj;
}, {})