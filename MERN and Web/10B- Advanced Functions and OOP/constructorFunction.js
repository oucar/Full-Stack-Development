// Constructor Function - creates as many objects as you want                   // ! no camel case 
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert(`${this.name}: May I take your suitcase?`);                      // ? works with methods as well.
    }
    this.clean = function(){
        alert(`Cleaning in progress by: ${this.name}`);
    }
}

let bellBoy1 = new BellBoy("Timmy", 19, true, ["Turkish", "English"]);                      // new!
let bellBoy2 = new BellBoy("Onur", 20, true, ["Turkish", "English", "Spanish", "German"]);


bellBoy1.clean();                                // cleaning in progress by: Timmy