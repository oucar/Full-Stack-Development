/* //!passing function as argument

function add(num1, num2){
    return num1 * num2;
} // ? end add

function calculator(num1, num2, operator){         //! This is a higher order function (can take other functions as inputs!)
    return operator(num1, num2);
} // ? end calculator

calculator(4,5,add);
*/

// higher order functions can take other function as parameters!


function add(num1, num2) {
    return num1 + num2;
}
     
function subtract(num1, num2) {
    return num1 - num2;
}
     
function multiply(num1, num2) {
    return num1 * num2;
}
     
function divide(num1, num2) {
    return num1 / num2;
}
     
function calculator(num1, num2, operator) {         // hof
    return operator(num1, num2);
}