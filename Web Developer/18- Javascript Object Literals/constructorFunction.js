function User(name) {
    this.name = name;
    this.isAdmin = false;
    this.sayHi = function() {
        alert( "My name is: " + this.name );
      };
}
  
let user = new User("Jack");
// let user = new User; //We can omit parentheses after new, if it has no arguments.
  
alert(user.name); // Jack
alert(user.isAdmin); // false

// pop, push are faster than shift and unshift! s and u will renumber the array.