const cat = {
    name: 'Mirmir',
    color: 'Black',
    age: 3,
    meow(){
        console.log(`${this.name} says MEOWWWW`);
        // console.log(color);  // would you give you an error!
        // you access to the data in the object
    }

}

const meow2 = cat.meow;
meow2();                        // says `` MEOW! this doesn't refer to object itself


function scream(){
    console.log("AAAAAAAAAAAAAAAAAAAA");
}

window.scream;
window.scream();                    // So this is added to window object, as meow2!