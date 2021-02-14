/*
innerText returns the visible text contained in a node, while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello',
while textContent will return 'Hello World'.
*/


// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }



// get, set attribute
const firstLink = document.querySelector('a');
firstLink.getAttribute('href');
firstLink.setAttribute('href', 'http://www.google.com');

const weirdInput = document.querySelector('input[type="text"]');



// CHANGING STYLES
const h1 = document.querySelector('h1');
h1.setAttribute('style', 'color:tomato;');

    // or

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}
