const container = document.querySelector('#container');

// your HTML file will look the same, but the JavaScript changes what the browser renders.
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content! (notice the class it has!)';

container.appendChild(content);


// EXERCISES
// <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');

redP.textContent = "Hey, I'm red!";
redP.setAttribute('style', 'color:red;');

container.appendChild(redP);

// <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');

blueH3.textContent = "I'm a blue h3!";
blueH3.setAttribute('style', 'color:blue;');

container.appendChild(blueH3);

//<div> with a black border and pink background color with the following elements inside of it: 
const blackDiv = document.createElement('div');
blackDiv.setAttribute('style', 'background-color:pink; border: 1px solid black;');
container.appendChild(blackDiv);

//	another <h1> that says “I’m in a div”
	const h1InDiv = document.createElement('h1');
	h1InDiv.textContent = "I am in a div!";
	blackDiv.appendChild(h1InDiv);

//	<p> that says “ME TOO!”
	const pInDiv = document.createElement('p');
	pInDiv.textContent = "I am too!";
	blackDiv.appendChild(pInDiv);

	