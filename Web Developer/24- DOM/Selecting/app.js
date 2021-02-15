// Document is automatically created by browser!
// tagName and Classes are HTML Collections and not an array. You can use for of though.

// ID 
const title = document.getElementById('silkieChickens');    
title.textContent = "Silkie Chinckens using getElementById();";


// TAG NAME
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// CLASS NAME
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// QUERY SELECTOR(does the same with getElementByTagname)
const links = document.querySelectorAll('p a'); // anchor tags in p

for (let link of links) {
    console.log(link.href)
}

// QUERY SELECTOR TO nth-of-type(2)
const secondImg = document.querySelector('img:nth-of-type(2)');
secondImg.setAttribute('style', 'border: 25px solid tomato;');    


// SELECTING BY ATTRIBUTE
const java = document.querySelector('a[title="Java"]');
const checkbox = document.querySelector("input[type='checkbox']")
java.setAttribute('style', 'color:red;')


