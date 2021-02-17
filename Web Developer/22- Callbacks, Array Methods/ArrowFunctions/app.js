// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// a and b parameters
const add = (a, b) => a + b;
add(1,2);

// num is the parameter
const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }


// Since it's only one line, you can get rid of the return value BUT MAKE SURE YOU CHANGE CURLY BRACES TO REGULAR BRACES!!!!
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)



const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN (CHECK THE PHARENTATESSI!) ----> ONLY IF THERE'S ONE LINE TO RETURN
// You use arrow function when passing something to another thing using a function
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))


const add2 = (a,b) => a+b; 


// event listener and arrow p1
btn.addEventListener('click', function(){
    alert('hey!');
});


// WITH EVENT LISTENERS
const hello = () => {
    console.log('hello');
}

const goodbye = () => {
    console.log('goodbye');
}


const btn1 = document.querySelector('#hello');
btn1.addEventListener('click', hello);

const btn2 = document.querySelector('#goodbye');
btn2.addEventListener('click', goodbye);