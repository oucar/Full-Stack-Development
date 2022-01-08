const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Models
const User = require('./models/user');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Auth
const bcrypt = require('bcrypt');


app.use(express.urlencoded({extended : true}));

// Mongoose
mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send("Home Page");
})

// ! Secret page
app.get('/secret', (req, res) => {
    res.send('You cannot see unless you are logged in.');
})

// ! Register page
app.get('/register', (req, res) => {
    res.render('register');
})

// make new user and save it -> async
app.post('/register', async (req, res) => {

    const{password, username} = req.body;
    const hash = await bcrypt.hash(password, 12);
    // res.send(hash);

    const user = new User({
        username,
        password: hash,
    })
    await user.save();

    res.redirect('/');
})

// ! Login page
app.get('/login', (req, res) => {
    res.render('login');
})

//
app.post('/login', async (req, res) => {
    const {password, username} = req.body;
    const user = await User.findOne({ username })
    // return true or false
    const isValidUser = await bcrypt.compare(password, user.password);

    if(isValidUser){
        res.send(`Hello, ${user.username}, it's nice to see you.`);
    } else{
        res.send(`I don't know who you are.`);
    }

})




app.listen(3000, () => {
    console.log('App is running.');
})