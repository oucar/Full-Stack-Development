// Using Bulma

let winningScore = 5;
let isGameOver = false;

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// OBJECTS
const p1 = {
    score:      0,
    button:     document.querySelector("#p1Button"),
    display:    document.querySelector("#p1Display"),
}

const p2 = {
    score:      0,
    button:     document.querySelector("#p2Button"),
    display:    document.querySelector("#p2Display"),
}

//! ---- UPDATE SCORES ----
const updateScore = function(player, opponent){

    if(!isGameOver){
        player.score ++;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');              // ! add the class
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        } // end if 
        player.display.textContent = player.score;
    } // end outer if
} // end updateScore()

// EVENT LISTENERS FOR UPDATING THE SCORES
p1.button.addEventListener('click', function(){
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function(){
    updateScore(p2, p1);
})


// ! RESET BUTTON
const reset = function(){
    isGameOver = false;

    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');      // ? remove the one you've found
        p.button.disabled = false;
    } // end for
    
} // end reset()

resetButton.addEventListener('click', reset);


// ! WINNING SCORE
winningScoreSelect.addEventListener('change', function(){
    //alert(this.value);                                // ? get the value of the thing you selected
    winningScore = parseInt(this.value);
    reset();
})