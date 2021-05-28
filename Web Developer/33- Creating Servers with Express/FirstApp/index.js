const express = require('express');
const app = express();
const port = 3000;

// anytime we got a request, this callback will run
app.use((req,res) => {
    console.log(`GOT A REQUEST!`)
})

// this will be rendered at http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!');           // respond with text, in html format
    res.send({color: 'blue'});          // respond with json
})

app.listen(port, () => {
    console.log(`Listening on port ${port} at http://localhost:${port}!`)
})