const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
// import data.json
const redditData = require('./data.json')

// !static files
// being able to access public folder outside of the base folder as well (setting the public directory) --> absolute path
app.use(express.static(path.join(__dirname, 'public')))

// ! USE EJS
// being able to access views folder outside of the base folder as well (setting the views directory)
app.set('view engine', 'ejs');
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
    const data = redditData[subreddit]; // http://localhost:3000/r/soccer/41
    console.log(data);
    // ! make sure you spread the data so that we can easily access it in ejs files
    if( data ) {
        res.render('sub', {subreddit, num, ...data });
    } else {
        res.send(`No data has been found in ${subreddit}`)
    } // end else 
})

// Error
app.get('*', (req,res) => {
    res.send('<h1>404</h1>')
})