/*
  Created by the browser when a web page is loaded.

var titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles));             // not an array

console.log(Array.isArray(Array.from(titles))); // now it's an array

Array.from(titles).forEach((item, i) => {       // or simply use a for loop using titles.length
  console.log(item);
});

------ QUERY SELECTOR ------
const wrap = document.querySelector("#wrapper");
console.log(wrap);

const wmf = document.querySelector("#book-list li:nth-child(2) .name");     // Important!!!
console.log(wmf);

var books = document.querySelectorAll("#book-list li .name");               // Use this method if it returns html list.
Array.from(books).forEach((item, i) => {
  console.log(item);
});

------ CHANGING TEXT IN HTML ------
var books = document.querySelectorAll("#book-list li .name");     // Returns a nodelist. So actually no need to use Array.from... in this situation
books.forEach((book, i) => {
  console.log(book.textContent);
  book.textContent += " :)";
});

const bookList = document.querySelector("#book-list");
bookList.innerHTML = "<h2>Books and more books!</h2>" // not recommended...
bookList.innerHTML += "<p>This is how you add p! </p>";

------ NODE ------


*/
const banner = document.querySelector("#page-banner");
console.log("#page-banner node types is:",banner.nodeType);   // W3 Schools
console.log("#page-banner node name is:",banner.nodeName);
console.log("#page-banner node has child nodes:",banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);        // if you pass value, it doesn't include childs.
console.log(clonedBanner);



// Left: https://www.youtube.com/watch?v=YIG2_UB-C7o&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=6
