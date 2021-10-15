const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// User Schema
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            // will there be an id by default? : // ! YES
            // _id: { id: false },
            street: String,
            city: String,
            state: String,
            zip: Number,
        }
    ]
})

const User = mongoose.model('User', userSchema);

// Create user
const makeUser = async (firstGiven, lastGiven) => {
    const user = new User({
        first: firstGiven,
        last: lastGiven,
    })
    user.addresses.push(
        {
            street: '123',
            city: 'Noblesville',
            state: 'IN',
            zip: 46060,
        },
        {
            street: '999',
            city: 'Fishers',
            state: 'IN',
            zip: 12345
        }
    )

    let res = await user.save()
    console.log(res);
    // db.practice.find()
}

const addAddress = async (_id) => {

    // find the user
    const userFound = await User.findById(_id);
    userFound.addresses.push({
        street: '15408',
        city: 'Noblesville',
        state: 'IN',
        zip: 12345
    });

    const res = await userFound.save();
    console.log(res);

}
makeUser();
addAddress('6149e3a04532e055d7504ec5');