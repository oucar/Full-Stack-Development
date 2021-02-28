/* //!passing function as argument

function add(num1, num2){
    return num1 * num2;
} // ? end add

function calculator(num1, num2, operator){         //! This is a higher order function (can take other functions as inputs!)
    return operator(num1, num2);
} // ? end calculator

calculator(4,5,add);
*/



const btns = document.querySelectorAll('button');

for(btn of btns){
    btn.addEventListener('click', function(){
        
        console.log(this);                          // ! do not use btn!


    });
} // end for



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();