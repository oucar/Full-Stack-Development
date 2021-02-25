//Created by the browser when a web page is loaded.

var titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles));             // not an array

console.log(Array.isArray(Array.from(titles))); // now it's an array

Array.from(titles).forEach((item, i) => {       // or simply use a for loop using titles.length
  console.log(item);
});

//------ QUERY SELECTOR ------
const wrap = document.querySelector("#wrapper");
console.log(wrap);

const wmf = document.querySelector("#book-list li:nth-child(2) .name");     // Important!!!
console.log(wmf);

var books = document.querySelectorAll("#book-list li .name");               // Use this method if it returns html list.
Array.from(books).forEach((item, i) => {
  console.log(item);
});

//------ CHANGING TEXT IN HTML ------
var books = document.querySelectorAll("#book-list li .name");     // Returns a nodelist. So actually no need to use Array.from... in this situation
books.forEach((book, i) => {
  console.log(book.textContent);
  book.textContent += " :)";
});

const bookList = document.querySelector("#book-list");
bookList.innerHTML = "<h2>Books and more books!</h2>" // not recommended...
bookList.innerHTML += "<p>This is how you add p! </p>";

//------ NODE ------
const banner = document.querySelector("#page-banner");
console.log("#page-banner node types is:",banner.nodeType);   // W3 Schools
console.log("#page-banner node name is:",banner.nodeName);
console.log("#page-banner node has child nodes:",banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);        // if you pass value, it doesn't include childs.
console.log(clonedBanner);

//------TRAVERSING THE DOM ------
// BOTTOM TO TOP (FROM ELEMENT TO ITS PARENTS)
const bookList = document.querySelector("#book-list"); // from this to its parents.
console.log("the parent node is: ", bookList.parentNode);
console.log("the parent element is: ", bookList.parentElement); //they will mostly be the same.
console.log("the parent element is: ", bookList.parentElement.parentElement); //parent of parent.

// TOP TO BOTTOM (FROM ELEMENT TO ITS CHILDREN)
console.log(bookList.childNodes); // from that to its children  --> //text represent the linebreaks between this and h2 etc, so let's get rid of them
console.log(bookList.children);   // This is better!

// SIBLING ELEMENTS (ELEMENTS THAT HAS THE SAME PARENTS)
const bookListSib = document.querySelector("#book-list");
console.log("book-list next sibling is: ", bookListSib.nextSibling); // includes the line break
console.log("book-list next ELEMENT sibling is: ", bookListSib.nextElementSibling); // doesn't include the linebreak
console.log("book-list previous sibling is: ", bookListSib.previousSibling);
console.log("book-list previous ELEMENT sibling is: ", bookListSib.previousElementSibling);

bookListSib.previousElementSibling.querySelector("p").innerHTML += '<br/> Haha! '; // searches inside the header

//------EVENTS ------
var h2 = document.querySelector("#book-list h2");

h2.addEventListener("click", function(e){ // you can call the parameter whatever you want, it represents the event itself
  console.log(e.target);                  // which element is clicked.
  console.log(e);
});

// Not a good practice because the new elements you added will not work (delete)
var btns = document.querySelectorAll("#book-list .delete");
btns.forEach((btn) => {                  // you need to iterate thru buttons and add event listener to each of them

  btn.addEventListener('click', function(e){
    const li = e.target.parentElement;
    console.log(li);
    li.parentNode.removeChild(li);

  })
});

// Prevents the default behaviour
const link = document.querySelector("#page-banner a");
link.addEventListener('click', function(e){
  e.preventDefault();
  console.log("navigation to", e.target," was prevented.");
})

//------CHANGE ATTRIBUTES ------
var li = document.querySelector('li:last-child');
var book = document.querySlector('li:first-child.name');
book.getAttribute('class');
book.setAttribute('class', ''name-2);
book.hasAttribute('class');
book.hasAttribute('href');
book.removeAttribute('class');

