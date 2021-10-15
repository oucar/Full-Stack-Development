const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/farm', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// ! PRODUCT SCHEMA
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter'],
    }
});
const Product = mongoose.model('Product', productSchema);

// ! FARM SCHEMA
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
});
const Farm = mongoose.model('Farm', farmSchema);


// Create a farm

const createFarm = async () => {
    const farm = new Farm({
        name: 'Onurun Ciftligi',
        city: 'Kocaeli',
    })

    const tomatis = await Product.findOne({name: 'Tomatis'});
    farm.products.push(tomatis);
    await farm.save();
    console.log(farm);
}

const addItem = async () => {
    // find the farm
    const farm = await Farm.findOne({
        name: 'Onurun Ciftligi'
    });

    // create the item
    Product.insertMany([
        {
            name: 'Sogan',
            price: 0.99,
            season: 'Summer',
        }
    ])

    const sogan = await Product.findOne({name: 'Sogan'});

    // Push the item
    farm.products.push(sogan);

    // save 
    const res = await farm.save();

    console.log(`ITEM HAS BEEN ADDED: ${res}`);

}

const farmProducts = async (_id) => {
    
    // find the farm
    const farm = await Farm.findById(_id);

    console.log(` This farm has: ${farm.products.name}`);

}


// Initialize the products (will run only one time)
// Product.insertMany(
//     {
//         name: 'Tomatis',
//         price: 1.99,
//         season: 'Summer',
//     }
// )

createFarm();
// addItem();

farmProducts('6149f434f9c606d27a52efbe');
