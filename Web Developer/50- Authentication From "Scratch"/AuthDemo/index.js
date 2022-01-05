const express = require('express');
const app = express();

// Models
const User = require('./models/user');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Mongoose
mongoose.connect('mongodb://localhost:27017/',)

// ! Secret page
app.get('/secret', (req, res) => {
    res.send('You cannot see unless you are logged in.');
})

// ! Register page
app.get('/register', (req, res) => {
    res.render('register');
})



app.listen(3000, () => {
    console.log('App is running.');
})