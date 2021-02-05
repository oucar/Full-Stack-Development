alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( 1 && 2 && 3 ); // 3, the last one
alert( 1 && 2 && null && 3 ); // null

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
// if all variables were falsy, Anonymous would show up.

//short-circuit
true || alert("not printed");
false || alert("printed");

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//https://javascript.info/ifelse
//https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript