// EXPRESS
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Product = require('./models/product');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));               // to be able to access req.body

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => {
        console.log('Connection is open!');
    })
    .catch(err => {
        console.log(`#ERROR in Mongo: ${err}`);
    })




app.get('/products', async (req, res) => {
    const products = await Product.find({}); //find everything
    // console.log(products);
    res.render('products/index', {products});
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body); // not validating :/
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`products/${newProduct._id}`);
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    // console.log(foundProduct);
    res.render('products/show', {foundProduct});
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product});
})



app.listen(port, () => {
    console.log(`Live on port ${port}!`);
})