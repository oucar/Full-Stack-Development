const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny');

// In every single call, use:
// app.use(express.json());
// app.use(express.urlencoded());
// CHECK THE CONSOLE.
app.use(morgan('dev'));        
app.use((req, res, next) => {
    // can use this in other functions as well because this will be called first, go the `/`
    req.requestTime = Date.now();
    console.log(`This is a ${req.method} request for ${req.path}`);
    return next();
})

// Silly and simple example of auth to understand middlewares
// http://localhost:3000/dogs/?dayak=onur
// http://localhost:3000/dogs/?password=secret
const verifyPassword = (req, res, next) => {
    // console.log(req.query);
    const { password } = req.query;
    if(password === 'chickennugget'){ 
        return next();
    }
    // for every other page
    res.send('Sorry, you need a password!');
}

// only runs for ALL the incoming requests to `/dogs/`
app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!');
    next();
})

// next middleware
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF');
})

// ! TWO CALLBACKS! 
// ! Protecting specific routes!
// http://localhost:3000/secret/?password=chickennugget
// http://localhost:3000/secret/?password=123123
app.get('/secret', verifyPassword, (req, res) => {
    res.send('Secret!');
})

// ! IF NOTHING ELSE IS MATCHED --> 404
app.use((req, res) => {
    res.send(`404! NOT FOUND!`);
})

app.listen(3000, () => {
    console.log('App is running on localhost: 3000');
})