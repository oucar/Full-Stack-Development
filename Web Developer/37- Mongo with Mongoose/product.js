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
// ! SCHEMA VALIDATIONS: https://mongoosejs.com/docs/validation.html
// what a PRODUCT should look like, it's similar to classes in oop
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    price: {
        type: Number,
        required: true, 
        min: [0, 'Price cannot be smaller than 0.'],
    }, 
    onSale: {
        type: Boolean,
        default: false,
    },
    categories: {
        type: [String],             // array of strings
        default : ['Cycling'],
    },
    qty: {
        online:{
            type: Number,
            default: 0,
        },
        inStore: {
            type: Number,
            default: 0,
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],      // can be any of these
    }
})

// ! DO NOT USE ARROW FUNCTION!
// if it is directly about the model itself, put it in the model
// ! INSTANCE METHODS --> deals with individual things.
productSchema.methods.greet = function (){
    console.log(`HELLO!!`);
    console.log(`- from ${this.name}`);     // refers to foundProduct -> foundProduct.greet();
}

productSchema.methods.toggleOnSale = function (){
    this.onSale = !this.onSale;
    return this.save();                     // saving takes time
}

productSchema.methods.addCategory = function (newCategory){
    this.categories.push(newCategory);
    return this.save();                     //thennable
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    // foundProduct.greet();
    console.log(foundProduct);

    await foundProduct.toggleOnSale();
    console.log(foundProduct);

    await foundProduct.addCategory('ONUR41');
    console.log(foundProduct);
}

// ! STATIC METHODS --> usually performs crud operations
productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale: true, price: 0});       // this.updateMany or Product.updateMany -> // ! DO NOT HARDCODE IT!
}

const Product = mongoose.model('Product', productSchema);




const bike = new Product({name: 'Mountain Bike', price: 599, onSale: true, categories: ['Cycling', 'Outdoor'], size: 'L'}); // color: 'red' would not break the code but doesn't appear in the Product itself.
bike.save()
    .then(data => {
        console.log(data);
        console.log(`You purchased a ${data.name} for ${data.price}!`);
    })
    .catch(err => {
        console.log(`OH NO, ERROR!`);
        console.log(err);
    })

const helmet = new Product({name: 'Bike Helmet', price: 19.99}); //  onSale set to false by default
helmet.save()
    .then(data => {
        console.log(data);
        console.log(`You purchased a ${data.name} for ${data.price}!`);
    })
    .catch(err => {
        console.log(`OH NO, ERROR!`);
        console.log(err);
    })

// APPLY VALIDATIONS (NEGATIVE NUM WOULD GIVE ERROR)
Product.findOneAndUpdate({ name: 'Mountain Bike' }, { price: 0.99 }, { new:true, runValidators: true })
    .then(data => {
        console.log(data);
        console.log(`You purchased a ${data.name} for ${data.price}!`);
    })
    .catch(err => {
        console.log(`OH NO, ERROR!`);
        console.log(err);
    })


findProduct();                                              // instance method
Product.fireSale().then(res => console.log(res));           // static method
