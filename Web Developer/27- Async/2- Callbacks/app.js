// ONLY ONE INSTRUCTION AT A TIME --> Single threaded!

console.log("Sending request to server!  ---- 1"); // 1

setTimeout(() => {
  console.log("Here is your data from the server... ---- 2"); // ! THIS WILL BE PRINTED AFTER 3 SECONDS (not executed right away), introduction to backend
}, 3000); //3

console.log("I AM AT THE END OF THE FILE! ---- 3"); //2 
