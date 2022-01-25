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
const { response } = require('express');

app.use(express.urlencoded({extended : true}));
app.use(session({secret: 'notagoodsecret'}));

// Login middleware --> admin/ admin/set/ admin/doSomething...
const requireLogin = (req, res, next) => {
    // if not logged in
    if(!req.session.user_id){
        return res.redirect('/login');
    }

    // otherwise
    next();
}

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
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

// ! Another secret page
// You cannot see these unless you're logged in
app.get('/secret2', requireLogin, (req, res) => {
    res.render('secret');
})

// ! Register page
app.get('/register', (req, res) => {
    res.render('register');
})

// make new user and save it -> async
app.post('/register', async (req, res) => {

    const{password, username} = req.body;
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
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        //session
        req.session.user_id = foundUser._id;
        res.redirect('/secret');    
    }
    else {

        res.redirect('/login')
    }

})

// Logout --> getting rid of the user id from the session
// Should be a post route
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
})



app.listen(3000, () => {
    console.log('App is running.');
})