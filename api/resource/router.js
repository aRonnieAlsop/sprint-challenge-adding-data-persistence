const express = require('express')
const Resource = require('./model')
const { checkPayload } = require('./middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.get()
        res.json(resources)
    } catch (err) { next(err) }
})

router.post('/', checkPayload, async (req, res, next) => {
    try {
        const newResource = await Resource.createResource(req.body)
        res.status(201).json(newResource)
    } catch (err) { next(err) }
})

module.exports = router
