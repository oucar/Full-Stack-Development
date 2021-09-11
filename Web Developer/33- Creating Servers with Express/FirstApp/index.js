const express = require('express');
const app = express();
const port = 3000;

// anytime we got a request, this callback will run
// app.use((req,res) => {
//     console.log(`GOT A REQUEST!`)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port} at http://localhost:${port}!`)
})


// ! the routes

// '/' => HOME!
// /cats => meow
// /dogs => woof


// this will be rendered at http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!'); // respond with text, in html format
    console.log('/');
    //res.send({color: 'blue'});          // respond with json
})

app.get('/cats', (req, res) => {
    res.send('meow!');
})

// post request for cats
// ! POSTMAN
app.post('/cats', (req, res) => {
    res.send(`POST request has been received!!`);
})

app.get('/dogs', (req, res) => {
    res.send('woof!');
})


// ABOVE IS NOT REALLY PRACTICAL
app.get('/r/:subreddit', (req, res) => {

    console.log(req.params); // ! this is how you would access subreddit name
    const subredditName = req.params.subreddit;
    res.send(`This is the "${subredditName}" subreddit!`);

})


app.get('/r/:subreddit/:postId', (req, res) => {

    const subredditName = req.params.subreddit;
    const id = req.params.postId;

    res.send(`This is the post "${id}" from the "${subredditName}" subreddit!`);
})

// Query Strings
// try this in postman
// http://localhost:3000/search?&q=deneme&name=onur
app.get('/search', (req, res) => {
    const { q } = req.query;

    if(!q) { 
        res.send('NOTHING FOUND IF NOTHING SEARCHED! :)');
    } else {
        console.log(q);
        res.send(`${q.q} and ${q.name}`);
    }

})

// anything else
app.get('*', (req, res) => {
    res.send(`I don't know this path...`);
})



// ! nodemon index.js to activate nodemon