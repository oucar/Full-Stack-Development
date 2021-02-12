// method is a function that will be applied to an object

const coolMath = {

    PI: 3.14,
    square: function (num){
        return num*num;
    },
    cube: function (num){
        return num*num*num;
    }

}


// coolMath.square(2);
// coolMath.square(3);
// coolMath.PI;         etc


// THERE'S A SHORTHAND!

const newCoolMath = {
    PI: 3.14,
    square(num){
        return num*num;
    }, 
    cube(num){
        return num*num*num;
    },
    add(num1, num2){
        return num1+num2;
    }
}