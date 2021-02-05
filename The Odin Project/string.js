// Replace (only the first match)

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

// concat (joins two or more strings)
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); 

let upperCase = string.charAt(0).toUpperCase() + string.slice(1); // make the first letter upper-cased

//both do the same!
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!"); 

// Script padding
 let str = "5";
str = str.padStart(4,0);
// result is 0005 

 let str = "5";
str = str.padEnd(4,0);
// result is 5000 

// charAt, charCodeAt
 var str = "HELLO WORLD";
str.charAt(0);              // returns H 
str.charCodeAt(0);         // returns 72 (UTF-16 code)
str[0];                   // returns H (read only)
// NOTE: If no character is found, [ ] returns undefined, while charAt() returns an empty string.

// indexOf: find the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// lastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// split --> turn a string to array
var str = "a,b,c,d,e,f";
var arr = str.split(",");
arr[0];                   //a

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe 
 var txt = "Hello";       // String
txt.split("");           // Split in characters 
