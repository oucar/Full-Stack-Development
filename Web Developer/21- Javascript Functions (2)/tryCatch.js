try {
    hello.toUpperCase();
} catch (error) {  
    console.log("ERROR!!!");
}

console.log("Still runs:)");









function yell(msg) {
    console.log(msg.toUpperCase().repeat(3));
}

try {
    yell(123);
} catch (e) {
   console.log(e);
   console.log("Please pass a string!"); 
}
