const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ALL SHELTERS GO HERE.");
})

router.post('/', (req, res) => {
    res.send("Creating a shelter");
})

router.get('/:id', (req, res) => {
    res.send("SHELTER ID");
})

router.get('/:id/edit', (req, res) => {
    res.send("Edit shelter");
})

module.exports = router;