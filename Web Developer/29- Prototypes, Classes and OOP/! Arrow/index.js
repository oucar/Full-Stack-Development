// ! Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.// 

let me = {
    name: "Ashutosh Verma",
    thisInArrow: () => {
        console.log("My name is " + this.name); // no 'this' binding here  --> My name is
    },
    thisInRegular() {
        console.log("My name is " + this.name); // 'this' binding works here --> My name is Ash..
    }
};
me.thisInArrow();
me.thisInRegular();