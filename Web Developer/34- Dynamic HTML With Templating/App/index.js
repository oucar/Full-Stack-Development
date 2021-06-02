const express = require('express');
const app = express();
const port = 3000;

// ! USE EJS
app.set('view engine', 'ejs');

// being able to access views folder outside of the base folder as well (setting the views directory)
const path = require('path');
app.set('views', path.join(__dirname, '/views'));


app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

// Home
app.get('/', (req, res) => {
    // res.send('This is the home page!');
    // ! rendering templated view (express is looking for views folder)
    res.render('home.ejs');
});

// Generate random number
app.get('/rand', (req,res) => {
    const num = Math.floor(Math.random() *10 +1 );
    res.render('random.ejs', { num }); // num will be passed as num
});

// Cats
app.get('/cats', (req, res) => {
    const cats = ['Onur', 'Ucar', 'Andy', 'Harris', 'Hehe', 'Cat', 'Lorem', 'Ipsum'];
    res.render('cats.ejs', { allCats: cats });
})

// Subreddit Sample Templating
app.get('/r/:subreddit/:num', (req,res) => {
    // ! take these from req.params
    const { subreddit, num} = req.params;
    res.render('sub', {subreddit, num})
})

// Error
app.get('*', (req,res) => {
    res.send('<h1>404</h1>')
})