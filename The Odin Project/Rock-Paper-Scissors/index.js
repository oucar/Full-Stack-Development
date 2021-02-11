function computerPlay(){

    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3); // 0 1 2
    let computerInput = choices[index];
    return computerInput;

}


function playRound() {

    let humanScore = 0, compScore = 0;
    

    while(humanScore < 5 && compScore < 5){

        let ask = prompt("What do you want to say?");
        playerSelection = ask.toLowerCase();
        computerSelection = computerPlay();

        // TIE 
        if(playerSelection === computerSelection){
            //skip
        } else if (playerSelection === "rock"){
            if(computerSelection === "paper"){
                compScore++;
            } else{
                humanScore++;
            } // end inner conditionals
        } else if( playerSelection === "paper"){
            if(computerSelection === "rock"){
                humanScore++;
            } else {
                compScore++;
            } // end inner conditionals
        } else if( playerSelection === "scissors"){
            if(computerSelection === "paper"){
                humanScore++;
            }  else{
                compScore++;
            } // end inner conditionals
        } // end outer conditionals

        console.log(`Human: ${playerSelection}, Computer: ${computerSelection}`)
        console.log(`${humanScore} - ${compScore}`);

    } // end while

  } // end playRound();
  

console.log(playRound());