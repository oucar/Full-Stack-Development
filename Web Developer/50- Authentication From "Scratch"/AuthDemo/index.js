const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')

// Models
const User = require('./models/user');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Auth
const bcrypt = require('bcrypt');

app.use(express.urlencoded({extended : true}));
app.use(session({secret: 'notagoodsecret'}));


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
    if(!req.session.user_id){
        res.redirect('/login');
    }

    res.send("This is a really secret page!");
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
    // session
    req.session.user_id = user._id;

    res.redirect('/');
})

// ! Login page
app.get('/login', (req, res) => {
    res.render('login');
})

// Login !
app.post('/login', async (req, res) => {
    const {password, username} = req.body;
    const user = await User.findOne({ username })
    // return true or false
    const isValidUser = await bcrypt.compare(password, user.password);

    if(isValidUser){
        res.redirect('/secret');
        // session
        req.session.user_id = user._id;

    } else{
        res.redirect('/login');
    }

})




app.listen(3000, () => {
    console.log('App is running.');
})