// EXPRESS
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const methodOverride = require('method-override');

const Product = require('./models/product');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));               // to be able to access req.body
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log('Connection is open!');
    })
    .catch(err => {
        console.log(`#ERROR in Mongo: ${err}`);
    })

const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];

// READ ALL
app.get('/products', async (req, res) => {
    const { category } = req.query;

    if(category){
        const products = await Product.find({category: category});
        res.render('products/index', {products, category});
    } else{
        const products = await Product.find({}); //find everything
        res.render('products/index', {products, category: 'ALL'});
    }

})

// CREATE
app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body); // not validating :/
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`products/${newProduct._id}`);
})

// READ INSTANCE
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    // console.log(foundProduct);
    res.render('products/show', {foundProduct});
})

// UPDATE
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});
})

app.put('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

// DELETE
app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


app.listen(port, () => {
    console.log(`Live on port ${port}!`);
})