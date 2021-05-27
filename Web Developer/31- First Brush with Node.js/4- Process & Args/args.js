console.log("hello from args file");

// below returns an array containing the command line arguments passed when the node.js process was launched
// first --> executable path
// second --> path to the current file
console.log(process.argv);

// ? node args.js puppies chickens hello ----> added to args array