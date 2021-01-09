// SELECTING ELEMENTS

document.getElementByTagName("li"); // return the elements with tag li
//document.getElementByTagName("li").style.color = "purple"; // will not work, because it's an array.
document.getElementByTagName("li")[2].style.color = "purple "; // third list item will be purple.
document.getElementByTagName("li").length; // 3;

document.getElementByClassName("btn"); // Gives you an array.
//document.getElementByClassName("btn").style.color = "red"; // will not work, because it's an array
document.getElementByClassName("btn")[0].style.color = "red";

document.getElementById("title").style.color="purple";    // Return a single firstElementChild

document.querySelector("h1"); // works just like css -> body, .className, #idName
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a"); // hierarcial selector
document.querySelector("li.a"); // IF THEY ARE IN THE SAME LINE, NO SPACE!
document.querySelector("#list .item"); // You only get back the first element.
document.querySelectorAll("#list .item")[2]; // Now you get all of them!


/*
  Query selector: allows more specific and complex selecting

  WATCH THIS: https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
*/



// MANIPULATING ELEMENTS

document.querySlector("h1").style.color = "red";
document.querySlector("h1").style.fontSize = "10rem";   // Check HTML DOM Style Object Documentation
document.querySlector("h1").style.lineHeight = "2.5";   // Notice that everything is string!
document.querySelector("button").style.backgroundColor = "yellow";



// You use css for styling, but you can turn styling on and off using classList.add and remove attributes.
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classLIst.remove("invisible");
document.querySlector("button").classList.toggle("invisible"); // turns on and off!


//Attributes;

document.querySelector("a").getAttribute("href");   // You can see the attributes of an element
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // changing the attribute
