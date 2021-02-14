// Document is automatically created by browser!


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

// TAG NAME (does the same with getElementByTagname)
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

