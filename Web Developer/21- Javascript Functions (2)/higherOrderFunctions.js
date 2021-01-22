// Passing a function as argument

const laugh = function(){
    console.log("HAHAHAHAHA");
}

function callTwice(func){
    func();
    func();
}

callTwice(laugh);