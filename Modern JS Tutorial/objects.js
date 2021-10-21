// let user = new Object();             // object constructor syntax
// let user = {};                       // object literal syntax



// ! TRAINING 1
// ? Javascript has automatic garbage collection just like Java, Python and C#

// property: name, value: John
// property: age, value: 30
let user = {
    name: "John",
    age: 30,
}

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);

// access by variable
let key = "name";
console.log(user[key]);




// Object Factory - 

let objectFactor = (name ,age) => ({
    name: name,
    age: age,
})

let newUser = objectFactor("Onur", 24);
console.log(newUser);


// ! 2 - LOOPING THROUGH AN OBJECT
for(key in newUser){
    console.log(`${key}: ${newUser[key]}`);
}


// ! 3 - CLONING AN OBJECT
// ? you can't simply use =, they both point to the same object
// ? changing one would change the other as well

let userToBeCloned1 = objectFactor("A", 1);
let clone = {};

for(let keyClone in userToBeCloned1){
    clone[keyClone] = userToBeCloned1[keyClone];
    console.log(`${keyClone}: ${clone[keyClone]}`);
}



// ! 4 - this IN OBJECTS

// ! regular functions can use this inside the function
let pet1 = {
    name: "Riza",
    age: 30,
    woof(){
        console.log(`${this.name} says woof!`);
    }
}

pet1.woof();

// ! Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
let pet2 = {
    name: "Onur",
    age: 21,
    woof() {
        let arrow = () => console.log(this.name); 
        arrow();
    }
}

pet2.woof();


// ! LEFT: https://javascript.info/constructor-new
