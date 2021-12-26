const express = require('express');
const app = express();

// ! cookie parser
const cookieParser = require('cookie-parser');

// middleware
app.use(cookieParser());

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    const { name = "No-name" } = req.cookies;
    res.send(`Hello, ${name}`);
})

app.get('/setName', (req, res) => {
    // ! sending a cookie
    // ? you need to install a cookie parser to parse these cookies (npm i cookie-parser)
    res.cookie('name', 'onur and this is a cookie!');
    res.cookie('inLoveWith', 'miray');
    res.send('OK, I JUST SENT YOU A COOKIE! CHECK YOUR DEV TOOL.')
})

app.listen(3000, () => {
    console.log("Serving.")
})