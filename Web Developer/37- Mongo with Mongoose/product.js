// ! https://mongoosejs.com
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        // occurs when there is an invalid port
        console.log(`ERROR: ${err}`);
    });


// ? https://mongoosejs.com/docs/guide.html
// what a PRODUCT should look like, it's similar to classes in oop
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }, 

    
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 599}); // color: 'red' would not break the code but doesn't appear in the Product itself.
bike.save()
    .then(data => {
        console.log(data);
        console.log(`You purchased a ${data.name} for ${data.price}!`);
    })
    .catch(err => {
        console.log(`OH NO, ERROR!`);
        console.log(err);
    })