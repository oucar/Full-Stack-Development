document.getElementByTagName("li"); // return the elements with tag li
//document.getElementByTagName("li").style.color = "purple"; // will not work, because it's an array.
document.getElementByTagName("li")[2].style.color = "purple "; // third list item will be purple.
document.getElementByTagName("li").length; // 3;

document.getElementByClassName("li");
