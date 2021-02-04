const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {                                     // try these within objects!!
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}