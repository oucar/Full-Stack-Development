// Assign by value
// In the code snippet below, we are assigning a scalar primitive value (a number) to a variable and thus assign-by-value applies here. Firstly, the variable batman is initialized and when the variable superman is assigned with the value stored in batman, it creates a new copy of the value and stores it. When the variable superman is modified, batman is left unaffected, as they point to distinct values.
var batman = 7;
var superman = batman;   //assign-by-value
superman++;
console.log(batman);     //7
console.log(superman);   //8

// Assign by reference
// In the code snippet below, we are assigning a compound value (an array) to a variable and thus assign-by-reference applies here. The variables flash and quicksilver are references to the same value (aka shared value). The references will point to the updated value when the shared value is modified .
// works like a pointer in objects and arrays
var flash = [8,8,8];
var quicksilver = flash;   //assign-by-reference
quicksilver.push(0);
console.log(flash);        //[8,8,8,0]
console.log(quicksilver);  //[8,8,8,0]