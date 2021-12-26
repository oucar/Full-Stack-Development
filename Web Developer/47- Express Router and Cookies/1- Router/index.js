// create the express app
const express = require('express');
const app = express();

// Routes
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

// only requests to /shelters/* will be sent to our 'router'
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
})