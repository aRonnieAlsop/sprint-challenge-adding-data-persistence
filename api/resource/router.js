// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.get()
        res.json(resources)
    } catch (err) { next(err) }
})

module.exports = router
