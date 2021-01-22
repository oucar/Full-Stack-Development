// visibility 


/*          FUNCTION SCOPE          */
let newTotalEggs = 0;
function collectEgges(){
    let totalEggs = 6;
    newTotalEggs =10;
    console.log(totalEggs); // 6
}

console.log(totalEggs);     // not defined! error!
collectEgges();             // maybe now it runs?
console.log(totalEggs);     // still not defined!!

console.log(newTotalEggs);  // always works!



let bird = 'A';
function birdWatch(){
    let bird = 'B';
    console.log(bird);          // B
}
console.log(bird);              // A



/*          BLOCK SCOPE         */
let radius = 8;
let galis = 10;
if(radius > 0){
    const PI = 3.14;
    let msg = "HI!";
    galis = 20;
}

console.log(radius);        //8
console.log(PI) ;           // PI IS NOT DEFINED!
console.log(galis);         // 10! galis has been updated


/*          LEXICAL SCOPE           */

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine'];

    function cryForHelp(){
        for (let hero of heroes){
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();

}

bankRobbery();              // it works!