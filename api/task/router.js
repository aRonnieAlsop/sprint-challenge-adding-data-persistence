const router = require('express').Router()
const Tasks = require('./model')
const { checkPayload } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
});

router.post('/', checkPayload, async (req, res, next) => {
    try {
        const newTask = await Tasks.createTask(req.body)
        res.status(201).json(newTask)
    } catch (err) { next(err) }
})

module.exports = router