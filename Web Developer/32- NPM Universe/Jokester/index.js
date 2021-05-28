// reference the name of the file, not the folder!
const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});