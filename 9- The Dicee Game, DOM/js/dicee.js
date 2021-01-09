/* DICE 1 */

// roll the dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// change the image
var diceImg1 = document.querySelectorAll("img")[0];
diceImg1.setAttribute('src', './images/dice' + randomNumber1 + '.png');


/* DICE 2 */
// roll the dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// change the image
var diceImg2 = document.querySelectorAll("img")[1];
diceImg2.setAttribute('src', './images/dice' + randomNumber2 + '.png');


/* ANNOUNCE THE WINNER */
var title = document.querySelector(".container h1");
if (randomNumber1 > randomNumber2) {
  title.textContent = "🥇 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 Wins! 🥇";
} else {
  title.textContent = "💫 Draw! 💫";
}
