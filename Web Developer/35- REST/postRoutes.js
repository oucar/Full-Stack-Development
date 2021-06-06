// ! Defining Express POST Routes
const express = require('express');
const app = express();


// app.use will run in every single request.
// helps us to use req.body as we want
app.use(express.urlencoded( {extended: true} ));

//  TEST THEM USING POSTMAN OR HTML FORMS 
// ? x-www-form-urlencoded type,meat - qty,2
// ! GET REQUEST
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

// ! POST REQUEST
app.post('/tacos', (req, res) => {
    console.log(req.body); // it's undefined now, fill 

    const { type, qty } = req.body; 
    res.send(`POST /tacos response --> ${type}, ${qty}`);

})

app.listen(3000, () => {
    console.log("ON PORT 3000!");
})