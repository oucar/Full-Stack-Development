// argument = parameter
// different than console.log, for sure : )

function add(x,y){

    if(typeof x !=='number' || typeof y !=='number'){
        return false;
    } // end conditional
    return (x+y);
}

const sum = add(1,2);       // sum = 3;