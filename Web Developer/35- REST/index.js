// GET /comments - list all comments
// POST / comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment


const express = require('express');
const app = express();
const path = require ('path');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());
app.set('view engine', 'ejs');


// ! fake  comments for now (array of objects)
const comments = [
    {
        username : 'Todd',
        comment : 'lolll',
    },
    {
        username: 'oucar',
        comment: 'hehe'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', {comments});
})


app.listen(3000, () => {
    console.log("ON PORT 3000!");
})


