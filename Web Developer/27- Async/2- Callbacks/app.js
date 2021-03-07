// ONLY ONE INSTRUCTION AT A TIME.

console.log("Sending request to server!  ---- 1")
setTimeout(() => {
    console.log("Here is your data from the server... ---- 2")
}, 3000)                                                            // THIS WILL BE PRINTED AFTER 3 SECONDS (not executed right away)
console.log("I AM AT THE END OF THE FILE! ---- 3")