const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ALL DOGS GO HERE.");
})

router.post('/', (req, res) => {
    res.send("Creating a DOG");
})

router.get('/:id', (req, res) => {
    res.send("DOG ID");
})

router.get('/:id/edit', (req, res) => {
    res.send("Edit a dog");
})

module.exports = router;