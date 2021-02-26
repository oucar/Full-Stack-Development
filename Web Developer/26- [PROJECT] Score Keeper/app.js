// Using Bulma

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

// increment p1
p1Button.addEventListener('click', function(){

    if(!isGameOver){
        p1Score ++;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner');              // ! add the class
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})

// increment p2
p2Button.addEventListener('click', function(){

    if(!isGameOver){
        p2Score ++;
        if(p2Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('loser');              // ! add the class
            p2Display.classList.add('winner');
        }
        p2Display.textContent = p2Score;
    }
})

// reset button
const reset = function(){
    isGameOver = false;
    p1Score = p2Score = 0;
    p1Display.textContent = p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');      // ! remove the one you've found
    p2Display.classList.remove('winner', 'loser');
}

resetButton.addEventListener('click', reset);


// select the winning score
winningScoreSelect.addEventListener('change', function(){
    //alert(this.value); // ! get the value of the thing you selected
    winningScore = parseInt(this.value);
    reset();
})