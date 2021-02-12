const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {                                     // try these within objects!!
        return `${this.firstName} ${this.lastName}`
    },

    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);			// refers to the object
            console.log(this.fullName())
        }, 1000)
    }
}