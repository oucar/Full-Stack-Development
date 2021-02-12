// Destructing ARRAYS

const scores = [1,2,3,4,5,6,7,8,9,10];
const [gold,silver,bronze, ...others] = scores;

gold;                                   //1
silver;                                 //2
bronze;                                 //3
others;                                 //(7) [4, 5, 6, 7, 8, 9, 10]  --> array
others.join(`, `)                       // "4, 5, 6, 7, 8, 9, 10"     --> string


// Destructing OBJECTS (more commonly used)




// Destructing PARAMETERS