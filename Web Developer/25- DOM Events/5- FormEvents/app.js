// ! Important!
// Defaults behaviour submits the web page if user clicks on the button

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    // ! tweetForm.elements.propertyName -> make sure you give them name
    const usernameInput = tweetForm.elements.username;          // name = username
    const tweetInput = tweetForm.elements.tweet;                // name = tweet

    addTweet(usernameInput.value, tweetInput.value)
    
    // clear the input fields
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username)                   // insert username to bTag
    newTweet.append(bTag);                  // insert bTag to newTweet
    newTweet.append(`- ${tweet}`)           // ! modifies itself

    tweetsContainer.append(newTweet);
}





// ? EXAMPLE
