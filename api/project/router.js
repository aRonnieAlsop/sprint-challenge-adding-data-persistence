// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')


const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.get()
        res.json(projects)
    } catch (err) { next(err) }
})

module.exports = router