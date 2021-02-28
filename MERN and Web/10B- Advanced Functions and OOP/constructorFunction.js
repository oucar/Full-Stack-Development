// Constructor Function - creates as many objects as you want                   // ! no camel case 
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

let bellBoy1 = new BellBoy("Timmy", 19, true, ["Turkish", "English"]);          // new!