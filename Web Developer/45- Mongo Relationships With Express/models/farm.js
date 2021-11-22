const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
// ! middleware for deleting
// ! findByIdAndDelete invokes the middleware for findOneAndDelete!
farmSchema.post('findOneAndDelete', async function (farm) {
    // if it's not an empty array
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        console.log(res);
    }
})

const Farm = mongoose.model('Farm', farmSchema);


module.exports = Farm;