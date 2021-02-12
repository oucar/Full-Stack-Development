// EXPANDS! SPREAD IS A SUPER COOL FUNCIONALITY

Math.max(1,2,3,4,500,6,7,8,9,10,11);    // 500

const nums = [1,2,3,4,500,6,7,8,9,10,11];
Math.max(nums);                         // NaN --> because you jst passed a single array.
Math.max(...nums);                      // entire array is spread out.
Math.min(...nums);                      // 1


console.log(nums);                      // (11) [1, 2, 3, 4, 500, 6, 7, 8, 9, 10, 11] --> Array object
console.log(...nums);                   // 1 2 3 4 500 6 7 8 9 10 11


console.log("Hello");                   // Hello
console.log(..."Hello");                // H e l l o




// Spread with Array Literals
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];  // (5) ["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]
const allPets2 = [...dogs, ...cats]; // (5) ["Rusty", "Wyatt", "Blue", "Scout", "Rocket"]


const allPets3 = [1,2,3,4,"onur", "ali", ...dogs, "HAHA", ...cats]; //(12) [1, 2, 3, 4, "onur", "ali", "Rusty", "Wyatt", "HAHA", "Blue", "Scout", "Rocket"]
const dogsCopy = [...dogs];

let str = "Hello";                  // "Hello"
let spreadStr = [...str];           // (5) ["H", "e", "l", "l", "o"]



// Spread and Object Literals
const feline = {
    legs    : 4,
    family  : `Felidae` 
}

const canine = {
    isFurry : true,
    family  : `Caninae`
}


const felineCopy = {...feline};                         // {legs: 4, family: "Felidae"}
const felineImproved = {...feline, color:'black'};      // {legs: 4, family: "Felidae", color: "black"}

                                                        // Order matters, canine's family has overwrote the feline's
const catDog = {...feline, ...canine};                  // {legs: 4, family: "Caninae", isFurry: true}      
const catDog2 = {...feline, ...canine, family:`N/A`};   // {legs: 4, family: "N/A", isFurry: true}


const arrayGiven = [1,2,3,4,5,6,7,8,9,10];
const arrayToObject = {...arrayGiven};                  // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10}
arrayToObject[0];                                       // 1



// real world-ish example
const dataFromForm = {
    email       : `onurucar@iu.edu`,
    password    : `123123!`,
    username    : `oucar`
}

const newUser = {...dataFromForm, id:1, isAdmin:true};
