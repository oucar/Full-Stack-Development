// ! https://mongoosejs.com
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        // occurs when there is an invalid port
        console.log(`ERROR: ${err}`);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
})

// no reason to take up full space by saving fullName in database.
// NOT a function, but a VIRTUAL DATA?
personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

// ! MIDDLEWARE
personSchema.pre('save', async function(){
    console.log("About to save your data....");
})

personSchema.post('save', async function(){
    console.log("Saved your data, thanks!");
})


const Person = mongoose.model('Person', personSchema);

const onur = new Person({first: 'Onur', last: 'Ucar'});
const m = new Person({first: 'Miray', last: 'Bas'});
m.save().then( p => console.log(p) );

console.log(`${onur.fullName}`);
onur.fullName = `Onur Linus Ucar`;              // you have to use a setter in your setter.