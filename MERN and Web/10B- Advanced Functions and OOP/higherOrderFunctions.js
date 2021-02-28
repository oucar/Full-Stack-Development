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