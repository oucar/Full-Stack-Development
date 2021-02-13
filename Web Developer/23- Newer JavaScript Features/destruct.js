// Destructing ARRAYS

const scores = [1,2,3,4,5,6,7,8,9,10];
const [gold,silver,bronze, ...others] = scores;

gold;                                   //1
silver;                                 //2
bronze;                                 //3
others;                                 //(7) [4, 5, 6, 7, 8, 9, 10]  --> array
others.join(`, `)                       // "4, 5, 6, 7, 8, 9, 10"     --> string





// Destructing OBJECTS (more commonly used)
const user = {
    email       : `onurucar@gmail.com`,
    password    : `123123123`,
    firstName   : `Onur`,
    lastName    : `Ucar`
}

const firstName = user.firstName;
const lastName = user.lastName;

//OR USE... WE BASICALLY SINGLED THEM OUT
const {firstName, lastName} = user;             // make me a variable called firstName and lastName from user.
const {password: encryptedPassword} = user;     // encryptedPassword is the same variable as password in user object
const {died = "Not yet"} = user;                // died = "Not yet" (no need to use such thing)


firstName;          // Onur
encryptedPassword   //123123123





// Destructing PARAMETERS
const student = {
    firstName   : "Onur",
    lastName    :  "Ucar",
    strengths   : ['Music', 'Art'],
    exams       : {
        midterm : 92,
        final   : 100
    } 
}

//below functions work the same

function fullName (user){
    return `${user.firstName} ${user.lastName}`;
}

function fullName2 (user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
}

fullName(student);             //"Onur Ucar"
fullName2(student)             //"Onur Ucar"
