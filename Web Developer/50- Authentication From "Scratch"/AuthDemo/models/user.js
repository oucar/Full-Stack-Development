const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank'],
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank'],
    }
})

// statics will be added to the user class (to the model) -> not the particular user
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

// before a user is saved
userSchema.pre('save', async function (next) {
    // if password is modified, skip this part
    if (!this.isModified('password')) return next();
    // if a password is newly created, hash it.
    this.password = await bcrypt.hash(this.password, 12);
    next();
})


module.exports = mongoose.model('User', userSchema);