const args = process.argv.slice(2);  // slice after 2

// node greeterForArgs.js onur ali veli 49 50
for ( let arg of args){
    console.log(`Hi there, ${arg}`);
}