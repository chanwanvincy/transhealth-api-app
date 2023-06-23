const express = require('express')
const router = express.Router()

const Doctor = require('../models/doctor')

router.get('/', (req, res) => {
    Doctor
        .findAll()
        .then(doctors => res.json(doctors))
})

module.exports = router;