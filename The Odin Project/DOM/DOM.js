// querySelectorAll
/*
It’s important to note that when using querySelectorAll, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. The big distinction is that several array methods are missing from nodelists. 
One solution, if problems arise, is to convert the nodelist into an array.
*/

// Element Creation
const createdDiv = document.createElement('div');


// Append elements
parentNode.appendChild(childNode);			//  childNode as the last child of parentNode
parentNode.insertBefore(newNode, referenceNode);	//  inserts newNode into parentNode before 


// Remove elements
parentNode.removeChild(child) 				// removes child from parent node on the dom


// Adding inline styling
createdDiv.setAttribute('style', 'color: blue; background: white');    


// Editing attributes
div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute


// Working with CSS Classes
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                			// most important among all 3                
// if div doesn't have class "active" then add it, or if
// it does, then remove it


// innerHtml and textContent
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>';                   
// renders the html inside div

