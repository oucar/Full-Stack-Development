const express = require('express');
const router = express.Router();

// Middleware -> every route in here use this middleware
// only apply to these routes in this file.
// Otherwise we would get "SORRY NOT AN ADMIN" even in /dogs or /shelters

// ? TRY: http://localhost:3000/admin/topSecret?isAdmin=true
// ? TRY: http://localhost:3000/admin/topSecret
router.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("SORRY, NOT AN ADMIN!")
})

router.get('/topSecret', (req, res) => {
    res.send("THIS IS TOP SECRET!");
})

router.get('/rmrf', (req, res) => {
    res.send("rm -rf *!! YOU DELETED EVERYTHING!");
})

module.exports = router;