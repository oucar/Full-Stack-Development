/*      PRIMITIVE DATA TYPES    */
var newNum = 1;
var isTrue = true;
var name = "Onur";
typeof(name);                    // String

0/0;                             // NaN
1+NaN;                           // NaN


/*      VARIABLES & LET         */
let someName = "Galis";
let year = 1943;

/*      CONST & VAR             */
// const works just like let, except you cannot change the value!
const hens = 4;
//hens = 20;                  // NO! Error!
// We used to use var, in good old days :(
    

// PREFIX - POSTFIX
// ! prefix : If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter1 = 1;
let a = counter1++; // (*) 
alert(a);   // 1

// ! postfix : If we’d like to increment a value but use its previous value, we need the postfix form:
let counter2 = 1;
let b = ++counter2;
alert(b);   // 2