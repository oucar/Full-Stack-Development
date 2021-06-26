// https://mongoosejs.com/docs/guide.html
// default port for the mongoose is: 27017

// ! https://mongoosejs.com
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true});


