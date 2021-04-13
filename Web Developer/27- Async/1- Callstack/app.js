// The Call Stack: The mechanism that javascript uses behind the scene. --> Calls multiple functions
// Javascript runs one line at the same time --> SINGLE THREAD!
// Stack : LIFO

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)         // ! returns true or false!
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")