// IMPORT, MONGOOSE
const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log('Connection is open!');
    })
    .catch(err => {
        console.log(`#ERROR in Mongo: ${err}`);
    })

// const p = new Product({
//     name: 'Ruby',
//     price: 1.99,
//     category: 'fruit',
// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(err => {
//         console.log(`#Error while saving! -- ${err}`);
//     })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit',
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit',
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

