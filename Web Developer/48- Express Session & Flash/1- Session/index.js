const express = require('express');
const app = express();
const session = require('express-session');

// resave, saveUnitialized: check docs but false by default!
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }

// !
app.use(session(sessionOptions));

// how many times you viewed a page
app.get('/viewcount', (req, res) => {
    // count really doesn't exist, we made it up.
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})