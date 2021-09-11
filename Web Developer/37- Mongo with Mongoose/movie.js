// https://mongoosejs.com/docs/guide.html
// default port for the mongoose is: 27017
// Mongoose connects MONGO to JS
// Mongoose is a ODM

// ! https://mongoosejs.com
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        // occurs when there is an invalid port
        console.log(`ERROR: ${err}`);
    });


// ? https://mongoosejs.com/docs/guide.html
// what a movie should look like, it's similar to classes in oop
const movieSchema = new mongoose.Schema({
    title:      String,
    year:       Number,
    score:      Number,
    rating:    String
});


// model name is 'Movie' and we are passing movieSchema as the schema!
// now we have a model class called 'Movie'
// mongoose will create a collection called 'movies' if you type Movie below
const Movie = mongoose.model('Movie', movieSchema);

// new instance of Movie (OOP)
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'PG13'});
// node  --> .load index.js --> amadeus // ! you can now access to amadeus
// amadeus.save() to save it to the database --> if it's a single instance
// ! check mongodb --> mongo --> use movieApp --> db.movies.find()
// ! then you can play with it inside the node repl --> amadeus.score = 9.5
// ! then amadeus.save() --> check in mongo shell again


// ! INSERT MANY --> creates new instances for elements of an array
// no need to use new Movie({}) ...
// no need to call .save() --> // ? validations?
// returns promise
Movie.insertMany([
    { title: 'ABC', year: 2000, score: 1, rating: 'PG13'},
    { title: 'QWE', year: 2001, score: 2, rating: 'PG13'},
    { title: 'GDF', year: 2002, score: 3, rating: 'PG13'},
    { title: 'SAD', year: 2003, score: 4, rating: 'PG13'}
])
    .then(data => { // mongoose passed called back as data
        console.log('IT WORKED!');
        console.log(data);
    })


// ! FIND
// query object is a thenable object and // ! NOT CALLBACKS!. but you still can use .then
// find one or many // ! (returns an array)
// we will use .exec() shortly
Movie.find({}).then(data => console.log(data));                     // finds an outputs all the data
Movie.find({ title: 'ABC'}).then(data => console.log(data));        // find where title is ABC
Movie.find({ year: {$gt: 2002}}).then(data => console.log(data));   // greater than 2002
Movie.find({ year: {$gte: 2003}}).then(data => console.log(data));  // greater than or equal to 2003

// find only one!  // ! returns the object! --> gives the first match
Movie.findOne({ year: {$gt: 2002}}).then(data => console.log(data));

// find by ID (will do it later)


// ! UPDATE
// doesn't give you the updated info
Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res));
Movie.updateMany({title: {$in: ['ABC']}}, {score: 100}).then(result => console.log(result))

// gives you the value before it's updated
Movie.findOneAndUpdate({title:'Amadeus'}, {year: 2021}).then(movie => console.log(movie));              // pre updated
// gives you the modified document
Movie.findOneAndUpdate({title:'Amadeus'}, {year: 2021}, {new:true}).then(movie => console.log(movie));  // post updated


// ! DELETE
Movie.remove({title: 'SAD'}).then(msg => console.log(msg));             // { n: 3, ok: 1, deletedCount: 3 }
Movie.deleteMany({year: {$gte: 2001}}).then(msg => console.log(msg));   // { n: 6, ok: 1, deletedCount: 6 }
Movie.findOneAndDelete({title: 'ABC'}).then(msg => console.log(msg));   // {_id: 60de0e7b4f019323c68d0cdd,title: 'ABC', ...}