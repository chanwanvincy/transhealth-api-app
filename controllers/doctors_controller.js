const express = require('express')
const router = express.Router()

const Doctor = require('../models/doctor')

router.get('/', (req, res) => {
    Doctor
        .findAll()
        .then(doctors => res.json(doctors))
})

router.post('/', (req, res) => {
    const doc_name = req.body.doc_name
    const content = ''
    const suburb = req.body.suburb
    const category = req.body.category
    const sub_category = ''
    const phone = req.body.phone
    const lat = ''
    const lng = ''
    const address = req.body.address
    const u18 = false
    const o18 = false
    const u25 = false
    const low_cost_ndis_option = false
    const gp_ref_required = false

    Doctor
        .create(doc_name, content, suburb, category, sub_category, phone, lat, lng, address, u18, o18, u25, low_cost_ndis_option, gp_ref_required)
        .then(doctor => res.json(doctor))
})

module.exports = router;