// GET /comments - list all comments
// NEW /comments/new - form to create a new comment
// POST / comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment


const express = require('express');
const app = express();
const path = require ('path');
const {v4 : uuid } = require('uuid'); // ? universally unique id --> uuid();
const methodOverride = require('method-override')
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');


// ! fake  comments for now (array of objects)
let comments = [
    {
        id: uuid(),
        username : 'Todd',
        comment : 'lolll',
    },
    {
        id: uuid(),
        username: 'oucar',
        comment: 'hehe'
    }
]

// !READ, GET
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
})

// ! NEW, just provides the form
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})

// ! NEW, posts the information
app.post('/comments', (req, res) => {
    //console.log(req.body);
    const {username, comment} = req.body;
    comments.push({ username, comment, id: uuid() });
    //res.send("it worked!");                 // ? use express redirects! 
    res.redirect('/comments');                // (status code 302, found!)
})

// !SHOW route, information about one 
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id );
    res.render('comments/show.ejs', {comment});
})


// ! FORM FOR THE UPDATE
app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id );
    res.render('comments/edit.ejs', { comment }); // we can pre-populate the form

})


// ! UPDATE (update the comment)
// ? send a PATCH REQUEST 
app.patch('/comments/:id', (req, res) => {
    // take the id and comment
    const { id } = req.params;
    const foundComment = comments.push({ username, comment, id: uuid() });
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

// ! DELETE
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter( c => c.id !== id); //returns a new array
    res.redirect('/comments');
})



app.listen(3000, () => {
    console.log("ON PORT 3000!");
})



// REMOVING AN ITEM IN ECMASCRIPT6
// let value = 3

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => item !== value)

// console.log(arr)
// // [ 1, 2, 4, 5 ]