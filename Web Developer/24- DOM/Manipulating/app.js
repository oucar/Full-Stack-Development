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

// MANIPULATING CLASSES
const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');

h2.classList.toggle('purple');
h2.classList.toggle('purple');      // toggling is the best option
h2.getAttribute('class');


// TRAVERSING
const paragraph = document.querySelector('p');
paragraph.parentElement;            // parent of p
paragraph.children;                 // HTMLCollection(8) [b, b, a, a, a, a, a, a]
paragraph.children[0];              // <b> Silkie </b>
paragraph.childElementCount;        // 8


const squareImg = document.querySelector('.square');
squareImg.parentElement;            // body
squareImg.childElementCount;        // 0

squareImg.nextElementSibling;       // OTHER IMG (previousSibling and nextSibling sometimes return empty text, don't use them)
squareImg.previousElementSibling;   // previous sibling, which is p


// creating new element and appending
//APPEND CHILD
const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png');
newImg.classList.add('square');
document.body.appendChild(newImg);

const newH3 = document.createElement('h3');
newH3.innerText = "I am new here!";
document.body.appendChild(newH3);

// APPEND
const p = document.querySelector('p');
p.append('yaaay! I am new here too and you can add just add me at the end of the paragraph!', ' more than one thing!')



//PREPEND
const newB = document.createElement('b');
newB.append('HELLO!!');
p.prepend(newB);


//SIBLING (insertAdjacentElement)
const siblingH1 = document.createElement('h1');
siblingH1.append('THIS IS THE SIBLING H1');
h1.insertAdjacentElement('beforebegin', siblingH1);         // beforebegin, afterbegin, beforeend, afterend


//REMOVE CHILD & REMOVE
const firstLi = document.querySelector('li');
const firstUl = document.querySelector('ul');
firstUl.removeChild(firstLi);                               // doesn't work on IE
//or firstLi.parentElement.removeChild(firstLi);            // much more browser friendly

    //or
    
const imageRemove = document.querySelector('img');
imageRemove.remove();
// or img.parentElement.removeChild(img);






//CREATING 100 BUTTONS EXAMPLE
const container = document.querySelector('#container');

for(let i = 0; i<100; i++){
    const button = document.createElement('button');
    button.textContent = "asdfasdf";
    container.appendChild(button);
}

